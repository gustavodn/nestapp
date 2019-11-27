import { Controller, Get, Post, Put, Delete, Body, Param, Render, Res, HttpStatus, NotFoundException, Query } from '@nestjs/common';
import {CrearClienteDTO} from './dto/crear-cliente.dto';
import { ClienteService } from './cliente.service';
import {ClienteInterface} from './interfaces/cliente.interface';

@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) { }

    @Get('/')
    async getAll(@Res() res): Promise<ClienteInterface[]> {
        const clientes = await this.clienteService.getAll();
        return res.status(HttpStatus.OK).json({
            clientes,
        });
    }
     @Post('/create')
    async create(@Res() res, @Body() clienteDto: ClienteInterface): Promise<ClienteInterface> {
        const cliente = await this.clienteService.create(clienteDto);
        return res.status(HttpStatus.OK).json({
            message: 'Cliente Creado!',
            cliente,
        });
    }
    @Put('/update')
    async update(@Res() res, @Body() clienteDto: ClienteInterface, @Query('id') id): Promise<ClienteInterface> {
        const clienteActualizado   = await this.clienteService.update(id, clienteDto);
        if (!clienteActualizado) { throw new NotFoundException('No se consiguio el cliente'); }
        return res.status(HttpStatus.OK).json({
            message: 'El cliente fue actualizado',
            clienteActualizado,
        });
    }
    @Get('/:id')
    async findOne(@Res() res, @Param('id') id: string) {
        const cliente = await this.clienteService.findOne(id);
        if (!cliente) { throw new NotFoundException('No se consiguio el cliente'); }
        return res.status(HttpStatus.OK).json(cliente);
    }
    @Delete('/delete')
    async delete(@Res() res, @Query('id') id ): Promise<ClienteInterface> {
        const clienteBorrado = await this.clienteService.delete(id);
        if (!clienteBorrado) { throw new NotFoundException('No se consiguio el cliente'); }
        return res.status(HttpStatus.OK).json({
            message: 'Cliente Eliminado!',
            clienteBorrado,
        });
    }
}