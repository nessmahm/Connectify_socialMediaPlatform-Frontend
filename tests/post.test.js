// add a new user, test the posts array is empty, add a post, test the posts array has one post, delete the post, test the posts array is empty
import {generateRandomPhoneNumber, generateRandomString} from "../src/utils/randomString";
import {addPost, deletePost, getUserPosts} from "../src/services/api/getPosts";
import {signup} from "../src/services/api/signup";
import {signin} from "../src/services/signin";
import { describe, it, expect } from "vitest";
import {PostData} from "../src/components/Posts/Post";

describe('Posts', () => {
    const username = generateRandomString();
    const password = generateRandomString();
    const phoneNumber = generateRandomPhoneNumber();
    const email = generateRandomString() + '@gmail.com';
    let token;
    let userId;
    let postId ;
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
    it('should add a post', async () => {
        const postData:PostData={file:null,content:"Hello friends"}
        const post = await addPost(postData, token);
        postId = post?.id;
        expect(post).toBeTruthy();

    });
    it('posts array should have one post', async () => {
        const posts = await getUserPosts(userId,token);
        expect(posts).toHaveLength(1);
    })
    it('should delete a post', async () => {
        const removePost = await deletePost(token,postId);
        expect(removePost).toBeTruthy();
    });
    it('posts array should be empty again', async () => {
        const posts = await getUserPosts(userId,token);
        expect(posts).toHaveLength(0);
    })

});
