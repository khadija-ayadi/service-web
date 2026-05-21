import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NotificationsService } from './notifications.service';
import { Notification } from './notification.entity';

@Resolver(() => Notification)
export class NotificationsResolver {
  constructor(private notifService: NotificationsService) {}

  @Mutation(() => Notification)
  async sendNotification(
    @Args('title') title: string,
    @Args('message') message: string,
    @Args('userId') userId: string,
  ): Promise<Notification> {
    return this.notifService.send(title, message, userId);
  }

  @Query(() => [Notification])
  async notifications(@Args('userId') userId: string): Promise<Notification[]> {
    return this.notifService.findAll(userId);
  }

  @Mutation(() => Notification)
  async markNotificationAsRead(@Args('id') id: string): Promise<Notification> {
    return this.notifService.markAsRead(id);
  }
}
