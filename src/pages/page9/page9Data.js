export const schema = {
  title: "Borrower Information",
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
    date: {
      type: "string",
      format: "date"
    },
    gender: {
      type: "number",
      title: "Gender",
      enum: ["Male", "Female", "TransGender"]
    },
    select: {
      type: "boolean",
      title: "Martial Status"
    },
    fatherName: {
      type: "string",
      title: "Father/Husband name"
    },
    qualificcation: {
      title: "Educational Qualification",
      type: "string",
      default: "graduate",
      oneOf: [
        {
          type: "string",
          enum: ["graduate"],
          title: "Graduate"
        },
        {
          type: "string",
          enum: ["phd"],
          title: "Phd"
        }
      ]
    },
    dependent: {
      type: "number",
      title: "No of Dependent"
    },
    telephone: {
      type: "string",
      title: "Mobile Number",
      minLength: 10
    },
    email: {
      type: "string",
      title: "Email Id",
      format: "email"
    },
    nationality: {
      title: "Nationality",
      type: "string",
      default: "india",
      oneOf: [
        {
          type: "string",
          enum: ["india"],
          title: "India"
        },
        {
          type: "string",
          enum: ["nepal"],
          title: "Nepal"
        }
      ]
    },
    religion: {
      title: "Religion",
      type: "string",
      default: "religion2",
      oneOf: [
        {
          type: "string",
          enum: ["religion1"],
          title: "Religion 1"
        },
        {
          type: "string",
          enum: ["religion2"],
          title: "Religion 2"
        }
      ]
    },
    socialCategory: {
      title: "Social Category",
      type: "string",
      default: "cat1",
      oneOf: [
        {
          type: "string",
          enum: ["cat1"],
          title: "Retail Investor"
        },
        {
          type: "string",
          enum: ["cat2"],
          title: "HNI"
        }
      ]
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
  }
};
export const formData = {
  firstName: "NandaKumar",
  radio: true,
  select: false,
  telephone: 9988776655,
  email: "vignesh@gmail.com"
};

export const schema1 = {
  title: "ID Proof Details",
  type: "object",
  required: ["firstName", "lastName"],
  properties: {
    voterIdCheck: {
      type: "boolean",
      title: "Voter ID",
      default: true
    },
    voterIdDetails: {
      type: "string",
      title: "Voter ID",
      default: "QWASQAAA"
    },
    voterIdDetails1: {
      type: "string",
      title: "Voter ID"
    },
    passportIdCheck: {
      type: "boolean",
      title: "Passport",
      default: true
    },
    passportIdDetails: {
      type: "string",
      title: "Voter ID",
      default: "CFFGFCDDD"
    },
    passportDate: {
      type: "string",
      format: "date",
      title: "Expiry Date"
    },
    dLIdCheck: {
      type: "boolean",
      title: "Voter ID",
      default: false
    },
    dLIdDetails: {
      type: "string",
      title: "Voter ID"
    },
    dLtDate: {
      type: "string",
      format: "date",
      title: "Expiry Date"
    }
  }
};

export const uiSchema1 = {
  voterIdDetails1: { "ui:widget": "hidden" },
  dLIdDetails: {
    "ui:readonly": "string",
    "ui:placeholder": "Enter Driving Licence Number"
  },
  dLtDate: {
    "ui:readonly": "date"
  }
};
export const formData1 = {};

export const schema2 = {
  title: "Enter Communication Details",
  type: "object",
  required: ["firstName", "lastName"],
  properties: {
    firstName: {
      type: "string",
      title: "Address Line 1",
      default: "N0 32, 1st block"
    },
    lastName: {
      type: "string",
      title: "Address Line 2",
      default: "2nd Block, PMT Layout"
    },
    telephone: {
      type: "string",
      title: "Address Line 3",
      minLength: 10
    },

    landMark: {
      type: "string",
      title: "Landmark",
      default: "SBI Bank"
    },
    pincode: {
      type: "number",
      title: "Pincode",
      default: "560073"
    },
    city: {
      title: "State",
      type: "string",
      default: "cat1",
      oneOf: [
        {
          type: "string",
          enum: ["cat1"],
          title: "Banglore"
        },
        {
          type: "string",
          enum: ["cat2"],
          title: "Mysore"
        }
      ]
    },

    state: {
      title: "State",
      type: "string",
      default: "cat1",
      oneOf: [
        {
          type: "string",
          enum: ["cat1"],
          title: "Karnataka"
        },
        {
          type: "string",
          enum: ["cat2"],
          title: "Kerala"
        }
      ]
    },
    addressType: {
      title: "Address Type",
      type: "string",
      default: "cat1",
      oneOf: [
        {
          type: "string",
          enum: ["cat1"],
          title: "Rented"
        },
        {
          type: "string",
          enum: ["cat2"],
          title: "Own Property"
        }
      ]
    },

    reside: {
      type: "string",
      title: "Residing Since (in years)",
      minLength: 10
    }
  }
};
export const uiSchema2 = {};
export const formData2 = {};
