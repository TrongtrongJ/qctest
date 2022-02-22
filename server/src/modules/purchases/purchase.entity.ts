import { Entity, Column, PrimaryGeneratedColumn, Index, CreateDateColumn } from 'typeorm';
import { TicketType } from '../daily-tickets/daily-tickets.entity';

@Entity()
export class Purchase {
	@PrimaryGeneratedColumn() id: number;

	@Index('Purchase_ticketType_idx')
	@Column()
	ticketType: TicketType;

	@Column() qty: number;

	@Index('Purchase_purchaseDate_idx')
	@CreateDateColumn()
	purchaseDate: string;
}
