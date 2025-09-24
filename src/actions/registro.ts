'use server';

import axios from 'axios';
import { z } from 'zod';
import { iApiError } from '@/interface/iApiError';
import { formatApiResponse } from '@/utils/create-api-response';

const schema = z.object({
  username: z
    .string()
    .min(3, { message: 'Nome de usuario deve ter pelo menos 3 caracteres' })
    .max(20, { message: 'Nome de usuario deve ter no máximo 20 caracteres' })
    .regex(/^[\p{L}0-9-_ ]+$/u, {
      message: 'Nome de usuario só pode ter letras, números e _',
    }),
  email: z.string().email({ message: 'Email inválido' }),
  password: z
    .string()
    .min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
});

interface Props {
  username: string;
  email: string;
  password: string;
}

const API_URL = `${process.env.API_URL}/auth/local/register`;

const registraUsuario = async ({ username, email, password }: Props) => {
  const result = schema.safeParse({ username, email, password });
  if (!result.success) {
    const errorDetails: Record<string, unknown> = {};
    result.error.issues.forEach((issue) => {
      const path = issue.path.join('.');
      errorDetails[path] = issue.message;
    });

    return formatApiResponse(false, null, {
      status: 400,
      name: 'ValidationError',
      message: 'Dados inválidos',
      details: errorDetails,
    });
  }

  try {
    const res = await axios.post(API_URL, result.data);
    return formatApiResponse(true, res.data);
  } catch (err) {
    const error = err as iApiError;
    console.error(error.response?.data?.error);
    return formatApiResponse(false, null, error.response?.data?.error);
  }
};

export default registraUsuario;
