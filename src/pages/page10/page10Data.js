export const schema = {
  title: "Business Information",
  description: "",
  type: "object",
  required: ["firstName", "lastName"],
  properties: {
    firstName: {
      type: "string",
      title: "Constitution",
      default: "Individual"
    },
    middleName: {
      type: "string",
      title: "Business Name",
      default: "AVT Books"
    },
    qualificcation: {
      title: "Business Status",
      type: "string",
      default: "graduate",
      oneOf: [
        {
          type: "string",
          enum: ["graduate"],
          title: "Start Up"
        },
        {
          type: "string",
          enum: ["phd"],
          title: "Unicorn"
        }
      ]
    },
    telephone: {
      type: "string",
      title: "PAN Number",
      minLength: 10
    },
    email: {
      type: "string",
      title: "GST Number"
    }
  }
};
export const uiSchema = {
  radio: {
    "ui:widget": "radio"
  },
  select: {
    "ui:widget": "select"
  },
  gender: {
    "ui:widget": "radio",
    "ui:options": {
      inline: true
    }
  },
  textarea: {
    "ui:widget": "textarea",
    "ui:options": {
      rows: 5
    }
  },
  firstName: {
    "ui:readonly": "string"
  },
  middleName: {
    "ui:readonly": "string"
  }
};
export const formData = {
  firstName: "NandaKumar",
  lastName: "M",
  radio: true,
  select: false,
  telephone: "ABCDE1234F",
  email: "27ABCDE1234F1ZW"
};

export const schema1 = {
  title: "Employment Information",
  description: "",
  type: "object",
  required: ["firstName", "lastName"],
  properties: {
    qualificcation: {
      title: "Experience in Line Of Business",
      type: "string",
      default: "graduate",
      oneOf: [
        {
          type: "string",
          enum: ["graduate"],
          title: ">12 Months"
        },
        {
          type: "string",
          enum: ["phd"],
          title: "<12 Months"
        }
      ]
    },
    gender: {
      type: "number",
      title: "Any Vocational Traning",
      enum: ["Yes", "No"],
      default: "Yes"
    },
    qualificcation1: {
      title: "Type of Vocational Training",
      type: "string",
      default: "graduate",
      oneOf: [
        {
          type: "string",
          enum: ["graduate"],
          title: "Level 1"
        },
        {
          type: "string",
          enum: ["phd"],
          title: "Level 2"
        }
      ]
    }
  }
};
export const uiSchema1 = {
  gender: {
    "ui:widget": "radio",
    "ui:options": {
      inline: true
    }
  }
};
export const formData1 = {};

export const schema2 = {
  title: "Loan Information",
  description: "",
  type: "object",
  required: ["firstName", "lastName"],
  properties: {
    firstName: {
      type: "string",
      title: "Constitution",
      default: "Sishu Mudra"
    },
    middleName: {
      type: "string",
      title: "Type Of FAcility",
      default: "Term Loan"
    },
    qualificcation: {
      title: "Purpose Of Loan",
      type: "string",
      default: "phd",
      oneOf: [
        {
          type: "string",
          enum: ["graduate"],
          title: "To Purchase Material"
        },
        {
          type: "string",
          enum: ["phd"],
          title: "Employee Bonus"
        }
      ]
    },

    amount: {
      type: "string",
      title: "Requested Loan Amount",
      default: "10000"
    },
    tenure: {
      type: "string",
      title: "Requested Tenure",
      default: "10 Months"
    },
    emiDate: {
      type: "string",
      title: "Requested EMI First Date",
      format: "date"
    },

    contrib: {
      type: "string",
      title: "Margin/ Borrower Contribution",
      default: "5000"
    },
    percent: {
      type: "string",
      title: "Margin/ Borrower Contribution Percentage",
      default: "12%"
    }
  }
};
export const uiSchema2 = {
  firstName: {
    "ui:readonly": "string"
  },
  middleName: {
    "ui:readonly": "string"
  },
  contrib: {
    "ui:readonly": "string"
  },
  percent: {
    "ui:readonly": "string"
  }
};
export const formData2 = {};
