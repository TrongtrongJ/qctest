import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class DailyTicketsDto {
	@Expose()
	@ApiProperty({
		type: 'number',
		example: 10
	})
	a: number;

	@Expose()
	@ApiProperty({
		type: 'number',
		example: 10
	})
	b: number;

	@Expose()
	@ApiProperty({
		type: 'number',
		example: 10
	})
	c: number;

	@Expose()
	@ApiProperty({
		type: 'number',
		example: 10
	})
	d: number;
}

export class DailyTicketsWithDateIdxDto extends DailyTicketsDto {
	@Expose()
	@ApiProperty({
		type: 'string',
		description: 'Custom date string index; combined date + month(index) + year.',
		example: '04082021'
	})
	dateIndex: string;
}
