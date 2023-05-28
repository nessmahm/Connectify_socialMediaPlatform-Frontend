import React, {useState} from 'react'
import PostModal from "../../modals/PostModal";
import UserImage from "../../components/UserImage";
import LocalSeeTwoToneIcon from '@mui/icons-material/LocalSeeTwoTone';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import GifBoxIcon from '@mui/icons-material/GifBox';
import FilePresentIcon from '@mui/icons-material/FilePresent';
function Post() {
    const [postModal, setPostModal] = useState(false);
    return (
        <div>
            <div className={"post"}>

                <div className={"header"}>
                    <UserImage/>

                    <textarea value={" Share what's on your mind.. "}> </textarea>

                    </div>

                <div className={"footer"}>
                    <div className={"icon"}>
                        <LocalSeeTwoToneIcon color={'disabled'}/>

                    </div>

                    <div className={"icon"}>
                        <VideoCameraBackIcon color={'disabled'}/>
                    </div>

                    <div className={"icon"}>
                        <FilePresentIcon color={'disabled'}/>
                    </div>
                    <div className={"icon"}>
                    <GifBoxIcon color={'disabled'}/>
                </div>


                </div>


            </div>

            {postModal && <PostModal/>}

        </div>

    )
}

export default Post
