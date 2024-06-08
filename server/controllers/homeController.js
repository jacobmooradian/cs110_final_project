const Chatroom = require('../models/Chatroom');

exports.getChatrooms = async (req, res) => {
  try {
    const chatrooms = await Chatroom.find({});
    res.json(chatrooms);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
