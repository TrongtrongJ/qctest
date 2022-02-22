import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class DailyTickets {
	@PrimaryGeneratedColumn() id: number;

	@Index('DailyTickets_dateIndex_idx')
	@Column()
	dateIndex: string;

	@Column({ default: 10 })
	a: number;

	@Column({ default: 20 })
	b: number;

	@Column({ default: 30 })
	c: number;

	@Column({ default: 40 })
	d: number;
}

export type TicketType = Exclude<keyof DailyTickets, 'id' | 'dateIndex'>;
