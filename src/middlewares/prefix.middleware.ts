import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class PrefixMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    req.url = `/app/v1${req.url}`; // add prefix '/app/v1' to all routes
    console.log('Request...', req.url);

    next();
  }
}
