import '../css/AnimeCard.css'
function AnimeCard({anime}){
    

        function Like(){
            
        }
    return(
        <div className="anime-card">
            <div className="anime-image">
                <img src={anime.images.jpg.image_url} alt={anime.title}/>
                <div className="anime-overlay">
                    <button className="favorite-btn" onClick={Like}>
                        ♥
                    </button>
                </div>
            </div>
            <div className="anime-info">
                <h3>{anime.title}</h3>
                <p>{anime.year}</p>
            </div>
        </div>
    )
}

export default AnimeCard;