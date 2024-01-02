import { Request, Response } from "express";
import { prisma } from "../../Services/prisma";

interface PropsUser {
  email: string;
  password: string;
}

const LoginUser = async (req: Request, res: Response) => {
  const { email, password }: PropsUser = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: true,
      message: "Preencha todos os campos!",
    });
  }
};
