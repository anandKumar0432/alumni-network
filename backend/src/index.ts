import express from 'express';
import cors from 'cors'
import mainRouter from "./routes/index.js"
import cookieParser from 'cookie-parser';

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(cookieParser());

app.use("/api/v1", mainRouter);

app.listen(PORT, ()=>{
    console.log(`app is listening on port ${PORT}`);
});