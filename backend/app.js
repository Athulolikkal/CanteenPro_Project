import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import expressConfig from './frameworks/webserver/express.js';
import serverConfig from './frameworks/webserver/server.js';
import config from './config/config.js';
import connection from './frameworks/database/mongoDB/connection.js';
import routes from './frameworks/webserver/routes/index.js'


const app=express()
const server=http.createServer(app)


//configaring express from app
expressConfig(app)

//starting server on port
serverConfig(server,config).startServer()
connection(mongoose,config).connectToMongo()
routes(app,express)

export default app;
