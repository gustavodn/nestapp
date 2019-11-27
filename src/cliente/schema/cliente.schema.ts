import { Schema } from 'mongoose';
export const ClienteSchema = new Schema({
    rut: String,
    rutchileno: String,
    nombre: String,
    apellido: String,
    telefono: String,
    sexo: String,
    email: String,
    direcciones: String,
    createdAt:{
        type: Date,
        default: Date.now,
    }
});
