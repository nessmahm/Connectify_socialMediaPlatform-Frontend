import { useEffect } from 'react';
import { useContext } from 'react';
import { JSX } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/context';
import { AuthContextType } from '../../context/context';

type AuthNeededProps = {
  element: JSX.Element;
}
export const AuthNeeded = ({ element }: AuthNeededProps) => {
  const context = useContext<AuthContextType>(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(context)
    if (!context.token) {
      console.log('here')
    navigate('/signin', { replace: true })
  }},[context]);

  return element
}