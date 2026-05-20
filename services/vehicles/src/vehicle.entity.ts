import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { GpsPosition } from '../positions/position.entity';

export enum VehicleType {
  CAR = 'CAR',
  TRUCK = 'TRUCK',
  BUS = 'BUS',
  MOTORCYCLE = 'MOTORCYCLE',
}

registerEnumType(VehicleType, { name: 'VehicleType' });

@ObjectType()
@Entity('vehicles')
export class Vehicle {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ unique: true })
  licensePlate: string;

  @Field()
  @Column()
  brand: string;

  @Field()
  @Column()
  model: string;

  @Field(() => VehicleType)
  @Column({ type: 'enum', enum: VehicleType, default: VehicleType.CAR })
  type: VehicleType;

  @Field()
  @Column()
  ownerId: string;

  @Field(() => [GpsPosition], { nullable: true })
  @OneToMany(() => GpsPosition, (p) => p.vehicle, { eager: false })
  positions: GpsPosition[];

  @Field()
  @CreateDateColumn()
  createdAt: Date;
}