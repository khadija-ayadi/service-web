import { ObjectType, Field, ID, Float, Int, registerEnumType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum TrafficDensity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

registerEnumType(TrafficDensity, { name: 'TrafficDensity' });

@ObjectType()
@Entity('traffic_zones')
export class TrafficZone {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field(() => Float)
  @Column('decimal', { precision: 10, scale: 7 })
  latitude: number;

  @Field(() => Float)
  @Column('decimal', { precision: 10, scale: 7 })
  longitude: number;

  @Field(() => Int)
  @Column({ default: 0 })
  vehicleCount: number;

  @Field(() => TrafficDensity)
  @Column({ type: 'enum', enum: TrafficDensity, default: TrafficDensity.LOW })
  density: TrafficDensity;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
