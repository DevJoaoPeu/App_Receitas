import { Router } from "express";
import { RouterDefault } from "./controllers/RotaTeste";
import { RegisterUser } from "./controllers/RegisterUser";
import { LoginUser } from "./controllers/LoginUser";
import { isAuthenticated } from "./Middlewares";
import { CreatedNewPost } from "./controllers/CreatedNewPost";
import { ListPost } from "./controllers/ListPost";
import { ListPostId } from "./controllers/ListPostId";

const router = Router();

router.get("/", isAuthenticated ,RouterDefault)

router.post("/register", RegisterUser)

router.post("/login", LoginUser)

router.post("/create", CreatedNewPost)

router.get("/list", isAuthenticated ,ListPost)

router.get("/list/:id", isAuthenticated ,ListPostId)

export { router };



