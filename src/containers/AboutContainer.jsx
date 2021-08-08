import styled from "styled-components";

const AboutWrapper = styled.div`
  padding: 2rem;
  font-family: "Noto Sans JP", sans-serif;
  .app-info {
    display: flex;
    align-items: baseline;

    h1 {
      font-size: 3.4rem;
      font-weight: 900;
    }

    p {
      font-size: 1.4rem;
      margin-left: 1.2rem;
      color: var(--color-gray-3);
    }
  }

  .app-text {
    margin-top: 2.6rem;
    font-size: 1.4rem;
  }

  .github {
    margin-top: 2.4rem;
    font-size: 2.4rem;
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: #000;
    }

    ion-icon {
      margin-left: 1.4rem;
    }
  }

  .copyright {
    margin-top: 6rem;
    color: var(--color-gray-3);

    span {
      color: var(--color-2);
    }
  }
`;

export default function AboutContainer() {
  return (
    <AboutWrapper>
      <div className="app-info">
        <h1>CodeStack</h1>
        <p className="version">v. 0.0.1</p>
      </div>
      <div className="app-text">
        <p>
          CodeStack is a Blog for Coders built on ReactJS and Firebase.
          CodeStack offers secure Google Authentication to new users which sets
          them up for usage in less then a minute. Google Authentication is
          powered by Google Firebase and is 100% secure
          <br />
          <br />
          It is an Open Source Project open to contributions.
        </p>
        <p className="github">
          <a href="https://github.com/manasvi-pandey/code-stack">
            Star or Contribute on
          </a>
          <ion-icon name="logo-github"></ion-icon>
        </p>
        <p className="copyright">
          CodeStack 2021 &copy; Crafted by <span>Manasvi Pandey</span>
        </p>
      </div>
    </AboutWrapper>
  );
}
