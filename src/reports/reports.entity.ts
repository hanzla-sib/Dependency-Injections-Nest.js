import { User } from 'src/users/user.entity';
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;



  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  lat: number;

  @Column()
  lng: number;

  @Column()
  mileage: number;

  @Column()
  year: number;

  @ManyToOne(() => User, (user) => user.reports)
  user: User;
 
}
