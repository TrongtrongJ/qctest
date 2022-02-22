import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min, Max } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetDailyTicketDto {
	@Transform(({ value }) => parseInt(value))
	@IsNumber()
	@Min(1)
	@Max(31)
	@ApiProperty({
		type: 'number',
		description: '"date" of the specific youd like to look into',
		example: 30
	})
	day: number;

	@Transform(({ value }) => parseInt(value))
	@IsNumber()
	@Min(0)
	@Max(11)
	@ApiProperty({
		type: 'number',
		description: '"month index" of the specific youd like to look into (month number - 1)',
		example: 8
	})
	month: number;

	@Transform(({ value }) => parseInt(value))
	@IsNumber()
	@ApiProperty({
		type: 'number',
		description: '"month index" of the specific youd like to look into (month number - 1)',
		example: 2021
	})
	year: number;
}
