import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CustomResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> | Promise<Observable<any>> {
    // Get the response object
    const response = context.switchToHttp().getResponse();

    return next.handle().pipe(
      map((data) => {
        const responseObject = {
          status: response.statusCode,
          data: data,
        };

        return responseObject;
      }),
    );
  }
}
