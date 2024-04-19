export const getUserPosts = async(
  userId: string | undefined,
  token: string
) => {
  try {
    const response = await fetch('http://localhost:3000/post/get-by-user'+userId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    if (!response.ok) {
      return false;
    }
    const data = await response.json()
    console.log('data', data)
    return data.data ?? []
  } catch (e) {
    console.log(e);
    return false;
  }
}