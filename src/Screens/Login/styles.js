import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 0 2rem;
    background: linear-gradient(45deg, #6C5B7B, #C06C84, #F67280); 
    color: #fff; /* Texto branco para contraste */
`;

export const LoginForm = styled.form`
    background-color: rgba(255, 255, 255, 0.1); 
    border-radius: 8px; 
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); 
    width: 100%;
    max-width: 480px;
    padding: 2rem;
    margin-top: 2rem;
`;

export const Field = styled.div`
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.8rem;
    border: none;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.1); 
    color: #fff;
    &:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    }
`;

export const Actions = styled.div`
    text-align: center;
    margin-top: 1rem;
`;

export const Button = styled.button`
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 5px;
    background-color: #F67280;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #C06C84;
    }
`;
