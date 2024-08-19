import User from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).send({
      success: true,
      message: "User Get Successfully",
      users,
    });
  } catch (error) {
    res.status(404).send({
      success: true,
      error,
    });
  }
};

export const registerController = async (req, res) => {
  const { name, email, password, phone, address } = req.body;
  try {
    // Check if the username is already taken
    const existingUser = await User.findOne({ name });

    if (existingUser) {
      return res.status(400).json({ message: "Username is already taken" });
    }

    // Create a new user
    const newUser = new User(req.body);
    await newUser.save();

    // Generate a JWT
    const token = JWT.sign(
      { user: { id: newUser._id, username: newUser.name } },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d", // Adjust the expiration time as needed
      }
    );

    res.status(200).send({
      success: true,
      message: "User Registration Successfull",
      newUser,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//POST LOGIN
export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare the entered password with the hashed password in the database
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a JWT
    const token = JWT.sign(
      { user: { id: user._id, useremail: user.email } },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d", // Adjust the expiration time as needed
      }
    );

    res.status(200).send({
      success: true,
      message: "User Login Successfull",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    if (!users) {
      res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }
    res.status(200).send({
      success: true,
      message: "User Found Successfully",
      users,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }
    res.status(200).send({
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};

export const updateUser = async (req, res) => {
  const { name, email, newPassword, phone, address, role } = req.body;
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user information
    user.name = name;
    user.email = email;
    user.phone = phone;
    user.address = address;
    user.role = role;
    // Update the password with the new one
    if (newPassword) {
      user.password = newPassword;
    }

    await user.save();

    res.status(200).send({
      success:true,
      message: 'User updated successfully',
      user 
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};