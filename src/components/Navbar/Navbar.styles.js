import styled from 'styled-components';

const NavbarWrapper = styled.nav`
    padding: 2rem 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ion-icon {
        font-size: 3rem;
    }

    .logo {
        font-size: 2.6rem;
        font-family: "Noto Sans JP", sans-serif;

        &__first {
            color: var(--color-2);
        }
    }
`;

export default NavbarWrapper;