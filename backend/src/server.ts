//import { User, Survey, SurveyUser } from './database/entities/entities';
import "reflect-metadata";
import express from 'express';

import "./database/index.ts";
import { PostgresDataSource } from "./database";
import { router } from "./routes";

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

app.use(express.json());
app.use(router);

// 1 param => Rota (recurso API)
// 2 param => request, response

app.listen(3333, ()=> console.log("Server is running!"));