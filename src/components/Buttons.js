import styled from "styled-components";

const PrimaryDarkPurple = "#60308C";


export const Box = styled.canvas`
    padding: 20px 59px;
    font-size: 1rem;
    border-radius: 10px;`

const Button = styled.button`
    padding: 20px 59px;
    font-size: 1rem;
    border-radius: 10px;
    min-width:100px;
    cursor: pointer;
    font-family: "Roboto Mono", arial;
`;

const PrimaryButton = styled(Button)`
    background-color: ${PrimaryDarkPurple};
    border: none;
    color: white;
`;
 
export const SecondaryLightPurple = styled(Button)`
    background: none;
    border: 2px solid ${PrimaryDarkPurple};
    color: ${PrimaryDarkPurple}
`

export const TertiaryPurple = styled(Button)`
    background: none;
    border: none;
    color: ${PrimaryDarkPurple}
`



export default PrimaryButton;