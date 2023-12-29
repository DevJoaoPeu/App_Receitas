import { Router } from "express";
import { RouterDefault } from "./controllers/RotaTeste";

const router = Router();

router.get("/", RouterDefault)

export { router };
