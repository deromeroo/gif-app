export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=UN2aOPVs7zJ73KA67kM1EEz2tCOCR0uz&q=${category}&limit=20`

  const resp = await fetch(url)
  const { data } = await resp.json()
  const gifs = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url
  }))

  return gifs
}
