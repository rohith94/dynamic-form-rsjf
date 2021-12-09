export const schema = {
  title: "Personal Information",
  description: "",
  type: "object",
  required: ["firstName", "lastName"],
  properties: {
    firstName: {
      type: "string",
      title: "First name"
    },
    middleName: {
      type: "string",
      title: "Middle name"
    },
    lastName: {
      type: "string",
      title: "Last name"
    },
    telephone: {
      type: "number",
      title: "Mobile Number",
      minLength: 10
    },
    email: {
      type: "string",
      title: "Email Id",
      format: "email"
    },
    businssName: {
      type: "string",
      title: "Business name"
    },

    qualificcation: {
      title: "Home Branch State",
      type: "string",
      default: "graduate",
      oneOf: [
        {
          type: "string",
          enum: ["graduate"],
          title: "Karnataka"
        },
        {
          type: "string",
          enum: ["phd"],
          title: "Kerala"
        }
      ]
    },

    nationality: {
      title: "Home Branch District",
      type: "string",
      default: "india",
      oneOf: [
        {
          type: "string",
          enum: ["india"],
          title: "Banglore"
        },
        {
          type: "string",
          enum: ["nepal"],
          title: "Mysore"
        }
      ]
    },
    religion: {
      title: "Home Branch City",
      type: "string",
      default: "religion2",
      oneOf: [
        {
          type: "string",
          enum: ["religion1"],
          title: "Indra Nagar"
        },
        {
          type: "string",
          enum: ["religion2"],
          title: "Malleshwaram"
        },
        {
          type: "string",
          enum: ["religion3"],
          title: "Hebal"
        }
      ]
    },
    socialCategory: {
      title: "Home Branch",
      type: "string",
      default: "cat1",
      oneOf: [
        {
          type: "string",
          enum: ["cat1"],
          title: "HMT Layout"
        },
        {
          type: "string",
          enum: ["cat2"],
          title: "Dollars Colony"
        }
      ]
    },
    textarea: {
      type: "string",
      title: "Branch Address"
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
  }
};
export const formData = {
  firstName: "NandaKumar",
  lastName: "M",
  radio: true,
  select: false,
  telephone: 9988776655
};
