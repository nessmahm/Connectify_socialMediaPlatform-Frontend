import { registerService } from '../requests';
import userEndpoints from './user';
import postDefinitions from './posts';
export const registerAllEndpoints = () => {
  userEndpoints.forEach(registerService);
  postDefinitions.forEach(registerService);
}