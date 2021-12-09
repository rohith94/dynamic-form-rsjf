import React, { useState } from "react";
import Form from "react-jsonschema-form";
import { schema, uiSchema, formData } from "./page4Data";

function ErrorListTemplate(props) {
  const { errors } = props;
  console.log(errors);
  return (
    <div>
      <h2>Custom error list</h2>
      <ul>
        {errors.map((error) => (
          <li key={error.stack}>{error.stack}</li>
        ))}
      </ul>
    </div>
  );
}

const Page4 = () => {
  const onError = (errors) => console.log(errors);

  const onSubmit = ({ formData }, e) => {
    console.log("Data submitted: ", formData);
  };

  function ObjectFieldTemplate({ TitleField, properties, title, description }) {
    return (
      <div>
        <div>
          <h3 style={{ color: "black" }}>Tell us about you</h3>
        </div>
        <TitleField title={title} />
        <div className="row">
          {properties.map((prop) => (
            <div
              className="col-lg-4 col-md-4 col-sm-4 col-xs-12"
              key={prop.content.key}
            >
              {/* {console.log(prop)} */}
              {prop.content}
            </div>
          ))}
        </div>
        {description}
      </div>
    );
  }

  return (
    <div className="ui raised very padded text container segment">
      <Form
        schema={schema}
        uiSchema={uiSchema}
        ObjectFieldTemplate={ObjectFieldTemplate}
        noHtml5Validate={true}
        showErrorList={true}
        ErrorList={ErrorListTemplate}
        onError={onError}
        onSubmit={onSubmit}
        formData={formData}
        liveValidate
      />
    </div>
  );
};
export default Page4;
