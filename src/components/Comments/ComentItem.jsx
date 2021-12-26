import React, { useContext, useState } from "react";
import { Button, Form, Input } from "antd";
import { commentContext } from "../../contexts/commentContext";
import { useAuth } from "../../contexts/authContext";
const { TextArea } = Input;

const AddComment = ({id}) => {
  const { createComment} = useContext(commentContext)
  const {user: {email}} = useAuth();

  

  const onFinish = (values) => {
    console.log("Success:", values);
    createComment({...values, productId: id,email }, id)
  };
  return (
    <>
      <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
      <Form.Item
      
            name="comment"
            type="textarea"
            rules={[
              {
                required: true,
                message: "Please input comment!",
              },
            ]}
      >
      <TextArea rows={4} cols={6} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit"  type="danger">
        Добавить комментарий
      </Button>
    </Form.Item>
    </Form>

    
        {/* <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="comment"
            name="comment"
            type="textarea"
            rules={[
              {
                required: true,
                message: "Please input comment!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          

          <Form.Item
            wrapperCol={{
              offset: 7,
              span: 13,
            }}
          >
            <Button type="primary" htmlType="submit">
              Оставить комментарий
            </Button>
          </Form.Item>
        </Form>
       */}
    </>
  );
};

export default AddComment;
