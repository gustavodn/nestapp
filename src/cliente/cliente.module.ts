import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteSchema } from './schema/cliente.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Clientes', schema: ClienteSchema}]),
  ],
  controllers: [ClienteController],
  providers: [ClienteService]
})
export class ClienteModule {}
