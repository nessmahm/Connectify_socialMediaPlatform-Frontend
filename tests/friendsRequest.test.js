// add a new user, test the posts array is empty, add a post, test the posts array has one post, delete the post, test the posts array is empty
import {generateRandomPhoneNumber, generateRandomString} from "../src/utils/randomString";
import {signup} from "../src/services/api/signup";
import {signin} from "../src/services/signin";
import { describe, it, expect, vi } from "vitest";
import {getFriendRequests, sendFriendRequest} from "../src/services/api/friendRequests";

describe('Friends_Request', () => {
    const username = generateRandomString();
    const password = generateRandomString();
    const phoneNumber = generateRandomPhoneNumber();
    const email = generateRandomString() + '@gmail.com';
    const username_2 = generateRandomString();
    const password_2 = generateRandomString();
    const phoneNumber_2 = generateRandomPhoneNumber();
    const email_2 = generateRandomString() + '@gmail.com';
    let token_2;
    let userId_2;

    let token;
    let userId;

    it('should create a user 1', async () => {
        const user = await signup(username, email, password, phoneNumber)
        expect(user).toBeTruthy();
    });
    it('should login a user 1', async () => {
        const user = await signin(email, password)
        expect(user).toBeTruthy();
        token = user.access_token;
        userId = user.user.id;
    })

    it('should create a user 2', async () => {
        const user2 = await signup(username_2, email_2, password_2, phoneNumber_2)
        expect(user2).toBeTruthy();
    });
    it('should login a user 2', async () => {
        const user = await signin(email_2, password_2)
        expect(user).toBeTruthy();
        token_2 = user.access_token;
        userId_2 = user.user.id;
    })
    it('user  should send a friend request to user2', async () => {
        const setFriendRequests = vi.fn();
        const setStatus = vi.fn();
        const setErrorMessage = vi.fn();
        const friendRequest = await sendFriendRequest(userId, userId_2,token);
        expect(friendRequest).toBeTruthy();

    })
    it('user 2 should get friend requests', async () => {
        const friendsRequest = await getFriendRequests(token_2);
        expect(friendsRequest).toHaveLength(1);
    })

});

