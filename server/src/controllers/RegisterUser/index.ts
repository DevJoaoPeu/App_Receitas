import { Request, Response } from "express";
import { prisma } from "../../Services/prisma";

import { hash } from "bcryptjs";

interface InforUser {
  name: string;
  email: string;
  password: string;
}

export const RegisterUser = async (req: Request, res: Response) => {
  const { name, email, password }: InforUser = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      error: true,
      message: "Porfavor, preecha todos os campos!",
    });
  }

  const alreadyExists = await prisma.user.findUnique({ where: { email } });

  if (alreadyExists) {
    return res.status(400).json({
      error: true,
      message: "Email já cadastrado",
    });
  }

  const passHash = await hash(password, 8);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: passHash,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  return res.status(200).json({
    error: false,
    message: "Usuario criado com sucesso",
    user,
  });
};
