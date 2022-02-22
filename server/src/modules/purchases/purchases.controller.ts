import { Body, Controller, Get, Param, Patch, Post, Query, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiResponse, ApiProperty, ApiBody } from '@nestjs/swagger';
import { Serialize } from 'src/decorators/serialize.decorator';
import { DailyTicketsDto } from '../daily-tickets/dtos/daily-tickets.dto';
import { CreatePurchaseDto } from './dtos/createPurchase.dto';
import { PurchaseDto } from './dtos/purchase.dto';

import { PurchasesService } from './purchases.service';

@Controller('purchase')
export class PurchasesController {
	constructor(private purchasesService: PurchasesService) {}

	@Get()
	@Serialize(PurchaseDto)
	@ApiResponse({
		type: [ PurchaseDto ],
		description: 'Returns an array of purchase history, each with ticket type and qty with timestamp of purchase.',
		status: 200
	})
	findAllPurchases() {
		return this.purchasesService.findAll();
	}

	@Post()
	@Serialize(DailyTicketsDto)
	@ApiBody({
		type: CreatePurchaseDto,
		description: 'The type and qty of the ticket you`d like to purchase.'
	})
	@ApiCreatedResponse({
		type: DailyTicketsDto,
		description: 'Returns the daily number of available tickets left of each type after the purchase.'
	})
	purchaseTicket(@Body() { ticketType, qty }: CreatePurchaseDto) {
		return this.purchasesService.create(ticketType, qty);
	}
}
