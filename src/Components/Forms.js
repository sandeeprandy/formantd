import React , {useState} from "react"
import { Form, Input, Button } from 'antd';
import { Card } from '@mui/material';

const FormCard = () => {
  const [form] = Form.useForm();
  const [formData,setFormData] =useState(null)

  const onFinish = (values) => {
    
    setFormData(values);
    console.log(values)
  };

  return (
    <div style={{ padding: '20px' }}>
      <Form form={form} onFinish={onFinish} layout="inline">
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please enter your name!' }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please enter your email!' }]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {formData && (
        <Card style={{ marginTop: 20, padding: 20 }}>
          <h2>Form Data</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
        </Card>
      )}
    </div>
  );
};

export default FormCard;
