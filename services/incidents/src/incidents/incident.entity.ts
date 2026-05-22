import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum IncidentType {
  ACCIDENT = 'ACCIDENT',
  WORKS = 'WORKS',
  CLOSED_ROAD = 'CLOSED_ROAD',
  TRAFFIC_JAM = 'TRAFFIC_JAM',
}

export enum IncidentStatus {
  REPORTED = 'REPORTED',
  IN_PROGRESS = 'IN_PROGRESS',
  RESOLVED = 'RESOLVED',
}

registerEnumType(IncidentType, { name: 'IncidentType' });
registerEnumType(IncidentStatus, { name: 'IncidentStatus' });

@ObjectType()
@Entity('incidents')
export class Incident {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  location: string;

  @Field(() => IncidentType)
  @Column({ type: 'enum', enum: IncidentType })
  type: IncidentType;

  @Field(() => IncidentStatus)
  @Column({ type: 'enum', enum: IncidentStatus, default: IncidentStatus.REPORTED })
  status: IncidentStatus;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description: string;

  @Field()
  @Column()
  reportedBy: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}