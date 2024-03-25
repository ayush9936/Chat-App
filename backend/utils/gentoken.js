import jwt from "jsonwebtoken";
//genrate token for secure data
const genearteTokenAndCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_Secret, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
  });
};

export default genearteTokenAndCookie;
