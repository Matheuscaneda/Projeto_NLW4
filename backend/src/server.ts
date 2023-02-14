import { User, Survey, SurveyUser } from './database/entities/entities';
import "reflect-metadata";
import express from 'express';

import "./database/index.ts";
import { PostgresDataSource } from "./database";

/*
 GET => Busca
 POST => Salvar
 PUT => Alterar
 DELETE => Deletar
 PATCH => Alteração específica
*/
PostgresDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

const app = express();

app.get("/users", (request,response) => {
    //return response.send("Hello World - Matheus");
    return response.json({message:"Hello World - Matheus"});
})

// 1 param => Rota (recurso API)
// 2 param => request, responde

app.post("/", (request, response) => {
    return response.json({message:"Dados salvos com sucesso"});
})

app.listen(3333, ()=> console.log("Server is running!"));