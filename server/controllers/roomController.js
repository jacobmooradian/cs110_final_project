const Chatroom = require('../models/Chatroom');
const Message = require('../models/Message');

const { generateRoomIdentifier } = require('../util/roomIdGenerator');

exports.createRoom = async (req, res) => {
    const { roomName } = req.body;
    const identifier = generateRoomIdentifier();

    try {
        const existingRoom = await Chatroom.findOne({ name: roomName });
        if (existingRoom) {
            res.status(200).json({ exists: true, identifier: existingRoom.identifier });
        } else {
            const newRoom = new Chatroom({ name: roomName, identifier });
            await newRoom.save();
            res.status(201).json({ exists: false, identifier: newRoom.identifier });
        }
    } catch (err) {
        console.error('Error creating room:', err);
        res.status(500).send('Internal Server Error');
    }
};

exports.getMessages = async (req, res) => {
  const { roomIdentifier } = req.params;
  try {
    const room = await Chatroom.findOne({ identifier: roomIdentifier });
    if (!room) return res.status(404).send('Room not found');
    const messages = await Message.find({ roomId: room._id }).sort({ createdAt: 1 });
    res.json(messages);
  } catch (err) {
    console.error('Error fetching messages:', err);
    res.status(500).send('Internal Server Error');
  }
};

exports.postMessage = async (req, res) => {
  const { roomIdentifier } = req.params;
  const { nickname, message } = req.body;
  try {
    const room = await Chatroom.findOne({ identifier: roomIdentifier });
    const newMessage = new Message({
      roomId: room._id,
      nickname,
      body: message
    });
    await newMessage.save();
    res.status(201).send('Message posted');
  } catch (err) {
    console.error('Error posting message:', err);
    res.status(500).send('Internal Server Error');
  }
};
