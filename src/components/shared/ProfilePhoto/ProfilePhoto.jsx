import styled from "styled-components";

const ProfileWrapper = styled.div`
  height: 50px;
  width: 50px;
  background: var(--color-1);
  border-radius: 10rem;
`;
export default function ProfilePhoto() {
  return <ProfileWrapper></ProfileWrapper>;
}
