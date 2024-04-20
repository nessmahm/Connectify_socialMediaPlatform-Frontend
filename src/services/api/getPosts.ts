import {PostData} from "../../components/Posts/Post";

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

export const addPost = async(
    token: string,
    post : PostData
) => {
  try {
    const response = await fetch('http://localhost:3000/post/add-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({post}),

    });
    if (!response.ok) {
      return false;
    }
    const data = await response.json()
    return data.data ?? {}
  } catch (e) {
    console.log(e);
    return false;
  }
}

export const deletePost = async(
    token: string,
    postId : string
) => {
  try {
    const response = await fetch('http://localhost:3000/post/delete-post/'+postId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },

    });
    if (!response.ok) {
      return false;
    }
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

