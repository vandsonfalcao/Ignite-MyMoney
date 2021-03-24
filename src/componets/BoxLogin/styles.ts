import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-rows: 15vh 70vh;
    gap: 0;
    
    background: var(--background);
    
    font-family: 'Poppins', sans-serif;
`
export const ContainerHeader = styled.header`
    width: 80vw;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    img {
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
    }
    span {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--text-title)
    }
`
export const ContainerMain = styled.div`
    width: 80vw;
    height: 100%;
    margin: 0 auto;
    div {
        width: 100%;
        height: 100%;
        
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
export const ContainerMensage = styled.div`
    animation: appearing-from-left 2s normal;
    h1 {
        font-size: 6rem;
        font-weight: 600;
        color: var(--gold);
    }
`
export const ContainerSignIn = styled.main`
    min-width: 310px;
    padding: 20px 30px;
    position: relative;

    background: var(--shape);
    border-radius: 20px;
    box-shadow: 1px 2px 1px var(--gold);

    animation: appearing-from-right 2s normal;
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
        border-radius: 10px;
        transition: all 0.2s;
        img {
            margin-right: 15px;
        }
    }
    button:hover {
        border-bottom: 1px solid var(--gold);
    }
`