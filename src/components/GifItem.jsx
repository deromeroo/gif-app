// eslint-disable-next-line react/prop-types
export const GifItem = ({ id, title, url }) => {
  return (
    <div key={id} className="card">
        <img src={url} alt={title} />
    </div>
  )
}
