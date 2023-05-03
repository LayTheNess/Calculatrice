import{BaseEntity,PrimaryGeneratedColumn,Column,Entity} from 'typeorm';

@Entity('Success')
export class Success extends BaseEntity {
    @PrimaryGeneratedColumn()
   id: number;
    @Column()
   timeTakenMs: number;
}