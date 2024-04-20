export const sendFriendRequest = async (senderId: string, recieverId: string, token: string) => {
  try {
    const response = await fetch('http://localhost:3000/friend-request/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({senderId, recieverId}),
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

export const getFriendRequests = async (token: string) => {
  try {
    const response = await fetch('http://localhost:3000/friend-request/recieved', {
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
    return data.data ?? []
  } catch (e) {
    console.log(e);
    return false;
  }
}