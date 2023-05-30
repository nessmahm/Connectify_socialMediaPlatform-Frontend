import { registerService } from '../requests.ts';
import userEndpoints from './user.ts';
export const registerAllEndpoints = () => {
  userEndpoints.forEach(registerService);
}