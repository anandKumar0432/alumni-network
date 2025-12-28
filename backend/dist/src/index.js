import express from 'express';
import { prisma } from './lib/prisma.js';
const app = express();
app.use(express.json());
app.get("/", async (req, res) => {
    await prisma.user.create({
        data: {
            name: "BRIJ",
            email: "BRIJ@gmail.com",
            password: "kumar"
        }
    });
    res.status(200).json({
        msg: "hii there"
    });
});
app.listen(3000);
