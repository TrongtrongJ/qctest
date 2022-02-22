import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { TicketType } from '../daily-tickets/daily-tickets.entity';
import { DailyTicketsService } from '../daily-tickets/daily-tickets.service';
import { Purchase } from './purchase.entity';

@Injectable()
export class PurchasesService {
	constructor(
		@InjectRepository(Purchase) private purchasesRepo: Repository<Purchase>,
		private dailyTicketsService: DailyTicketsService
	) {}
	async create(ticketType: TicketType, qty: number) {
		const queryRunner = getConnection().createQueryRunner();
		await queryRunner.startTransaction();
		try {
			const dailyTicketsStatus = await this.dailyTicketsService.purchaseTickets(
				ticketType,
				qty,
				queryRunner.manager
			);
			const newPurchase = this.purchasesRepo.create({ ticketType, qty });
			await queryRunner.manager.save(newPurchase);
			await queryRunner.commitTransaction();
			return dailyTicketsStatus;
		} catch (err) {
			console.error(err);
			await queryRunner.rollbackTransaction();
			throw err;
		} finally {
			await queryRunner.release();
		}
	}
	async findAll() {
		return await this.purchasesRepo.find();
	}
}
