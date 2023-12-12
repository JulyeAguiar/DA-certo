import { Link } from "react-router-dom";

export default function Card({ video }) {
    console.log(video)
    const videoLink = video.link.slice(17);

    return (
        <div className="video">
            <iframe class="tela"
                width="400"
                height="250"
                src={`https://www.youtube.com/embed/${videoLink}`}
                title="Vídeo"
                frameborder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>

            <div class="video-info">
                <h3>{video.titulo}</h3>
                <p>{video.descricao}</p>
            </div>

            <Link to={`/detalhe/:identidade${video.identidade}`}>
                Detalhes...
            </Link>
        </div>
    )
}