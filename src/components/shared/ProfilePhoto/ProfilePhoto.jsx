import { useContext } from "react";
import styled from "styled-components";
import hulk from "../../../assets/hulk.svg";
import { AuthContext } from "../../../store/auth-context";

const ProfileWrapper = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border: 3px solid var(--color-1);
  border-radius: 10rem;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export default function ProfilePhoto({
  height = "50px",
  width = "50px",
  cta = () => {},
}) {
  const { authUser } = useContext(AuthContext);

  return (
    <ProfileWrapper height={height} width={width} onClick={cta}>
      <img alt="Profile" src={authUser?.uid ? authUser.photoURL : hulk} />
    </ProfileWrapper>
  );
}
