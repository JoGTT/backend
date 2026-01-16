import { Request } from 'express';

declare global {
  namespace Express {
    interface AuthRequest extends Request {
      userId?: number;
      userRole?: string;
      tokenExp?: number;
    }
  }
}

export {};
