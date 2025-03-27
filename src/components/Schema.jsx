import React from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8"

const schema = {
  title: "Slider Example",
  type: "object",
  properties: {
    age: {
      type: "integer",
      title: "Select Age",
      minimum: 0,
      maximum: 100,
    },
  },
};

const uiSchema = {
  age: {
    "ui:widget": "range",
  },
};

const Schema = () => {
  const handleSubmit = ({ formData }) => {
    console.log("Submitted Data:", formData);
  };

  return <Form schema={schema} uiSchema={uiSchema} validator={validator} onSubmit={handleSubmit} />;
};

export default Schema;
