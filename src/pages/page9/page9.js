import React, { useState } from "react";
import Form from "react-jsonschema-form";
import {
  schema,
  uiSchema,
  formData,
  schema1,
  uiSchema1,
  formData1,
  schema2,
  uiSchema2,
  formData2
} from "./page9Data";

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

const Page9 = () => {
  const onError = (errors) => console.log(errors);

  const onSubmit = ({ formData }, e) => {
    console.log("Data submitted: ", formData);
  };

  function ObjectFieldTemplate({ TitleField, properties, title, description }) {
    return (
      <div>
        {/* borrower details */}
        <div>
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
        </div>

        {/* Id Details */}
      </div>
    );
  }

  return (
    <div className="ui raised very padded text container segment">
      {/* borrower Information */}
      <div>
        <div style={{ paddingBottom: "20px" }}>
          <h3 style={{ color: "black" }}> Tell us about You</h3>
          <span>Please fill the mandatory field</span>
        </div>
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
        >
          <></>
        </Form>
      </div>
      {/* Id Proof Details */}
      <div>
        <Form
          schema={schema1}
          uiSchema={uiSchema1}
          ObjectFieldTemplate={ObjectFieldTemplate}
          noHtml5Validate={true}
          showErrorList={true}
          ErrorList={ErrorListTemplate}
          onError={onError}
          onSubmit={onSubmit}
          formData={formData1}
        >
          <></>
        </Form>
      </div>
      {/* Communication Details */}
      <div>
        <Form
          schema={schema2}
          uiSchema={uiSchema2}
          ObjectFieldTemplate={ObjectFieldTemplate}
          noHtml5Validate={true}
          showErrorList={true}
          ErrorList={ErrorListTemplate}
          onError={onError}
          onSubmit={onSubmit}
          formData={formData2}
        />
      </div>
    </div>
  );
};
export default Page9;
