import styled from "styled-components";
import hulk from "../../../assets/hulk.svg";

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
  imgURL = "",
  cta = () => {},
}) {
  return (
    <ProfileWrapper height={height} width={width} onClick={cta}>
      <img alt="Profile" src={imgURL !== "" ? imgURL : hulk} />
    </ProfileWrapper>
  );
}
