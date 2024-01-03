import { Response, Request } from "express";

interface Props {
  title: string;
  description: string;
  ingredient: string;
  preparartion_mode: string;
  movie_link: string;
}

const CreatedNewPost = (req: Request, res: Response) => {
  const {
    title,
    description,
    ingredient,
    movie_link,
    preparartion_mode,
  }: Props = req.body;
};
