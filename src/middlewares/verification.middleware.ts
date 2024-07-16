import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class VerificationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const apiKey = process.env.API_KEY;
    if (!req.header('x-api-key')) {
      res.status(400).json({
        error: 'Missing header',
        message: 'Please provide x-api-key header',
      });
      return;
    } else if (req.header('x-api-key') === apiKey) {
      next();
      return;
    }
    res.status(401).json({ error: 'Unauthorized', message: 'Invalid API Key' });
    return;
  }
}
