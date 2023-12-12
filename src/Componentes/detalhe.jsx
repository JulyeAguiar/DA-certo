import { useParams } from "react-router-dom";
import Card from "./Card";
export default function Detalhe(){

    const {envia} = useParams()
    const listas = JSON.parse(localStorage.getItem("Listas"))
    const atv = listas.filter((video) => {
        if(video.envia == envia){
            return video
        }
        else{
            return null
        }
    })
    return(
        <Card video = {atv=[0]}></Card>
    )

}