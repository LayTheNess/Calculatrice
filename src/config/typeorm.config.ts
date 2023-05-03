import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {Error} from '../error/error.entity'
import {Success} from '../success/success.entity'

export const typeOrmConfig: TypeOrmModuleOptions = {
type: 'mysql',
host: 'localhost',

username: 'user',
password: 'user',
database: 'calculatrice',
entities: [Error,Success],
};