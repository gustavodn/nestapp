import { Document } from 'mongoose';
export interface ClienteInterface extends Document {
    rut: string;
    rutchileno: string;
    nombre: string;
    apellido: string;
    telefono: string;
    sexo: string;
    email: string;
    dreicciones: string;
    createdAt: Date;
}
