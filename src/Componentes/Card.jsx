export default function Card({ video }) {
    const videoLink = video.link.slice(17);
    return (
        <div>
            <iframe width="930" height="523"
                src={`https://www.youtube.com/embed/"${atv.link.slice(17)}`}
                title="Vídeo"
                frameborder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
             <h5>{video.nome}</h5>
             <p>{video.descricao}</p>
        </div>
    )
}