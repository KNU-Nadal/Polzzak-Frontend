import { useState } from "react"
import { MdFileUpload } from "react-icons/md"
import styled from "styled-components"
import theme from "../styles/theme"
import axios from "axios"

const FileInputWrapper = styled.div`
    &>input{
        display: none;
    }
    &>label{
        display: flex;
        align-items: center;
        gap: ${({theme}) => theme.size.sm};
        padding: ${({theme}) => theme.size.sm};
        background-color: ${({theme}) => theme.color.green700};
        width: fit-content;
        border-radius: ${({theme}) => theme.size.sm};
        font-size: ${({theme}) => theme.fontSize.base};
        font-weight: 700;
        color: ${({theme}) => theme.color.bg};
        cursor: pointer;
    }
`

const FileInput = () => {
    return(
        <FileInputWrapper>
            <label for="file_upload">
                <MdFileUpload style={{fontSize: theme.fontSize.lg}}/>
                파일 업로드
            </label>
            <input id="file_upload" type="file" multiple="false"/>
        </FileInputWrapper>
    )
}

const useImageUpload = () => {
    const [isImageLoad, setIsImageLoad] = useState(false);
    const [imageId, setImageId] = useState(0);
    const [imageName, setImageName] = useState("");

    const handleChange = (e) => {
        console.log(e.target.files[0]);
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        setIsImageLoad(true);
        axios.post(import.meta.env.VITE_POLZZAK_API_URL + "/image",
            formData,
            {headers:{
                'Content-Type': 'multipart/form-data'
            }}
        )
        .then((response) => {
            setImageId(response.data.image_id);
            setImageName(response.data.image_name);
        })
    }


    const fileInputComponent = () => {
        if(!isImageLoad)
            return (
                <FileInputWrapper>
                    <label htmlFor="file_upload">
                        <MdFileUpload style={{fontSize: theme.fontSize.lg}}/>
                        이미지 업로드
                    </label>
                    <input onChange = {handleChange} id="file_upload" type="file"/>
                </FileInputWrapper>
            )
        else if(imageName != "")
            return(
                <img src={import.meta.env.VITE_POLZZAK_IMAGE_URL + "/images/" + imageName} />
            )
        else {
            return(
                <p>이미지 업로드 중...</p>
            )
        }
    }
    return [fileInputComponent, imageId];
}

export default useImageUpload;