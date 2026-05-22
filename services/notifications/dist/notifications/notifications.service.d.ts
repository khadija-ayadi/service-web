import { Repository } from 'typeorm';
import { Notification } from './notification.entity';
export declare class NotificationsService {
    private notifRepo;
    constructor(notifRepo: Repository<Notification>);
    send(title: string, message: string, userId: string): Promise<Notification>;
    findAll(userId: string): Promise<Notification[]>;
    markAsRead(id: string): Promise<Notification>;
}
