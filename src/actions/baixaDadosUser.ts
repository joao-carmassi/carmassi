'use server';

import axios from 'axios';
import { iApiError } from '@/interface/iApiError';
import { formatApiResponse } from '@/utils/create-api-response';

interface Props {
  token: string;
}

const API_URL = `${process.env.API_URL}/users/me`;

const getUser = async ({ token }: Props) => {
  try {
    const res = await axios
      .get(API_URL, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => ({
        jwt: token,
        user: res.data,
      }));
    return formatApiResponse(true, res);
  } catch (err) {
    const error = err as iApiError;
    console.error(error.response?.data?.error);
    return formatApiResponse(false, null, error.response?.data?.error);
  }
};

export default getUser;
