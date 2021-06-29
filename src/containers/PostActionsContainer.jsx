import styled from "styled-components";
import Button from "../components/shared/Button/Button";

const PostActionsWrapper = styled.div`
  padding: 2rem;
  font-family: "Noto Sans JP", sans-serif;

  .container_title {
    font-size: 1.6rem;
    font-weight: 900;
  }

  .input_container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    input,
    select,
    textarea {
      padding: 1.2rem;
      margin-top: 2rem;
      border-radius: 2rem;
      border: 1px solid var(--color-gray-2);

      &:focus {
        outline: none;
        border: 1px solid var(--color-2);
      }
    }

    select {
      option {
        border-radius: 2rem;
        cursor: pointer;
      }
    }

    textarea {
      &::placeholder {
        font-family: "Noto Sans JP", sans-serif;
        font-size: 1.2rem;
      }
    }
  }

  .post_action {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
  }
`;

export default function PostActionsContainer() {
  return (
    <PostActionsWrapper>
      <div className="container_title">
        <h1>Create a new Post</h1>
      </div>
      <div className="input_container">
        <input type="text" placeholder="Title for you post" />
        <select>
          <option value="">Select a category</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="PHP">PHP</option>
          <option value="ReactJS">ReactJS</option>
        </select>
        <input type="text" placeholder="Relevant image link related to post" />
        <textarea
          placeholder="Write a brief post body here"
          rows="10"
        ></textarea>
        <div className="post_action">
          <Button>Go back</Button>
          <Button additionalStyles={{ marginLeft: ".6rem" }}>
            Create new post
          </Button>
        </div>
      </div>
    </PostActionsWrapper>
  );
}
