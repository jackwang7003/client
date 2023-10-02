
import styled from "styled-components";
import {useState} from "react";
import { addProduct, deleteProduct, updateProduct } from "./fetchApi";


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



const AdminProducts = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [id, setId] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    
    const [successMsg, setSuccessMsg] = useState("");
    

    const handleSubmitAdd = async (e) => {
        e.preventDefault();
        
        const product = {
            title: title,
            price: price,
            description: description,            
            category: category,
            image: image
        };

        if (title && price && description && category && image) 
         {const res = await addProduct(product);
          if (res) {
            setErrorMsg("");
            setSuccessMsg("Product added successfully");
           } else {
            setSuccessMsg("");
            setErrorMsg("Product not added");
            }   
         }; 
       
    }

    const handleSubmitUpdate = async (e) => {
        e.preventDefault();
        
        const product = {
            title: title,
            price: price,
            description: description,            
            category: category,
            image: image
        };

        if( id && title && price && description && category && image){
            const res = await updateProduct(id,product);
        if (res) {
            setErrorMsg("");
            setSuccessMsg("Product updated successfully");
        } else {
            setSuccessMsg("");
            setErrorMsg("Product not updated");
        }        
        }

        
    }

    const handleSubmitDelete = async (e) => {
        e.preventDefault();
        
        if (id) {
          const res = await deleteProduct(id);
            if (res) {
                setErrorMsg("");
                setSuccessMsg("Product deleted successfully");
            } else {
                setSuccessMsg("");
                setErrorMsg("Product not deleted");
            }        
        }
    }


    return (
        <Container>
            <Wrapper>
                <Title>Product</Title>
                <Form>
                    <Input placeholder="id" onChange={(e)=>setId(e.target.value)}/>
                    <Input placeholder="title" onChange={(e)=>setTitle(e.target.value)}/>
                    <Input placeholder="price" onChange={(e)=>setPrice(e.target.value)}/>
                    <Input placeholder="description" onChange={(e) => setDescription(e.target.value)}/>    
                    <Input placeholder="image Url" onChange={(e)=>setImage(e.target.value)}/>
                    <Input placeholder="category" onChange={(e)=>setCategory(e.target.value)}/>
                    
                </Form>
                <Button onClick={handleSubmitAdd}>Add</Button>
                <br/>
                <Button onClick={handleSubmitUpdate}>Update</Button>
                <br/>
                <Button onClick={handleSubmitDelete}>Delete</Button>
                {errorMsg && <span style={{color: "red", textAlign: "center"}}>{errorMsg}</span>}
                {successMsg && <span style={{color: "green", textAlign: "center"}}>{successMsg}</span>}
            </Wrapper>
        </Container>
    );
    }

export default AdminProducts;