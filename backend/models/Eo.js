import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const eoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

// 🔹 **Pre-save Hook to Hash Password**
eoSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Skip if not modified
  const salt = await bcrypt.genSalt(10); // Generate salt
  this.password = await bcrypt.hash(this.password, salt); // Hash password
  next();
});

// 🔹 **Method to Compare Passwords**
eoSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("Eo", eoSchema);
export default User;
