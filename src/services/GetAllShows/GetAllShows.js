const BASE_URL = 'https://kitsu.io/api/edge/anime?filter[text]=';

async function GetAllShows(query) {
  console.log('KITSU SEARCH IS CALLED')
  console.log(query)
  try {
    let results = await fetch(`${BASE_URL}` + query, {mode: "cors"})
      .then(res => res.json())
      .then(data => data);

    let revisedResults = results.data.map(anime => {
      return {
        name: anime.attributes.slug,
        synopsis: anime.attributes.synopsis,
        image: anime.attributes.posterImage.small,
        id: anime.id
      }
    })
    console.log(revisedResults);
    return revisedResults;
  }
  catch(err) {
    console.log(err)
  }
}

export default GetAllShows;