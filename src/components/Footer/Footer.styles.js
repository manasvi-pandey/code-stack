import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5.6rem;
  border: 1px solid rgba(0, 0, 0, .2);
  display: flex;
  justify-content: space-around;
  align-items: center;

  ion-icon {
    font-size: 2.4rem;
    color: var(--color-gray-2);
  }

  .edit-icon {
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-1);
    padding: 1.4rem;
    border-radius: 10rem;
    position: absolute;
    left: 50%;
    bottom: 50%;
    transform: translateX(-50%);
    box-shadow: var(--shadow-primary);

    ion-icon {
      color: #fff;
    }
  }
`;

export default FooterWrapper;
