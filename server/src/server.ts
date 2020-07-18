import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Deletar uma informação do back-end

// Request Params: Parâmetros que vem na própria rota que identificam um recurso
// Query Param:  Parâmetros que vêm na própria rota geralmente opcionais para filtros, paginação
// Resquest Body: Parâmetros para criação/atualização de informações

// ------------ SQL SERVER ---------------
//SELECT * FROM users WHERE name = 'Vitor'

// ------------------- KNEX --------------------
// Knex('users).where('name', 'Vitor').select('*')


app.use(errors());

app.listen(3333);
