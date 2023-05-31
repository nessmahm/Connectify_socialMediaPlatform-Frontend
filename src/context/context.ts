import  { createContext, useState } from 'react';

export type User = {
  createdAt: Date;
  username: string;
  phoneNumber: number;
  email: string;
  id: string;
  gender: 'MALE' | 'FEMALE';
}
export type AuthContextType = {
  token?: string | null;
  login?: (jwtToken: string, user: User | undefined) => void;
  logout?: () => void;
  user?: User | null;
};
export const AuthContext = createContext<AuthContextType>({});


