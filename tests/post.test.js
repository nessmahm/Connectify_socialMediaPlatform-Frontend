// add a new user, test the posts array is empty, add a post, test the posts array has one post, delete the post, test the posts array is empty
import {generateRandomPhoneNumber, generateRandomString} from "../src/utils/randomString";
import {getUserPosts} from "../src/services/api/getPosts";
import {signup} from "../src/services/api/signup";
import {signin} from "../src/services/signin";
import { describe, it, expect } from "vitest";

describe('Posts', () => {
    const username = generateRandomString();
    const password = generateRandomString();
    const phoneNumber = generateRandomPhoneNumber();
    const email = generateRandomString() + '@gmail.com';
    let token;
    let userId;
    it('should create a user', async () => {
        const user = await signup(username, email, password, phoneNumber)
        expect(user).toBeTruthy();
    });
    it('should login a user', async () => {
        const user = await signin(email, password)
        expect(user).toBeTruthy();
        token = user.access_token;
        userId = user.user.id;
    })
    it('posts array should be empty', async () => {
        const posts = await getUserPosts(userId,token);
        expect(posts).toHaveLength(0);
    })

});
