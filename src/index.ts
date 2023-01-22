import dotenv from 'dotenv';
import express, {Application, Request, Response} from 'express';
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(compression());
app.use(helmet());
app.use(cors());

app.listen(PORT,() => {
    console.log("Express API RUN ON : " + PORT);
    app.get('/', (req: Request, res: Response) => {
        res.send("Test API Worked");
    });
});
