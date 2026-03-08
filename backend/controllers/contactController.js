const Message = require("../models/Message");

exports.sendMessage = async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json({ success: true, message });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};