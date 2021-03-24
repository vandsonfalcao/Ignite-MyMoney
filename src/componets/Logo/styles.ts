import styled from "styled-components";

export const Container = styled.div`
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
        color: var(--text-title);
        text-shadow: 1px 1px 2px var(--gold-light);
    }
`