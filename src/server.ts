import "reflect-metadata";
import express from 'express';
import "./database";

const server = express();

server.listen(3333, () => console.log("Servidor rodando na porta 33333"));