import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class CashierCounter {
	@PrimaryGeneratedColumn() id: number;

	@Index('CashierCounter_dateIndex_idx')
	@Column()
	dateIndex: string;

	@Column({ default: 10 })
	'1000': number;

	@Column({ default: 20 })
	'500': number;

	@Column({ default: 15 })
	'100': number;

	@Column({ default: 20 })
	'50': number;

	@Column({ default: 30 })
	'20': number;

	@Column({ default: 20 })
	'10': number;

	@Column({ default: 20 })
	'5': number;

	@Column({ default: 20 })
	'1': number;

	@Column({ default: 50 })
	'0.25': number;
}
