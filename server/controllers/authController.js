const User = require('../models/User');

exports.registerUser = async (req, res) => {
    const { email, password, nickname } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).send('User already exists');
      }
      const newUser = new User({ email, password, nickname });
      await newUser.save();
      res.status(201).send('User registered');
    } catch (error) {
      res.status(500).send('Server Error');
    }
  };

exports.loginUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).send('User logged in');
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

exports.oauthSignIn = async (req, res) => {
    const { email, nickname } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        const randomPassword = await bcrypt.genSalt(12);
        user = new User({ email, password: randomPassword, nickname, isOAuthUser: true });
        await user.save();
      }
      res.status(200).send('OAuth login successful');
    } catch (error) {
      res.status(500).send('Server Error');
    }
  };
