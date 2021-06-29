import styled from "styled-components";
import NotFoundImage from "../assets/bookmarks_not_found.svg";

const BookmarksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;

  img {
    width: 30rem;
  }

  p {
    margin-top: 5rem;
    font-size: 2.4rem;
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 900;
    opacity: 0.6;
  }
`;

export default function BookMarksContainer() {
  return (
    <BookmarksWrapper>
      <img src={NotFoundImage} alt="Bookmarks not found" />
      <p>No Bookmarks found</p>
    </BookmarksWrapper>
  );
}
