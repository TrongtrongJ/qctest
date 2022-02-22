import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchasesModule } from './modules/purchases/purchases.module';
import { DailyTicketsModule } from './modules/daily-tickets/daily-tickets.module';
import { CashierSystemModule } from './modules/cashier-system/cashier-system.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: `.env.${process.env.NODE_ENV}`
		}),
		TypeOrmModule.forRoot(),
		ThrottlerModule.forRoot({
			ttl: 60,
			limit: 10
		}),
		ScheduleModule.forRoot(),
		PurchasesModule,
		DailyTicketsModule,
		CashierSystemModule
	],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}
