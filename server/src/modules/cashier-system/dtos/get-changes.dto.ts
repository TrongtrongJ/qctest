import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetChangesDto {
	@Transform(({ value }) => parseFloat(value))
	@IsNumber()
	@ApiProperty({
		type: 'number',
		description: 'Product price; can be int or float',
		example: 50.75
	})
	price: number;

	@Transform(({ value }) => parseFloat(value))
	@IsNumber()
	@ApiProperty({
		type: 'number',
		description: 'Cash paid; must be greater than product price; can be int or float',
		example: 200.5
	})
	paid: number;
}
