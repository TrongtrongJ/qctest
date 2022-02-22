import { Module } from '@nestjs/common';
import { CashierSystemController } from './cashier-system.controller';
import { CashierSystemService } from './cashier-system.service';

@Module({
	providers: [ CashierSystemService ],
	controllers: [ CashierSystemController ]
})
export class CashierSystemModule {}
