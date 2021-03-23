import styled from 'styled-components'

export const Container = styled.div`
    width: 80vw;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background: var(--background);
`
export const ContainerMensage = styled.header`
    max-width: 50%;
    font-size: 2rem;
    font-weight: 600;
    color: #daa520;
`
export const ContainerSignIn = styled.main`
    max-width: 400px;
    padding: 20px 30px;
    position: relative;

    background: var(--shape);
    border-radius: 20px;
    box-shadow: 1px 2px 1px #daa520;
    h2 {
            color: var(--text-title);
        }
    button {
        display: flex;
        align-items: center;
        margin: 15px 0;
        padding: 10px;

        border: 0;  
        border-bottom: 1px solid transparent;
        border-radius: 5px;
        transition: all 0.2s;
        img {
            margin-right: 15px;
        }
    }
    button:hover {
        border-bottom: 1px solid #daa520;
    }
`