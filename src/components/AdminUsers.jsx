import styled from "styled-components";
import {useState} from "react";
import { deleteUser, updateUser } from "./fetchApi";


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


const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;

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



const AdminUsers = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setId] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    
    const [successMsg, setSuccessMsg] = useState("");
    

    

    const handleSubmitUpdate = async (e) => {
        e.preventDefault();
        
        const user = {
            email: email,
            username: username,
            password: password,            
            name: {
                firstname: name,
                lastname: lastname},
            phone: phone
        };

        if( id){
            const res = await updateUser(id,user);
        if (res) {
            setErrorMsg("");
            setSuccessMsg("User updated successfully");
        } else {
            setSuccessMsg("");
            setErrorMsg("User not updated");
        }        
        }

        
    }

    const handleSubmitDelete = async (e) => {
        e.preventDefault();
        
        if (id) {
          const res = await deleteUser(id);
            if (res) {
                setErrorMsg("");
                setSuccessMsg("User deleted successfully");
            } else {
                setSuccessMsg("");
                setErrorMsg("User not deleted");
            }        
        }
    }


    return (
        <Container>
            <Wrapper>
                <Title>Product</Title>
                <Form>
                    <Input placeholder="id" onChange={(e)=>setId(e.target.value)}/>
                    <Input placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                    <Input placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
                    <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>    
                    <Input placeholder="first name" onChange={(e)=>setName(e.target.value)}/>
                    <Input placeholder="last name" onChange={(e)=>setLastname(e.target.value)}/>
                    <Input placeholder="phone" onChange={(e)=>setPhone(e.target.value)}/>
                    
                </Form>
                
                <Button onClick={handleSubmitUpdate}>Update</Button>
                <br/>
                <Button onClick={handleSubmitDelete}>Delete</Button>
                {errorMsg && <span style={{color: "red", textAlign: "center"}}>{errorMsg}</span>}
                {successMsg && <span style={{color: "green", textAlign: "center"}}>{successMsg}</span>}
            </Wrapper>
        </Container>
    );
    }



    export default AdminUsers;