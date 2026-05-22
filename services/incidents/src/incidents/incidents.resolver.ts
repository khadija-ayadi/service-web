import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { IncidentsService } from './incidents.service';
import { Incident } from './incident.entity';
import { CreateIncidentInput, UpdateIncidentStatusInput } from './dto/incident.dto';

@Resolver(() => Incident)
export class IncidentsResolver {
  constructor(private incidentsService: IncidentsService) {}

  @Mutation(() => Incident)
  async createIncident(@Args('input') input: CreateIncidentInput): Promise<Incident> {
    return this.incidentsService.create(input);
  }

  @Query(() => [Incident])
  async incidents(): Promise<Incident[]> {
    return this.incidentsService.findAll();
  }

  @Query(() => Incident)
  async incident(@Args('id') id: string): Promise<Incident> {
    return this.incidentsService.findOne(id);
  }

  @Mutation(() => Incident)
  async updateIncidentStatus(@Args('input') input: UpdateIncidentStatusInput): Promise<Incident> {
    return this.incidentsService.updateStatus(input);
  }
}
