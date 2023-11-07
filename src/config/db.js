import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;


const uri = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const connection = mongoose.connect(uri).then(() => {
    console.log('Conexión exitosa');
}).catch((e)=>{
    console.log('Error de conexión');
    console.log(e);
});


export default connection;
