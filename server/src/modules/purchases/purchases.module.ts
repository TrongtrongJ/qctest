import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchasesController } from './purchases.controller';
import { PurchasesService } from './purchases.service';
import { DailyTicketsModule } from '../daily-tickets/daily-tickets.module';
import { Purchase } from './purchase.entity';

@Module({
	imports: [ TypeOrmModule.forFeature([ Purchase ]), DailyTicketsModule ],
	controllers: [ PurchasesController ],
	providers: [ PurchasesService ]
})
export class PurchasesModule {}
