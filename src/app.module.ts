import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteSchema } from './cliente/schema/cliente.schema';
import { ClienteService } from './cliente/cliente.service';

@Module({
  imports: [
    ClienteModule,
    MongooseModule.forRoot('mongodb+srv://gustavo:montserrat@cluster0-uydu8.mongodb.net/test?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name: 'Clientes', schema: ClienteSchema}]),
  ],
  controllers: [AppController],
  providers: [AppService, ClienteService],
})
export class AppModule {}
