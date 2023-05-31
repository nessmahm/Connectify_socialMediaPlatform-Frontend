import React, {useState} from 'react'
import PostModal from "../../modals/PostModal";
import UserImage from "../UserImage";
import LocalSeeTwoToneIcon from '@mui/icons-material/LocalSeeTwoTone';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import GifBoxIcon from '@mui/icons-material/GifBox';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import {Button} from "@mui/joy";

function Post() {
    const [postModal, setPostModal] = useState(false);
    const [post,setPost] = useState({});
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

                   <Button onClick={submitPost} variant="plain" color="primary">Post</Button>


                </div>


            </div>

            {postModal && <PostModal/>}

        </div>

    )
}

export default Post
