import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User";
import dotenv from "dotenv";

dotenv.config();

export default class AuthorizationController {
  async login(req, res) {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ username });

    // Check if the password is correct
    if (!user || !bcrypt.compareSync(password, user.password)) {
      res.status(401).send("User already exists");
      return;
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    // Return the token
    res.status(200).send({ token });
  }

  async register(req, res) {
    const { firstName, lastName, username, email, password } = req.body;

    // Check if the username is unique
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(400).send("Username already exists");
      return;
    }

    // Check if the email is unique
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      res.status(400).send("User's email already exists");
      return;
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create a new user
    const user = new User({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
    });

    // Save the user
    await user.save();

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    // Return the token
    res.status(201).send({ token });
  }

  async checkAuth(req, res) {
    // Get the token from the request header
    const token = req.headers.authorization.split(" ")[1];

    // Verify the token
    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      res.status(401).send("Unauthorized access");
      return;
    }

    // Return the user ID
    const user = await User.findById(payload.id);
    res.status(200).send({ userId: user._id });
  }
}
