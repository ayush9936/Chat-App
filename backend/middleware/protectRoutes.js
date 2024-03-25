import jwt from "jsonwebtoken";
import User from "../modal/userModal.js";


//this is protectroute function for authorisation during access data 
const protectRoutes = async (req, res, next) => {
  try {
    // here get the token from cookie to verify the user authorisation
    const token = req.cookies.jwt;
    //if not get token from cookie , its send the response below
    if (!token) {
      return res.status(401).json({ error: "unautorized - no token provide" });
    }

    //after get token above, verify or decode the token , is it valid or not
    const decoded = jwt.verify(token, process.env.JWT_Secret);
    //if get token , but it is not valid then
    if (!decoded) {
      return res.status(401).json({ error: "unautorized -Invalid token" });
    }

    // if token is valid then, found the user from database by its id
    const user = await User.findById(decoded.userId).select("-password");
    //if not found user, then
    if (!user) {
      res.status(404).json({ error: "User is not found" });
    }
    //if everything is going well, then got user , which hold in req body
    req.user = user;

    next();
  } catch (error) {
    console.log("error in protectedroutes", error.message);
    res.status(500).json({ error: "internal error" });
  }
};

export default protectRoutes;
