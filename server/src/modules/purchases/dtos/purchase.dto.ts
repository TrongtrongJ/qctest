import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { TicketType } from '../../daily-tickets/daily-tickets.entity';
export class PurchaseDto {
	@Expose()
	@ApiProperty({
		description: 'Ticket type',
		type: 'string',
		example: 'a',
		enum: [ 'a', 'b', 'c', 'd' ]
	})
	ticketType: TicketType;

	@Expose()
	@ApiProperty({
		type: 'number',
		example: 1
	})
	qty: number;

	@Expose()
	@ApiProperty({
		type: 'string',
		format: 'date-time',
		example: '2021-08-04T19:39:00.829Z'
	})
	purchaseDate: string;
}
