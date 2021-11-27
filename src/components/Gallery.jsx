import '../CSS/styles.css'

const Gallery = ({ imgs }) => {
    console.log(imgs)
    return (
        <div className='gallery'>
            {imgs.map(img => {
                return <Photo key={img.id} img={img} />
            })}
        </div>
    )
}

const Photo = ({ img }) => {
    console.log(img)
    return (
        <article>
            <img src={img.urls.regular} alt="#" />
            <p>{img.description} - {img.alt_description}</p>
        </article>
    )
}

export default Gallery