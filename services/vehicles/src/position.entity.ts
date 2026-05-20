import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Vehicle } from '../vehicles/vehicle.entity';

@ObjectType()
@Entity('gps_positions')
export class GpsPosition {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  vehicleId: string;

  @ManyToOne(() => Vehicle, (v) => v.positions)
  @JoinColumn({ name: 'vehicleId' })
  vehicle: Vehicle;

  @Field(() => Float)
  @Column('decimal', { precision: 10, scale: 7 })
  latitude: number;

  @Field(() => Float)
  @Column('decimal', { precision: 10, scale: 7 })
  longitude: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  address: string;

  @Field()
  @CreateDateColumn()
  recordedAt: Date;
}