import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, TransactionManager, EntityManager } from 'typeorm';
import { Cron } from '@nestjs/schedule';
import { DailyTickets, TicketType } from './daily-tickets.entity';
import { getDateIndexStringFromDate } from '../../utils';

@Injectable()
export class DailyTicketsService {
	constructor(@InjectRepository(DailyTickets) private dailyTicketsRepo: Repository<DailyTickets>) {}
	async create(date: Date) {
    const newDailyTickets = this.dailyTicketsRepo.create({ dateIndex: getDateIndexStringFromDate(date) });
		return await this.dailyTicketsRepo.save(newDailyTickets);
	}

  async findAll() {
    return await this.dailyTicketsRepo.find();
  }

  async findOneByDate(date: Date) {
    console.log(getDateIndexStringFromDate(date));
    return await this.dailyTicketsRepo.findOne({ dateIndex: getDateIndexStringFromDate(date) });
  }

  async findOneOrCreate(date: Date) {
    let existingDailyTickets = await this.findOneByDate(date);
    return existingDailyTickets || await this.create(date);
  }

  async findOneOfToday() {
    return await this.findOneOrCreate(new Date());
  }


  /**
   * Once every 15 minutes from 0AM(12PM) to 1AM
   */ 
  @Cron('0 */15 0-1 * * *')
  async createDailyTicketsAtDawn() {
    this.findOneOrCreate(new Date());
  }

	async purchaseTickets(ticketType: TicketType, qty: number, @TransactionManager() transaction?: EntityManager) {
    const date = new Date();
		let dailyTickets = await this.dailyTicketsRepo.findOne({ dateIndex: getDateIndexStringFromDate(date) });
    dailyTickets ??= await this.create(date);
    if (dailyTickets[ticketType] < qty) {
      throw new ConflictException('Not Enough Tickets');
    }
    dailyTickets[ticketType] -= qty;
    return transaction ? await transaction.save(dailyTickets) : await this.dailyTicketsRepo.save(dailyTickets);
	}
}
