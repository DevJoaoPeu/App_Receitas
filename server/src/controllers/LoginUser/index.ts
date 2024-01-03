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

  const user = await prisma.user.findUnique({ where: { email } });

  if (!email || !password) {
    return res.status(400).json({
      error: true,
      message: "Preencha todos os campos corretamente!",
    });
  }

  if (!user) {
    return res.status(400).json({
      error: true,
      message: "Email/senha incorretos",
    });
  }

  const passMatch = await compare(password, user?.password as string);

  if (!passMatch) {
    return res.status(400).json({
      error: true,
      message: "Email/senha incorretos",
    });
  }

  const token = sign(
    {
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET as string,
    { subject: user.id, expiresIn: "30d" }
  );

  return res.status(200).json({
    error: false,
    message: "Usuario logado com sucesso!",
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token,
    },
  });
};
