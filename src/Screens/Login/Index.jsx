import React, { useState } from 'react';
import { LoginContainer, LoginForm, Field, Label, Input, Actions, Button } from './styles';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", {email, password});
    }

    return (
        <LoginContainer>
            <h1 className="title">Login</h1>
            <LoginForm onSubmit={handleSubmit}>
                <Field>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Field>
                <Field>
                    <Label htmlFor="password">Senha</Label>
                    <Input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Field>
                <Actions>
                    <Button type="submit">Entrar</Button>
                </Actions>
            </LoginForm>
        </LoginContainer>
    )
}

export default Login;
