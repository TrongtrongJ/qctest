import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyTicketsController } from './daily-tickets.controller';
import { DailyTicketsService } from './daily-tickets.service';
import { DailyTickets } from './daily-tickets.entity';

@Module({
	imports: [ TypeOrmModule.forFeature([ DailyTickets ]) ],
	controllers: [ DailyTicketsController ],
	providers: [ DailyTicketsService ],
	exports: [ DailyTicketsService ]
})
export class DailyTicketsModule {}
