import { iObjectError } from '@/interface/iApiError';
import { iApiResponse } from '@/interface/iApiResponse';
import { iUser } from '@/interface/iUser';

export const formatApiResponse = (
  success: boolean,
  data: iUser | null,
  errorMessage?: iObjectError
): iApiResponse => {
  return {
    status: success ? 'success' : 'error',
    data: success ? data || null : null,
    errorMessage: success ? null : errorMessage || null,
  };
};
