import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutor } from './tutores/tutor.entity.js';
import { Pet } from './pet/pet.entity.js';
import { Raça } from './raça/raça.entity.js';
import { Especie } from './espécie/espécie.entity.js';
import { Origem } from './origem/origem.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot ({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'Clinica_Atv',
      entities: [Tutor, Pet, Raça, Especie, Origem],    
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule{}

