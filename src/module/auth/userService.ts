import userModel from "./userModel";
import bcrypt from "bcrypt";

const saltRounds = 10;

export const createUserService = async (
  userName: string,
  email: string,
  password: string
) => {
  // 1. Check only userName or email for existence
  const isExistUser = await userModel.findOne({
    $or: [{ userName }, { email }],
  });

  if (isExistUser) {
    // must call Error as a function
    throw new Error("User already exists with that username or email.");
  }

  // 2. Hash the password
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // 3. Create & save the new user
  const newUser = await userModel.create({
    userName,
    email,
    password: hashedPassword,
  });

  // 4. Strip password before returning
  const userObj = newUser.toObject();
  delete userObj.password;
  return userObj;
};