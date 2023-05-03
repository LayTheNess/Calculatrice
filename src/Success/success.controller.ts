import { Controller,Post,Body } from '@nestjs/common';
import { Success_Service } from './success.service';
import { Success } from './success.entity';

@Controller('Success')
export class Success_Controller {
    constructor(private success_Service:Success_Service ){}

    @Post()
    handleSuccess(@Body('timeTakenMs') timeTakenMs: number):Promise<[number,number]>{
        console.log("POST request was a success");
       
        this.success_Service.createSuccess(timeTakenMs);
        console.log("Success recorded");
      
        return this.success_Service.Success_answer(timeTakenMs);
    }
}