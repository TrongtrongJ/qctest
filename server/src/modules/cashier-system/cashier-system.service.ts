import { BadRequestException, Injectable } from '@nestjs/common';
import { scaleUpToSafeInt, scaleDownToBaht } from 'src/utils';
import { initialMaximumCashMap, initialCashReturnMap, upScaledCashValue, CashType } from './constants/cash.constants';

@Injectable()
export class CashierSystemService {
	getChanges(productPrice: number, customerPaid: number) {
		const cashReturnMap = { ...initialCashReturnMap };
		const maximumCashMap = { ...initialMaximumCashMap };
		productPrice = scaleUpToSafeInt(productPrice);
		customerPaid = scaleUpToSafeInt(customerPaid);
		let overPaid = customerPaid - productPrice;
		if (overPaid < 0) return new BadRequestException('The paid amount should be higher than product price');
		let totalReturn = 0;
		const allCashTypes = Object.keys(upScaledCashValue).sort((bef, aft) => parseFloat(aft) - parseFloat(bef));
		allCashTypes.forEach((cashType: CashType) => {
			if (overPaid === 0) return;
			const cashTypeUpScaledValue = upScaledCashValue[cashType];
			const cashTypeMaximumAmount = maximumCashMap[cashType];
			const amountCashTypeShouldPay = Math.floor(overPaid / cashTypeUpScaledValue);
			const realAmountCashTypeIsPaid =
				amountCashTypeShouldPay <= cashTypeMaximumAmount ? amountCashTypeShouldPay : cashTypeMaximumAmount;
			const valueCashTypeIsPaid = realAmountCashTypeIsPaid * cashTypeUpScaledValue;
			totalReturn += valueCashTypeIsPaid;
			overPaid -= valueCashTypeIsPaid;
			cashReturnMap[cashType] = realAmountCashTypeIsPaid;
		});
		return {
			cashReturnMap,
			totalReturn: scaleDownToBaht(totalReturn),
			...overPaid && { cannotReturn: scaleDownToBaht(overPaid) }
		};
	}
}
