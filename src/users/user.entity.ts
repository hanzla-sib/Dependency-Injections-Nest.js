import {
  AfterUpdate,
  AfterRemove,
  AfterInsert,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

// import { Exclude } from 'class-transformer';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;
  // @Exclude()
  @Column()
  email: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted user with id: ', this.id);
  }

  @AfterUpdate()
  LogUpdate() {
    console.log('Updated user with id: ', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed user with id: ', this.id);
  }
}
