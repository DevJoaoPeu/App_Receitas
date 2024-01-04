import { Response, Request } from "express";
import { prisma } from "../../Services/prisma";

export const ListPost = async (req: Request, res: Response) => {
   const infos = await prisma.receitas.findMany();

   if(!infos){
    return res.status(400).json({
        error: true,
        message: "Error ao buscar"
    })
   }

   return res.status(200).json({
    error: false,
    message: "Informações carregadas com sucesso!",
    infos
   })
};
