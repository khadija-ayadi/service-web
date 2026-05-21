import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './notification.entity';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private notifRepo: Repository<Notification>,
  ) {}

  async send(title: string, message: string, userId: string): Promise<Notification> {
    const notif = this.notifRepo.create({ title, message, userId });
    return this.notifRepo.save(notif);
  }

  async findAll(userId: string): Promise<Notification[]> {
    return this.notifRepo.find({ where: { userId }, order: { createdAt: 'DESC' } });
  }

  async markAsRead(id: string): Promise<Notification> {
    const notif = await this.notifRepo.findOne({ where: { id } });
    if (!notif) throw new NotFoundException(`Notification ${id} not found`);
    notif.isRead = true;
    return this.notifRepo.save(notif);
  }
}
