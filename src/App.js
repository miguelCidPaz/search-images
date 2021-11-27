import Header from "./components/Header"
import { useState } from 'react'
import Gallery from "./components/Gallery"
import ApiKey from './keys/ApiKey'

const App = () => {
    const [photos, setPhotos] = useState([])

    const setNewUrl = async (str) => {
        const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&&query=${str}`, {
            headers: {
                'Authorization': `Client-ID ${ApiKey}`
            }
        })
        const data = await response.json()
        setPhotos(data.results)
    }

    return (
        <>
            <Header setNewUrl={setNewUrl} />
            {photos.length > 1 ? <Gallery imgs={photos} /> : null}
        </>
    )
}

export default App