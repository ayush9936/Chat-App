import Conversation from "../modal/conversationModal.js";
import Message from "../modal/messageModal.js";

//for sending msg
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    //check exist  user is already conversation or not
    let conversaton = await Conversation.findOne({
      participant: { $all: [senderId, receiverId] },
    });

    //if conversation is not then, create conversation
    if (!conversaton) {
      conversaton = await Conversation.create({
        participant: [senderId, receiverId],
      });
    }

    //after create conversation between two user , create newmessage
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversaton.message.push(newMessage._id);
    }
    // await conversaton.save();
    // await newMessage.save();

    //this will run in parallel
    await Promise.all([conversaton.save(), newMessage.save()]);
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal error" });
  }
};

//get the data from database api
export const getMessage = async (req, res) => {
  try {
    const { id: userTochatId } = req.params;
    const senderId = req.user._id;

    //check exist user conversation and populate it
    const conversation = await Conversation.findOne({
      participant: { $all: [senderId, userTochatId] },
    }).populate("message");
    //if not ,return below
    if (!conversation) {
      return res.status(401).json([]);
    }
    //if yes , return message
    res.status(200).json(conversation.message);
  } catch (error) {
    console.log("Error in getMessage controller: ", error.message);
    res.status(500).json({ error: "Internal error" });
  }
};
