import { Request, Response } from "express";
import { prisma } from "../../Services/prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface PropsUser {
  email: string;
  password: string;
}

export const LoginUser = async (req: Request, res: Response) => {
  const { email, password }: PropsUser = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: true,
      message: "Preencha todos os campos corretamente!",
    });
  }

  const user = await prisma.user.findUnique({ where: { email } });

  const passMatch = await compare(password, user?.password as string);

  if (!user) {
    return res.status(400).json({
      error: true,
      message: "Usuario/senha incorretos",
    });
  }

  if (!passMatch) {
    return res.status(400).json({
      error: true,
      message: "Usuario/senha incorretos",
    });
  }

  const token = sign(
    {
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { subject: user.id, expiresIn: "30d" }
  );

  
};
