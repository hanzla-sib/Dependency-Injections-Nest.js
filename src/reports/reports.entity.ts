import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

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
}
