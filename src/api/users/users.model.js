const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, trim: true},
    password: { type: String, required: true, trim: true},
    username: { type: String, required: true, trim: true},
    rol: { type: String, default: "user"}
    // photo: { type: String, required: false, trim: true},
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
})

const User = mongoose.model('users', userSchema);
module.exports = User;
