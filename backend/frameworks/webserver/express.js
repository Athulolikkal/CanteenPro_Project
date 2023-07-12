import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet'

export default function expressConfig(app){
app.use(helmet())
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({
    limit:'50mb',
    extended:true,
}))
app.use(cors())
app.use(morgan('dev'))
}