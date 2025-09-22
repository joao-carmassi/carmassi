import { iUser } from './iUser';

export interface iApiResponse {
  status: 'success' | 'error';
  data: iUser | null;
  errorMessage: null | {
    status: number;
    name: string;
    message: string;
    details: Record<string, unknown>;
  };
}
