export const signin = async (email: string, password: string) => {
  try {
    const response = await fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login:email, password }),
    });
    console.log('res', response)
    if (!response.ok) {
      console.log('here!!')
      return false;
    }
    const userData = await response.json();
    return userData.data;
  } catch (e) {
    console.log(e);
    return false;
  }
}