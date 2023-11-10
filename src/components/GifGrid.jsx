import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'

// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category)

  return (
    <section className='section'>

        <div className='header-section'>
          <h3>{category}</h3>
          {
            isLoading && <span className="loader"></span>
          }
        </div>

        <div className='card-grid'>
          {
            images.map((image) => (
              <GifItem key={image.id} {...image}/>
            ))
          }
        </div>
    </section>
  )
}
