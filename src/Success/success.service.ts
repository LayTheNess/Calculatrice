import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Success} from './success.entity'
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class Success_Service {
    constructor(@InjectRepository(Success) private succesRepository: Repository<Success>){}

    async createSuccess(timeTakenMs: number): Promise<Success> {
      
        console.log("Success recorded");
        const success = new Success();
        success.timeTakenMs=timeTakenMs;
        console.log(success);
        await success.save();
        return success;
    }

    async Success_answer(timeused: number): Promise<[number,number]>{
     
        console.log("On traite la requête succès")
        const answer = await this.succesRepository.find();
        var average=0;
        var succesRapide=0;
     
        answer.forEach(success=>{
            average+=success.timeTakenMs;
            if (success.timeTakenMs>timeused){
                succesRapide+=1;
            }
        })
        console.log([average/answer.length,succesRapide*100/answer.length]);
        return [average/answer.length,succesRapide*100/answer.length];
    }
}