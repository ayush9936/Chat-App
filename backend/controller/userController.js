import User from "../modal/userModal.js";

export const userSidebar = async (req, res) => {
  try {
    const LoggedInUser = req.user._id;
    const filter = await User.find({ id: { $ne: LoggedInUser } }).select(
      "-password"
    );

    res.status(200).json(filter);
  } catch (error) {
    console.log("error in userSidebar", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
