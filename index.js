//install
const express = require("express");
const app = express();

const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()


app.use(express.json());

app.get("/", (req, res) => {
  return res.send("helo world");
});

app.post("/formulario", async (req, res) => {
  const { nome,senha,email} = req.body



  await prisma.usuario.create({
    data : {
        nome,
        senha,
        email
    }
  })


  return res.status(201).send("Usuario criado com sucesso")
});


app.get("/usuario",async (req,res)=> {
    const usuario = await prisma.usuario.findMany()


    return res.status(200).send(usuario)
})

app.listen(3030, () => {
  console.log("Servidor rodando");
});
