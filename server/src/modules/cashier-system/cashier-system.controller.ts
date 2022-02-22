import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Serialize } from 'src/decorators/serialize.decorator';
import { CashierSystemService } from './cashier-system.service';
import { ChangesDto } from './dtos/changes.dto';
import { GetChangesDto } from './dtos/get-changes.dto';

@Controller('cashier-system')
export class CashierSystemController {
	constructor(private cashierSystemService: CashierSystemService) {}

	@UsePipes(new ValidationPipe({ transform: true }))
	@Get()
	@Serialize(ChangesDto)
	@ApiResponse({
		type: ChangesDto,
		description: `Shows the total value and the amount of each type of cash returned with, 
      optionally, the overpaid amount that cannot be returned`
	})
	getChanges(@Query() query: GetChangesDto) {
		const { price, paid } = query;
		return this.cashierSystemService.getChanges(price, paid);
	}
}
