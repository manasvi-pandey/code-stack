import styled from "styled-components";

const ProfileWrapper = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background: var(--color-1);
  border-radius: 10rem;
`;

export default function ProfilePhoto({ height = "50px", width = "50px" }) {
  return <ProfileWrapper height={height} width={width}></ProfileWrapper>;
}
