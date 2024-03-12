import mongoose from "../database";

const orderSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  cnpj: {
    type: String,
    required: true,
  },

  moment: {
    type: Date,
    required: true,
    default: Date.now,
  },

  address: {
    street: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    complement: {
      type: String,
    }
  },

  login: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

});

const UserSchema = mongoose.model("user", orderSchema);

export default UserSchema;
