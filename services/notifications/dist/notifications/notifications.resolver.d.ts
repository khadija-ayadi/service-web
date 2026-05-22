import { NotificationsService } from './notifications.service';
import { Notification } from './notification.entity';
export declare class NotificationsResolver {
    private notifService;
    constructor(notifService: NotificationsService);
    sendNotification(title: string, message: string, userId: string): Promise<Notification>;
    notifications(userId: string): Promise<Notification[]>;
    markNotificationAsRead(id: string): Promise<Notification>;
}
