export const signup = async(
  username: string | undefined,
  email: string | undefined,
  password: string | undefined,
  phoneNumber: number| undefined,
  gender: 'MALE' | 'FEMALE' = 'MALE',
) => {
  try {
    const response = await fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
        phoneNumber,
        gender,
      }),
    });
    if (!response.ok) {
      return false;
    }
    return true
  } catch (e) {
    console.log(e);
    return false;
  }
}