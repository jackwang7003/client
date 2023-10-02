
import styled from "styled-components";
import {useState} from "react";
import { Navigate } from "react-router-dom";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        );

    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;



const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                setErrorMsg("");
            }, 2000);
            return setErrorMsg("Passwords do not match");
        }

        try {
            fetch('https://fakestoreapi.com/users', {
                method: 'POST',
                body: JSON.stringify({
                    username:username,
                    email:email,
                    password:password,
                    name:{firstname:name, lastname:lastName}
                    
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            
                setSuccessMsg("User created. Please login.");
                setErrorMsg("");
                setUsername("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setTimeout(() => {
                    setSuccessMsg("");
                }, 2000);
                Navigate("/login");
            
        } catch (err) { setErrorMsg(" "); }

        
    }


    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" onChange={(e)=>setName(e.target.value)}/>
                    <Input placeholder="last name" onChange={(e)=>setLastName(e.target.value)}/>
                    <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>    
                    <Input placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                    <Input placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
                    <Input placeholder="confirm password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                </Form>
                <Button onClick={handleSubmit}>CREATE</Button>
                {errorMsg && <span style={{color: "red", textAlign: "center"}}>{errorMsg}</span>}
                {successMsg && <span style={{color: "green", textAlign: "center"}}>{successMsg}</span>}
            </Wrapper>
        </Container>
    );
    }

export default Register;