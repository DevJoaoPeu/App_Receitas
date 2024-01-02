import { Router } from "express";
import { RouterDefault } from "./controllers/RotaTeste";
import { RegisterUser } from "./controllers/RegisterUser";
import { LoginUser } from "./controllers/LoginUser";

const router = Router();

router.get("/", RouterDefault)

router.post("/register", RegisterUser)

router.post("/login", LoginUser)

export { router };



