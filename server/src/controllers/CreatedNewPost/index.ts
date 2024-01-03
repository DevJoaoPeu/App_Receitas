import { Response, Request } from "express";
import { prisma } from "../../Services/prisma";

interface Props {
  title: string;
  description: string;
  ingredient: string;
  preparation_mode: string;
  movie_link: string;
  userId: string;
}

 export const CreatedNewPost = async (req: Request, res: Response) => {
  const {
    title,
    description,
    ingredient,
    movie_link,
    preparation_mode,
    userId
  }: Props = req.body;

  const receitas = await prisma.receitas.create({
    data: {
        title,
        description,
        ingredient,
        movie_link,
        preparation_mode,
        userId
    },
  });

  return res.json({
    error: false,
    message: "Receita cadastrada com sucesso!",
    receitas
  })
};
