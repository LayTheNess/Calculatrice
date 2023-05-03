import { Controller,Post,Body } from '@nestjs/common';
import {Error} from './error.model';
import { Error_Service } from './error.service';

@Controller('Error')
export class Error_Controller {
  constructor(private errorService: Error_Service) {}

  @Post() 
  HandleError():Promise<(number|Error)[]>{
        console.log("POST reçu pour un échec !");
   
        this.errorService.createError();
        console.log("Error sauvegardé");
      
        return this.errorService.Error_Last();
      }
}