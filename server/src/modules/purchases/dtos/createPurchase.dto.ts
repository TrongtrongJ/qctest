import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import { TicketType } from '../../daily-tickets/daily-tickets.entity';
export class CreatePurchaseDto {
	@ApiProperty({
		description: 'Ticket type',
		type: 'string',
		example: 'a',
		enum: [ 'a', 'b', 'c', 'd' ]
	})
	@IsString()
	ticketType: TicketType;

	@ApiProperty({
		type: 'number',
		example: 1
	})
	@IsNumber()
	qty: number;
}
