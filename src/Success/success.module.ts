import { Module } from '@nestjs/common';
import { Success_Controller } from './success.controller';
import { Success_Service } from './success.service';
import { Success} from './success.entity'
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Success])],
  controllers: [Success_Controller],
  providers: [Success_Service],
  exports: [TypeOrmModule],
})
export class Success_Module {}