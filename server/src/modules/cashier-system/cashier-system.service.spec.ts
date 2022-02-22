import { Test, TestingModule } from '@nestjs/testing';
import { CashierSystemService } from './cashier-system.service';

describe('CashierSystemService', () => {
  let service: CashierSystemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CashierSystemService],
    }).compile();

    service = module.get<CashierSystemService>(CashierSystemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
