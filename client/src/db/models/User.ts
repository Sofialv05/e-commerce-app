import { z } from "zod";
import DB from "../connection";
import { hashSync, compareSync } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { User } from "@/interfaces/User";

const UserSchema = z.object({
  name: z.string(),
  username: z.string().min(1, { message: "username is required" }),
  email: z.string().min(1, { message: "email is required" }).email({
    message: "Invalid email format",
  }),
  passowrd: z
    .string()
    .min(5, { message: "password must be at least 5 characters" }),
});

class UserModel {
  static async addNewUser(newUser: {
    name: string;
    username: string;
    email: string;
    password: string;
  }) {
    UserSchema.parse(newUser);
    const usersTable = DB.collection("Users");
    const userUsername = await usersTable.findOne({
      username: newUser.username,
    });

    if (!userUsername) {
      throw new Error("username is already in use");
    }

    const userEmail = await usersTable.findOne({
      email: newUser.email,
    });
    if (!userEmail) {
      throw new Error("email is already in use");
    }

    return usersTable.insertOne({
      name: newUser.name,
      username: newUser.username,
      email: newUser.email,
      password: hashSync(newUser.password),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  static async login(user: { email: string; password: string }) {
    const { email, password } = user;
    const usersTable = DB.collection<User>("Users");

    if (!email || !password) {
      throw new Error("email/password is required");
    }

    const findUser = await usersTable.findOne({
      email,
    });
    if (!findUser) {
      throw new Error("email has not been registered");
    }

    const isValidPassword = compareSync(password, findUser.password);

    if (!isValidPassword) {
      throw new Error("invalid password");
    }

    const accessToken = sign(
      {
        email,
        _id: findUser._id,
      },
      process.env.SECRET_KEY as string
    );

    return { accessToken };
  }
}

export default UserModel;
