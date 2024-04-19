import { describe, it, expect } from "vitest";
import {registerAllEndpoints} from "../src/services/api/endpoints/registerAllEndpoints";
import {signup} from "../src/services/api/signup";
import {generateRandomPhoneNumber, generateRandomString} from "../src/utils/randomString";
registerAllEndpoints();

describe('Sign up', () => {
    let email = generateRandomString() + '@gmail.com'
    it('Should return true if user is created', async () => {
        const username = generateRandomString();
        const password = generateRandomString();
        const phoneNumber = generateRandomPhoneNumber();
        const newUser = await signup(username,email, password,phoneNumber,'MALE')
        expect(newUser).toBe(true);
    })
    it('Should return false if email is already in use', async () => {
        const username = generateRandomString();
        const password = generateRandomString();
        const phoneNumber = generateRandomPhoneNumber();
        const newUser = await signup(username,email, password,phoneNumber,'MALE')
        expect(newUser).toBe(false);
    })
});

