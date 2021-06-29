import styled from "styled-components";
import ProfilePhoto from "../components/shared/ProfilePhoto/ProfilePhoto";

const SingleBlogWrapper = styled.div`
  padding: 2rem 2rem 20rem 2rem;
  margin-top: 2rem;
  font-family: "Noto Sans JP", sans-serif;

  .author_details {
    display: flex;
    align-items: center;
  }

  .author {
    margin-left: 1rem;

    &__name {
      font-weight: 700;
      font-size: 1.4rem;
      letter-spacing: 0.01px;
      color: rgba(0, 0, 0, 0.9);
    }

    &__time {
      color: var(--color-gray-3);
    }
  }

  .post_area {
    margin-top: 3.4rem;
    font-family: "Noto Sans JP", sans-serif;

    .post_area-title {
      font-size: 2.8rem;
      font-weight: 900;
      color: rgba(0, 0, 0, 0.8);
    }

    .post_area-image {
      margin-top: 2.2rem;
      height: 20rem;
      width: 100%;
      background: var(--color-1);
      border-radius: 1rem;
    }

    .post_area-text {
      font-size: 1.3rem;
      margin-top: 1.6rem;
      padding: 2rem;
      color: rgba(0, 0, 0, 0.8);
    }
  }

  .post_stats {
    margin-top: 1rem;
    padding: 1rem;
    color: rgba(0, 0, 0, 0.6);
    font-family: "Noto Sans JP", sans-serif;
    display: flex;

    &-likes {
      display: flex;
      align-items: center;
      font-size: 1.5rem;

      ion-icon {
        margin-left: 0.5rem;
      }
    }

    &-views {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      margin-left: 2rem;

      ion-icon {
        margin-left: 0.5rem;
      }
    }
  }
`;

export default function SingleBlogContainer() {
  return (
    <SingleBlogWrapper>
      <div className="author_details">
        <ProfilePhoto height="40px" width="40px" />
        <div className="author">
          <p className="author__name">Manasvi Pandey</p>
          <p className="author__time">2h ago</p>
        </div>
      </div>
      <div className="post_area">
        <h1 className="post_area-title">Post Title should be here</h1>
        <div className="post_area-image"></div>
        <div className="post_area-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          exercitationem et nisi, quod tempore, quae, blanditiis deserunt ab
          voluptas molestias excepturi? Facilis dolorum eaque quidem soluta
          tempore enim magni rerum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Placeat exercitationem et nisi, quod tempore, quae,
          blanditiis deserunt ab voluptas molestias excepturi? Facilis dolorum
          eaque quidem soluta tempore enim magni rerum.
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          exercitationem et nisi, quod tempore, quae, blanditiis deserunt ab
          voluptas molestias excepturi? Facilis dolorum eaque quidem soluta
          tempore enim magni rerum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Placeat exercitationem et nisi, quod tempore, quae,
          blanditiis deserunt ab voluptas molestias excepturi? Facilis dolorum
          eaque quidem soluta tempore enim magni rerum.
        </div>
      </div>
      <div className="post_stats">
        <div className="post_stats-likes">
          <p>3</p>
          <ion-icon name="heart-empty"></ion-icon>
        </div>
        <div className="post_stats-views">
          <p>100</p>
          <ion-icon name="eye"></ion-icon>
        </div>
      </div>
    </SingleBlogWrapper>
  );
}
