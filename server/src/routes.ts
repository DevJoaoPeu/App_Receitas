import { Router } from "express";
import { RouterDefault } from "./controllers/RotaTeste";
import { RegisterUser } from "./controllers/RegisterUser";

const router = Router();

router.get("/", RouterDefault)

router.post("/register", RegisterUser)

export { router };



