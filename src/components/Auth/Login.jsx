import React from "react";
import { useAuth } from "../../contexts/authContext";
import {Form , Input , Checkbox , Button } from "antd"
import "./Login.css";
import "antd/dist/antd.css";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    authWithGoogle
  } = useAuth();
  return (
    <>
      <section className="login">
        <div className="login-container">
        <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input
        value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
         />
         <p className="error-msg">{emailError}</p>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password 
        value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
        />
      </Form.Item>
      <p className="error-msg">{passwordError}</p>
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" onClick={handleLogin}
        style={{ marginLeft: "-40px" }}
        >
          Sign in
        </Button>
        <Button
        style={{ marginLeft: "10px" }}
         type="primary" onClick={handleSignUp}>
          Sign up
        </Button>
      </Form.Item>
    </Form>
          <button style={{ color:"white" , background:"#1890ff" ,outline:"none",border:"none"}} onClick={authWithGoogle}>Войти через Google</button>
        </div>
      </section>
    </>
  );
};

export default Login;
