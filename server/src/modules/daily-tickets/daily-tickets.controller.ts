import { BadRequestException, Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { Serialize } from 'src/decorators/serialize.decorator';
import { dateFromDMY, isValidDMY } from 'src/utils';
import { DailyTicketsService } from './daily-tickets.service';
import { DailyTicketsDto, DailyTicketsWithDateIdxDto } from './dtos/daily-tickets.dto';
import { GetDailyTicketDto } from './dtos/get-daily-tickets.dto';

@Controller('daily-tickets')
export class DailyTicketsController {
	constructor(private dailyTicketsService: DailyTicketsService) {}

	@Get()
	@Serialize(DailyTicketsWithDateIdxDto)
	@ApiResponse({
		type: [ DailyTicketsWithDateIdxDto ],
		description: 'Returns an array of the number of tickets left unsold by type of all days.',
		status: 200
	})
	async getDailyTicketsOfAllTime() {
		return await this.dailyTicketsService.findAll();
	}

	@Get('/today')
	@Serialize(DailyTicketsDto)
	@ApiResponse({
		type: DailyTicketsDto,
		description: 'Returns the daily number of available tickets left by type.',
		status: 200
	})
	async getDailyTicketsOfToday() {
		return await this.dailyTicketsService.findOneOfToday();
	}

	@UsePipes(new ValidationPipe({ transform: true }))
	@Get('/date')
	@Serialize(DailyTicketsDto)
	@ApiResponse({
		type: DailyTicketsDto,
		description: 'Returns the number of available tickets left unsold by type of designated date.',
		status: 200
	})
	async getDailyTicketsOfDate(@Query() query: GetDailyTicketDto) {
		const { day, month, year } = query;
		if (!isValidDMY(day, month, year)) throw new BadRequestException('Invalid day/month/year');
		return await this.dailyTicketsService.findExistingOneOrCreate(dateFromDMY(day, month, year));
	}
}
