import { registerService } from '../requests';
import userEndpoints from './user';
import postDefinitions from './posts';
import friends from "./friends";
export const registerAllEndpoints = () => {
  userEndpoints.forEach(registerService);
  postDefinitions.forEach(registerService);
  friends.forEach(registerService);
}