import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	@ApiResponse({
		type: String,
		description: 'Default Hello Worlds! response',
		status: 200
	})
	getHello(): string {
		return this.appService.getHello();
	}
}
