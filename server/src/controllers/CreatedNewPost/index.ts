import { Response, Request } from "express";
import { prisma } from "../../util/prisma";
import { createReceita } from "../../services/receitas.service";

interface Props {
  title: string;
  description: string;
  ingredient: string;
  preparation_mode: string;
  movie_link: string;
  userId: string;
}

export const CreatedNewPost = async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      ingredient,
      movie_link,
      preparation_mode,
      userId,
    }: Props = req.body;

    const receitaData = {
      title,
      description,
      ingredient,
      movie_link,
      preparation_mode,
      userId,
    };

    const receita = await createReceita(receitaData);

    return res.status(200).json({
      error: false,
      message: "Receita cadastrada com sucesso!",
      receita,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: error.message || "Error ao cadastrar receita"
    })
  }
};
