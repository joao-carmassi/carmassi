export interface iApiError {
  response?: {
    data?: {
      error?: iObjectError;
      message?: string;
    };
  };
}

export interface iObjectError {
  status: number;
  name: string;
  message: string;
  details: Record<string, unknown>;
}
