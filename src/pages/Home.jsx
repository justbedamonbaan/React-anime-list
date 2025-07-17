import AnimeCard from "../components/AnimeCard"
import { useState, useEffect } from "react"
import { searchAnimes, getPopularAnime } from "../services/api"
import '../css/Home.css'

function Home () {
    const [searchQuery, setSearchQuery] = useState("")
    const [animes, setAnimes] = useState([])
    const [error, setError] = useState([null])
    const [loading, setLoading] = useState([true])

    useEffect(() => {
        const loadPopularAnimes = async () => {
            try{
                const popularAnimes = await getPopularAnime()
                setAnimes(popularAnimes)
            }   catch(err) {
                console.log(err)
                setError("Failed to load animes")
            }
            finally {
                setLoading(false)
            }
        }   
        loadPopularAnimes()
    }, [])
    
    const handleSearch = async (e) => {
        e.preventDefault()
        if(!searchQuery.trim()) return
        if (loading) return
        
        setLoading(true)
        try {
            const searchResults = await searchAnimes(searchQuery)
            setAnimes(searchResults)
            setError(null)
        }   catch (err) {
            console.log(err)
            setError("failed to search animes")
        } finally {
            setLoading(false)
        }
    };


    return(
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text"
                    placeholder="Search for animes..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                <button type="submit" className="search-button">Search</button>
            </form> 

            {error && <div className="error-message">{error}</div>}

            {loading ? <div className="loading">Loading...</div> : <div className="anime-grid">
                {animes.map((anime) => (<AnimeCard anime={anime} key={anime.id}/>)
            )}
            </div>}
        </div>
    )
}

export default Home;