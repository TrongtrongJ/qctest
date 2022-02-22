import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

class CashReturnMapDto {
	@Expose()
	@ApiProperty({
		description: 'Amount of 1000-baht bank note returned',
		type: 'number',
		example: 1
	})
	'1000': number;

	@Expose()
	@ApiProperty({
		description: 'Amount of 500-baht bank note returned',
		type: 'number',
		example: 1
	})
	'500': number;

	@Expose()
	@ApiProperty({
		description: 'Amount of 100-baht bank note returned',
		type: 'number',
		example: 1
	})
	'100': number;

	@Expose()
	@ApiProperty({
		description: 'Amount of 50-baht bank note returned',
		type: 'number',
		example: 1
	})
	'50': number;

	@Expose()
	@ApiProperty({
		description: 'Amount of 20-baht bank note returned',
		type: 'number',
		example: 1
	})
	'20': number;

	@Expose()
	@ApiProperty({
		description: 'Amount of 10-baht coin returned',
		type: 'number',
		example: 1
	})
	'10': number;

	@Expose()
	@ApiProperty({
		description: 'Amount of 5-baht coin returned',
		type: 'number',
		example: 1
	})
	'5': number;

	@Expose()
	@ApiProperty({
		description: 'Amount of 1-baht coin returned',
		type: 'number',
		example: 1
	})
	'1': number;

	@Expose()
	@ApiProperty({
		description: 'Amount of quater-baht coin returned',
		type: 'number',
		example: 1
	})
	'0.25': number;
}

export class ChangesDto {
	@Expose()
	@ApiProperty({
		type: () => CashReturnMapDto,
		description: 'Mapping of the amount of each type of cash returned'
	})
	cashReturnMap: CashReturnMapDto;

	@Expose()
	@ApiProperty({
		description: 'Total value of changes returned',
		type: 'number',
		example: 100
	})
	totalReturn: number;

	@Expose()
	@ApiProperty({
		description: 'Situational; Total value of changes left that cannot be returned',
		type: 'number',
		example: 0.1
	})
	cannotReturn?: number;
}
