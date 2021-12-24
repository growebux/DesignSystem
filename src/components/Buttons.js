import styled from "styled-components";

const primaryBlue = "#276738"

const Button = styled.button`
    padding: 20px 59px;
    font-size: 1rem;
    border-radius: 10px;
    min-width:100px;
    cursor: pointer;
    
`;

const PrimaryButton = styled(Button)`
    background-color: ${primaryBlue};
    border: none;
    color: white;
    
`;



export default PrimaryButton;