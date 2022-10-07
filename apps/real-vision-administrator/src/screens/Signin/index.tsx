import Button from "@/components/shared/Button";
import Field from "@/components/shared/Field";
import Input from "@/components/shared/Input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signin.module.css";

const Signin = () => {
  const [admin, setAdmin] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({})

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdmin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async(e: any) => {
    e.preventDefault();
    try{
        if(admin.username == 'nestor'){
            
            navigate('/', {replace: true});
        }

    }catch(err){
      if(err instanceof Error){
          setError(err.message)
      }
    }
  }

  return (
    <div className={styles.signin_container}>
      <form onSubmit={onSubmit}>
        <img
          src="https://camo.githubusercontent.com/f55b1b8253ecd4ca8588211e9b849dbc5ca82c382c0486add7f54d5694230196/68747470733a2f2f7777772e7265616c766973696f6e656e74657270726973652e636f6d2f5f6e6578742f696d6167653f75726c3d253246696d672532466c6f676f3139322e706e6726773d31323826713d3735"
          alt=""
        />
        <p>Be the best version of yourself</p>
        <h3>Sign in to your account and change the world</h3>
        <Field label="Username">
          <Input name="username" onChange={handleChange}></Input>
        </Field>
        <Field label="Password">
          <Input
            name="password"
            type="password"
            onChange={handleChange}
          ></Input>
        </Field>
        <Field>
          <Button className="primary">Login</Button>
        </Field>
      </form>
    </div>
  );
};

export default Signin;
