import { Request, Response } from "express";
import { prisma } from "../Services/prisma";

interface UserProps {
  name: string;
  email: string;
  password: string;
}

const RegisterUser = async (req: Request, res: Response) => {
  const { name, email, password }: UserProps = req.body;

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return res.json(user);
};

export { RegisterUser };
