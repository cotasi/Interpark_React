import styled from "styled-components"

export const Title = styled.div`
    text-align: center;
    &.none {
        display: none;
    }
    h2 {
        font-size: 18px;
        font-weight: 700;
        @media (max-width: 550px) {
            font-size: 16px;
        }
        @media (max-width: 360px) {
            font-size: 14px;
        }
    }
    p {
        @media (max-width: 550px) {
            font-size: 14px;
        }
        @media (max-width: 360px) {
            font-size: 12px;
        }
    }
    @media (max-width: 756px) {
        display: block;
    }
`;

export const Categorytab = styled.li`

`;