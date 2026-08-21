import USER from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await USER.findOne({ where: { email } });

    if (existingUser) {

      return res.status(400).json({ message: 'User already exists' });
    }
    


    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);



    
    const newUser = await USER.create({

      username:name,

      email,

      password: hashedPassword,

    });

    res.status(201).json({ message: 'User registered successfully', userId: newUser.id });

  } catch (error) {

    console.error('Registration Error:', error);

    res.status(500).json({ message: 'Server error during registration' });
  }
};








export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await USER.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    
    const token = jwt.sign(
      { id: user.id, email: user.email }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1d' } 
    );

    res.status(200).json({ 
      message: 'Login successful', 
      token, 
      user: { id: user.id, name: user.username, email: user.email , role : user.role} 
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
};