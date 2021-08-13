import { useContext, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Button from "../components/shared/Button/Button";
import Modal from "../components/shared/Modal/Modal";
import { db } from "../firebase";
import { AuthContext } from "../store/auth-context";

const ProfileWrapper = styled.div`
  padding: 2rem;
  min-height: 85vh;

  h1 {
    font-size: 3.2rem;
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 900;
  }

  .profile-details {
    margin-top: 2.6rem;
    font-family: "Noto Sans JP", sans-serif;

    .heading {
      font-size: 2rem;
      font-weight: 700;
    }

    .name-and-role {
      display: flex;
      align-items: center;

      .role {
        margin-top: 1rem;
        margin-left: 2rem;
        background: var(--color-1);
        padding-inline: 0.8rem;
        padding-block: 0.4rem;
        color: #fff;
        border-radius: 1rem;
      }
    }

    .detail {
      font-size: 3rem;
      color: var(--color-gray-3);
    }

    .detail-about {
      font-size: 1.6rem;
      margin-top: 1rem;
      color: var(--color-gray-3);
      display: flex;
      align-items: center;

      ion-icon {
        margin-left: 1rem;
        cursor: pointer;
        color: var(--color-2);
      }
    }

    .detail-doj {
      margin-top: 3rem;

      h3 {
        font-size: 2rem;
      }

      p {
        margin-top: 1rem;
        color: var(--color-gray-3);
        font-size: 1.6rem;
      }
    }
  }
`;

export default function ProfileContainer() {
  const { authUser, handleLogout } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [modalVisibility, setModalVisibility] = useState(false);

  const textareaRef = useRef(null);

  useEffect(() => {
    authUser.uid && getProfileInformation(authUser);
  }, [authUser]);

  function getProfileInformation(user) {
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((res) => {
        setUserData(res.data());
      })
      .catch((err) =>
        console.error("Unable to get profile details ❌: " + err)
      );
  }

  function getNumberOfDaysSinceJoining(date) {
    let oneDay = 24 * 60 * 60 * 1000;
    let doj = date;
    let currentDate = new Date();

    return Math.round(Math.abs((doj - currentDate) / oneDay)) === 1
      ? Math.round(Math.abs((doj - currentDate) / oneDay)) + " day"
      : Math.round(Math.abs((doj - currentDate) / oneDay)) + " days";
  }

  function openAboutEditModal() {
    setModalVisibility(true);
  }

  function closeAboutEditModal() {
    setModalVisibility(false);
  }

  function saveAboutChanges() {
    if (textareaRef.current) {
      let value = textareaRef.current.value;
      if (userData.about !== value) {
        setUserData((prev) => ({ ...prev, about: value }));
        updateAbout(value);
      }

      setModalVisibility(false);
    }
  }

  function updateAbout(value) {
    let batch = db.batch();

    let userRef = db.collection("users").doc(userData.id);
    batch.update(userRef, { about: value });

    batch
      .commit()
      .then(() => console.log("Record updated ✔"))
      .catch((err) => console.error("Unable to update record ❌: " + err));
  }

  return (
    <>
      <ProfileWrapper>
        <h1>Your Profile</h1>
        <div className="profile-details">
          <p className="heading">Full Name</p>
          <div className="name-and-role">
            <p className="detail">
              {userData.fullname ? userData.fullname : ""}
            </p>
            <p className="role">{userData.role ? userData.role : ""}</p>
          </div>
        </div>
        <div className="profile-details">
          <p className="heading">About</p>
          <div className="detail-about">
            <p>{userData.about ? userData.about : ""}</p>
            <ion-icon name="create" onClick={openAboutEditModal}></ion-icon>
          </div>
          <div className="detail-doj">
            <h3>Member of Code Stack since</h3>
            <p>
              {userData.date_of_joining
                ? getNumberOfDaysSinceJoining(
                    new Date(userData.date_of_joining.seconds * 1000)
                  )
                : ""}
            </p>
          </div>
        </div>
        {userData.role === "admin" && (
          <Button additionalStyles={{ marginTop: "3rem" }}>Admin area</Button>
        )}
        <Button
          additionalStyles={{ marginTop: "3rem", marginLeft: ".4rem" }}
          cta={handleLogout}
        >
          Sign out
        </Button>
      </ProfileWrapper>

      <Modal modalVisibility={modalVisibility} closeModal={closeAboutEditModal}>
        <div className="modal-title">Edit About</div>
        <div className="modal-body">
          <textarea
            ref={textareaRef}
            className="edit-textarea"
            defaultValue={userData.about}
          />
        </div>
        <div className="modal-buttons">
          <Button
            additionalStyles={{ display: "flex", alignItems: "center" }}
            cta={saveAboutChanges}
          >
            Save changes
          </Button>
          <Button
            additionalStyles={{ marginLeft: ".6rem" }}
            cta={closeAboutEditModal}
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
}
