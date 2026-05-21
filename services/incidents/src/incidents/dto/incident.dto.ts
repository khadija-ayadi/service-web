import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsEnum, IsOptional } from 'class-validator';
import { IncidentType, IncidentStatus } from '../incident.entity';

@InputType()
export class CreateIncidentInput {
  @Field()
  @IsString()
  title: string;

  @Field()
  @IsString()
  location: string;

  @Field(() => IncidentType)
  @IsEnum(IncidentType)
  type: IncidentType;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  description?: string;

  @Field()
  @IsString()
  reportedBy: string;
}

@InputType()
export class UpdateIncidentStatusInput {
  @Field()
  @IsString()
  id: string;

  @Field(() => IncidentStatus)
  @IsEnum(IncidentStatus)
  status: IncidentStatus;
}
