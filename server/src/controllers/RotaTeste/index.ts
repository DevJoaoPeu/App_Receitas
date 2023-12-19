import { Request, Response } from "express";

const RouterDefault = (req: Request, res: Response) => {
  res.json({ok: true});
};

export { RouterDefault };
