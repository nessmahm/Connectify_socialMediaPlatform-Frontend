import {User} from "../context/context";

export type RequestProps = {
    requestId: string;
    requestDate: Date;
    sender: User
}