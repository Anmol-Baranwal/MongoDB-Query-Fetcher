import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  income: Number,
  city: String,
  car: String,
  quote: String,
  phone_price: Number,
});

let User;

try {
  User = model("User");
} catch {
  User = model("User", userSchema);
}
// const User = models.User || model("User", userSchema);

export default User;
