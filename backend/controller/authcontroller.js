import User from "../modal/userModal.js";
import bcrypt from "bcryptjs";
import genearteTokenAndCookie from "../utils/gentoken.js";


//signup api
export const Signup = async (req, res) => {
  try {
    //destructure the data from req body
    const { fullName, username, password, gender } = req.body;

    //find the user is already present or not
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User is already exits" });
    }

    //hash or transform the password string into another value
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    //add or register new user and save it
    const newUser = new User({
      fullName,
      username,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      //genrate here token
      genearteTokenAndCookie(newUser._id, res);

      //save newuser and in response take this
      await newUser.save();
      res.status(201).json({
        _id: newUser.id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    }
  } catch (error) {
    console.log("Error in signup ", error.message);
    res.status(501).json({ error: "Internal error" });
  }
};

//login api
export const login = async (req, res) => {
  try {
    //destructure tha data from req body 
    const { username, password } = req.body;

    // check the user is exists or not 
    const user = await User.findOne({ username });

    //decrypt the password using bcrypt method and check is match or not
    const passwordMatch = await bcrypt.compare(password, user?.password || "");
    if (!user || !passwordMatch) {
      return res.status(400).json({ error: "Invalid username or password" });
    };

    //verify the token and get in reuslt its data as response
    genearteTokenAndCookie(user._id,res)
    res.status(200).json({
      _id:user._id,
      fullName:user.fullName,
      profilePic:user.profilePic

    });

  } catch (error) {
    console.log("Error in Login ", error.message);
    res.status(501).json({ error: "Internal error" });
  }
};


//logout api
export const logout = (req, res) => {
  try {
    res.cookie("jwt",'',{maxAge:0})
    res.status(200).json({message:"Logout successfully"})
  } catch (error) {
    console.log("Error in Logout ", error.message);
    res.status(501).json({ error: "Internal error" });
  }
  };

