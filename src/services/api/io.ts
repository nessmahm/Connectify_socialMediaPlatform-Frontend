export type IoStatusType = 200 | 201 | 204 | 400 | 401 | 403 | 406 | 415 | 500 | 501;
const validStatusCodes = [200, 201, 204, 400, 401, 403, 406, 415, 500, 501];

export type IoError = {
  message: string;
  [key: string]: any;
};

export type IoSuccessResult = {
  [key: string]: any;
};

export type IoOutput = {
  success: boolean;
  status: IoStatusType;
  result?: IoSuccessResult;
  error?: IoError
};

// eslint-disable-next-line no-console
const logError = console.error;

export const isValidServiceResponse = (obj: any) => {
  if (typeof obj !== 'object' || !obj) {
    logError('Invalid response: Invalid object');
    return false;
  }

  if (typeof obj.success !== 'boolean') {
    logError('Invalid response: Missing or invalid success attribute.');
    return false;
  }

  if (typeof obj.status !== 'number' || !validStatusCodes.includes(obj.status)) {
    logError('Invalid response: Missing or invalid status attribute.');
    return false;
  }

  if (obj.error !== undefined) {
    if (
      typeof obj.error !== 'object'
      || !obj.error
      // typeof obj.error.code !== 'string' || // TODO - Add support for error codes
      || typeof obj.error.message !== 'string'
    ) {
      logError('Invalid response: Invalid error attribute.');
      return false;
    }
  }

  return true;
};
