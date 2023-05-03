import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Error_Module } from './error/error.module';
import { Error_Controller } from './error/error.controller';
import { Error_Service } from './error/error.service';
import { Success_Module } from './success/success.module';
import { Success_Controller } from './success/success.controller';
import { Success_Service } from './success/success.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';


@Module({
  imports: [Error_Module, Success_Module,TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController,Error_Controller,Success_Controller],
  providers: [AppService,Error_Service,Success_Service],
})
export class AppModule {}