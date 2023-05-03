import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Error } from './error.entity';

@Injectable()
export class Error_Service {
    constructor(
        @InjectRepository(Error)
        private errorRepository: Repository<Error> 
    ){}

    async createError(): Promise<Error> {
       
        console.log("Recording an error");
        const error = new Error();
        console.log(error) 
        await error.save();
        return error;
    }

    async Error_Last(){

        console.log("Looking for last error");
        const reponse = await this.errorRepository.find();

        console.log(reponse[reponse.length-1]);

        return [reponse[reponse.length-1],reponse.length]; 
    }
}