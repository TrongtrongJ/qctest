import { Test, TestingModule } from '@nestjs/testing';
import { DailyTicketsService } from './daily-tickets.service';

describe('DailyTicketsService', () => {
  let service: DailyTicketsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyTicketsService],
    }).compile();

    service = module.get<DailyTicketsService>(DailyTicketsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
