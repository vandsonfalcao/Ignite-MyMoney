import styled from "styled-components";
import coinImg from '../../assets/coin.png'

export const ContainerCoin = styled.section`
    width: 100vw;
    height: 100vh;
    
    position: absolute;
    overflow: hidden;

    display: flex;
    justify-content: space-around;
    div {
        width: 50px;
        height: 50px;

        background: url(${coinImg});
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 100%;

        animation: coin-falling 4s ease-in infinite;
    }
    .coin-one {
        animation-delay: -5s;
    }
    .coin-two {
        animation-delay: -3s;
    }
    .coin-tree {
        animation-delay: -4s;
    }
    .coin-four {
        animation-delay: -2.5s;
    }
    .coin-five {
        animation-delay: 0s;
    }
    .coin-six {
        animation-delay: -4.5s;
    }
    .coin-seven {
        animation-delay: -1s;
    }
    @keyframes coin-falling {
        0% {
            transform: translate(0vw, -20vh);
        }
        100% {
            transform: translate(0vw, 100vh) rotateY(360deg) rotateX(45deg);
        }
    }
`