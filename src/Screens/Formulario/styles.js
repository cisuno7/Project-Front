import styled from 'styled-components';

export const AppContainer = styled.div`
    font-family: 'Arial', sans-serif;
    padding: 20px;
    background-color: #f2f2f2;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px; 
`;


export const FormularioContainer = styled.div`
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    width: 100%;
    max-width: 600px;
`;

export const TabelaContainer = styled.div`
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
`;

export const Button = styled.button`
    padding: 10px 15px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;


export const StyledInput = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;

    &:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
`;
