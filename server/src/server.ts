import Express from "express";
import { router } from "./routes";
import cors from "cors"

const PORT = 3333
const app = Express();

app.use(Express.json())
app.use(cors());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});
