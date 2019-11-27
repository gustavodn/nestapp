import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ClienteInterface  } from './interfaces/cliente.interface';

@Injectable()
export class ClienteService {
    constructor(@InjectModel('Clientes') private readonly clienteModel: Model<ClienteInterface>) {}

    async getAll(): Promise<ClienteInterface[]> {
        const clientes =  await this.clienteModel.find();
        return clientes;
    }

    async create(cliente: ClienteInterface): Promise<ClienteInterface> {
        const nuevoCliente = new this.clienteModel(cliente);
        return await nuevoCliente.save();
    }

    async findOne(id: string): Promise<ClienteInterface> {
        const cliente = await this.clienteModel.findById(id);
        return cliente;
    }

    async update(id: string, cliente: ClienteInterface): Promise<ClienteInterface> {
        const updateCliente = await this.clienteModel.findByIdAndUpdate(id, cliente, {new: true});
        return updateCliente;
    }

    async delete(id: string): Promise<ClienteInterface> {
        const deleteCliente = await this.clienteModel.findByIdAndRemove(id);
        return deleteCliente;
    }

}
