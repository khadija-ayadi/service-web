import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@ObjectType()
@Entity('notifications')
export class Notification {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  message: string;

  @Field()
  @Column()
  userId: string;

  @Field()
  @Column({ default: false })
  isRead: boolean;

  @Field()
  @CreateDateColumn()
  createdAt: Date;
}
