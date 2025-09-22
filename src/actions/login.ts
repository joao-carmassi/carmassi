'use server';

import axios from 'axios';
import { iApiError } from '@/interface/iApiError';
import { formatApiResponse } from '@/utils/create-api-response';

interface Props {
  identifier: string;
  password: string;
}

const API_URL = `${process.env.API_URL}/auth/local` as string;

const logaUsuario = async ({ identifier, password }: Props) => {
  try {
    const res = await axios.post(
      API_URL,
      {
        identifier,
        password,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return formatApiResponse(true, res.data);
  } catch (err) {
    const error = err as iApiError;
    console.error(error.response?.data?.error);
    return formatApiResponse(false, null, error.response?.data?.error);
  }
};

export default logaUsuario;
