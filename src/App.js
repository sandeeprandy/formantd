import React, { useState } from "react";
import {
  DatePicker,
  Form,
  Input,
  Flex,
  InputNumber,
  Radio,
  Rate,
  message,
} from "antd";
import { Grid, Card } from "@mui/material";

function app() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [form] = Form.useForm();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formValues, setFormValues] = useState([]);
  const onFinish = (values) => {
    setFormValues([...formValues, values]);
    console.log(...formValues);
    form.resetFields();
  };
  const onFinishFailds = () => {
    message.error("check your inputs properly");
  };

  return (
    <Flex align="flex-center" gap={5} style={{ padding: "20px" }}>
      <Form
        form={form}
        onFinish={onFinish}
        style={{ width: "250px" }}
        onFinishFailed={onFinishFailds}
        horizontal
      >
        <Form.Item
          names="names"
          label="name"
          rules={[
            { require: true, message: "enter valid name" },
            { min: 3, message: "min ma 3 character must" },
          ]}
        >
          <Input placeholder="enter your name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="email"
          rules={[
            { require: true, message: "must need email" },
            { type: "email", message: "enter valid email" },
          ]}
        >
          <input></input>
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ require: true, message: "select your gender" }]}
        >
          <Radio.Group>
            <Radio value="male">male</Radio>
            <Radio value="female">female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="dob"
          label="Date of birth"
          rules={[{ require: true, message: "choose your dob" }]}
        >
          {" "}
        </Form.Item>
        <DatePicker style={{ width: "100%" }} />
        <Form.Item
          name="rate"
          label="Rate"
          rules={[{ require: true, message: "give us your rate" }]}
        >
          {" "}
          <Rate />{" "}
        </Form.Item>

        <Form.Item name="age" label="age">
          <InputNumber />
        </Form.Item>
        <Form.Item type="primary" htmlType="submit">
          <button>submit</button>
        </Form.Item>
      </Form>
      <Grid container spacing={2} style={{ marginLeft: 20 }}>
        {formValues.map((value, index) => (
          <Grid
            id={index}
            item
            xs={12}
            sm={6}
            md={4}
            style={{ padding: "20px" }}
          >
            {" "}
            <Card>
              <h1>user details</h1>
              <p> name : {value.names} </p>
              <p> email : {value.email} </p>
              <p> dob : {value.dob} </p>
              <p> age : {value.age} </p>
              <p> rate : {value.rate} </p>
            </Card>{" "}
          </Grid>
        ))}
      </Grid>
    </Flex>
  );
}
export default app;
