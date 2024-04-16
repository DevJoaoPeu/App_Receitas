import { Response, Request } from "express";
import { prisma } from "../../ultil/prisma";

export const ListPostId = async (req: Request, res: Response) => {

  const { id } = req.params

  const infos = await prisma.receitas.findUnique({where: {id}});

  if (!infos) {
    return res.status(400).json({
      error: true,
      message: "Error ao buscar",
    });
  }

  return res.status(200).json({
    error: false,
    message: "Informações carregadas com sucesso!",
    infos,
  });
};
