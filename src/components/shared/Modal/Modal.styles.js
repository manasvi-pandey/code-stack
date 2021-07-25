import styled from 'styled-components';

const ModalWrapper = styled.div`
    z-index: 1;
    position: fixed;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    animation: renderBackdrop .3s;

    .modal-container {
        background: #fff;
        border-radius: 1rem;
        min-height: 20rem;
        width: 80%;
        position: absolute;
        top: 25%;
        animation: renderModalContainer .3s;
    }

    .modal {
        font-family: "Noto Sans JP", sans-serif;
        padding: 2rem;

        &-title {
            font-size: 2.6rem;
            font-weight: bolder;
        }

        &-body {
            font-size: 1.4rem;
            margin-top: 1rem;
        }

        &-buttons {
            display: flex;
            margin-top: 1.6rem;
        }

        &-button__close {
            display: flex;
            justify-content: flex-end;

            ion-icon {
                font-size: 1.6rem;
            }
        }
    }

    @keyframes renderBackdrop {
        0% {
            opacity: 0;
        }
    }

    @keyframes renderModalContainer {
        0% {
            transform: translateY(-200%);
        }
    }
`;

export default ModalWrapper;