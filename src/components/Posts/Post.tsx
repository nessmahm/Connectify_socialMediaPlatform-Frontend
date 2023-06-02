import { useContext } from 'react';
import React, {useState} from 'react'
import { AuthContext } from '../../context/context';
import { AuthContextType } from '../../context/context';
import PostModal from "../modals/PostModal";
import { ViewStatusType } from '../../pages/Sign/SignUp';
import UserImage from "../UserImage";
import LocalSeeTwoToneIcon from '@mui/icons-material/LocalSeeTwoTone';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import GifBoxIcon from '@mui/icons-material/GifBox';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import {Button} from "@mui/joy";
import { addPost } from './handlePostClick';

export type PostData = {
    file?: File;
    content?: string;
}
function Post() {
    const [postModal, setPostModal] = useState(false);
    const [post,setPost] = useState<PostData>({});
    const [status, setStatus] = useState<ViewStatusType>();
    const [errorMessage, setErrorMessage] = useState<string>();
    const { token } = useContext<AuthContextType>(AuthContext);
    console.log("postdata",post)

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name !== 'content') {
            setPost((prevPost) => ({
                ...prevPost,
                [name]: Array.from(files),
            }));
        } else {
            setPost((prevPost) => ({
                ...prevPost,
                [name]: value,
            }));
        }
    };
        const submitPost = () => {
            addPost(
              post,
              setStatus,
              setErrorMessage,
              token,
            )
    }

    return (
        <div>
            <div className={"post"}>

                <div className={"header"}>
                    <UserImage/>

                    <textarea name={"content"}
                              placeholder={" Share what's on your mind.. "}
                              onChange={handleChange}></textarea>

                    </div>

                <div className={"footer"}>
                    <div>
                        <div className={"icon"}>
                            <LocalSeeTwoToneIcon color={'disabled'}/>
                            <input type="file" name="image"  multiple onChange={handleChange} />

                        </div>

                        <div className={"icon"}>
                            <VideoCameraBackIcon color={'disabled'}/>
                            <input type="file" name="video" multiple onChange={handleChange} />

                        </div>

                        <div className={"icon"}>

                            <FilePresentIcon color={'disabled'}/>
                            <input type="file" name="file"  multiple onChange={handleChange} />

                        </div>
                        <div className={"icon"}>
                        <GifBoxIcon color={'disabled'}/>

                        </div>

                    </div>

                   <Button
                     disabled={!post.content && !post.file}
                     className="post-btn"
                     onClick={submitPost} variant="plain" >Post</Button>


                </div>


            </div>

            {postModal && <PostModal/>}

        </div>

    )
}

export default Post
