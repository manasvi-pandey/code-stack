import { useContext } from "react";
import styled from "styled-components";
import Button from "../components/shared/Button/Button";
import { AuthContext } from "../store/auth-context";

const ProfileWrapper = styled.div`
  padding: 2rem;

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

    .detail {
      font-size: 3rem;
      color: var(--color-gray-3);
    }

    .detail-about {
      font-size: 1.6rem;
      margin-top: 1rem;
    }
  }
`;

export default function ProfileContainer() {
  const { handleLogout } = useContext(AuthContext);

  return (
    <ProfileWrapper>
      <h1>Your Profile</h1>
      <div className="profile-details">
        <p className="heading">Full Name</p>
        <p className="detail">Manasvi Pandey</p>
      </div>
      <div className="profile-details">
        <p className="heading">About</p>
        <p className="detail-about">Web Software Developer</p>
      </div>
      <Button additionalStyles={{ marginTop: "3rem" }} cta={handleLogout}>
        Sign out
      </Button>
    </ProfileWrapper>
  );
}
