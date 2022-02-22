import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass, ClassConstructor } from 'class-transformer';

class SerializeInterceptor implements NestInterceptor {
	constructor(private dto: ClassConstructor<any>) {}
	intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
		// Run something before a request is handled by request handler

		return handler.handle().pipe(
			map((data: any) => {
				// Run something before the response is sent out
				// We want to convert userData to UserDto before sending to client
				return plainToClass(this.dto, data, {
					excludeExtraneousValues: true
				});
			})
		);
	}
}

// Use this as a decorator
export function Serialize(dto: ClassConstructor<any>) {
	return UseInterceptors(new SerializeInterceptor(dto));
}
