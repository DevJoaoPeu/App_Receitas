import { prisma } from "../util/prisma";

interface ReceitaData {
  title: string;
  description: string;
  ingredient: string;
  movie_link: string;
  preparation_mode: string;
  userId: string;
}

export const createReceita = async (receitaData: ReceitaData) => {
  try {
    const receita = await prisma.receitas.create({
      data: receitaData,
    });

    return receita;
  } catch (error) {
    throw new Error("Erro ao criar receita");
  }
};