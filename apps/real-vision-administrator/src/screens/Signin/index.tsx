import Loader from "@/components/Layout/Loader";
import Button from "@/components/shared/Button";
import Field from "@/components/shared/Field";
import Input from "@/components/shared/Input";
import { login } from "@/redux/states/admins/user";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Signin.module.css";

const Signin = () => {
  const [admin, setAdmin] = useState({
    username: "",
    password: "",
  });

  const {loading, user, success, error} = useSelector((state: any) => state.user)

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdmin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const onSubmit = async(e: any) => {
    e.preventDefault();
    try{
      dispatch(login({username: admin.username, password: admin.password}) as any);
    }catch(err){
      if(err instanceof Error){
        console.log(error)
      }
    }
  }

  console.log(error)

  useEffect(() => {
   if(success) {
     navigate('/kanban', {replace: true});
   }
  }, [user, error, success, navigate, dispatch])

  if(loading) return <Loader />

  return (
    <div className={styles.signin_container}>
      <form onSubmit={onSubmit}>
        <img
          src="https://camo.githubusercontent.com/f55b1b8253ecd4ca8588211e9b849dbc5ca82c382c0486add7f54d5694230196/68747470733a2f2f7777772e7265616c766973696f6e656e74657270726973652e636f6d2f5f6e6578742f696d6167653f75726c3d253246696d672532466c6f676f3139322e706e6726773d31323826713d3735"
          alt=""
        />
        <p>Be the best version of yourself</p>
        <h3>Sign in to your account and change the world</h3>
        <Field label="Username" error={error != "Invalid password"? error : ''}>
          <Input name="username" onChange={handleChange}></Input>
        </Field>
        <Field label="Password" error={error == "Invalid password"? error : ''}>
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
