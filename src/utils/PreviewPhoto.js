import {useState} from "react";

const PreviewPhoto = ({file}) => {
    const [preview, setPreview] = useState(null);
    if(file){
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            setPreview(reader.result);
        }
    }
    return(
        <>
            <img src={preview} alt={"#"} />
        </>
    )
}

export default PreviewPhoto