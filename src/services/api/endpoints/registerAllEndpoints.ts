import { registerService } from '../requests';
import userEndpoints from './user';
export const registerAllEndpoints = () => {
  userEndpoints.forEach(registerService);
}