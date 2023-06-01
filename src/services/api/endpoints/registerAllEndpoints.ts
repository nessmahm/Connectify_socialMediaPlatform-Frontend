import { registerService } from '../requests';
import userEndpoints from './user';
import postDefinitions from './posts';
import friends from "./friends";
import friendsRequest from "./friendsRequest";
export const registerAllEndpoints = () => {
  userEndpoints.forEach(registerService);
  postDefinitions.forEach(registerService);
  friends.forEach(registerService);
  friendsRequest.forEach(registerService);
}