import  { createContext, useState } from 'react';

export type AuthContextType = {
  token?: string | null;
  login?: (jwtToken: string) => void;
  logout?: () => void;
};
export const AuthContext = createContext<AuthContextType>({});


