import { Module } from '@nestjs/common';
import { Error_Controller } from './error.controller';
import { Error_Service } from './error.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Error} from './error.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Error])],
  controllers: [Error_Controller],
  providers: [Error_Service],
  exports: [TypeOrmModule],
})
export class Error_Module {}