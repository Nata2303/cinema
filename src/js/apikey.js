import { api } from './api';

// export async function libraryMovieQuery(id) {
//   try {
//     const response = await api.get(
//       `/movie/${id}?api_key=7f4ba582d55c3d33bf97672c5d45e075`
//     );
//     return response.data;
//   } catch (err) {
//     console.log(err);
//   }
// }

export async function upcomingMovieRequest() {
  try {
    const response = await api.get(
      '/movie/upcoming?api_key=7f4ba582d55c3d33bf97672c5d45e075'
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function upcomingMovieGenreRequest() {
  try {
    const response = await api.get(
      '/genre/movie/list?api_key=7f4ba582d55c3d33bf97672c5d45e075'
    );
    return response.data.genres;
  } catch (err) {
    console.log(err);
  }
}

export function fetchBreeds() {
  const url =
    'https://api.themoviedb.org/3/search/movie?query=Batman&callback=test';
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGFlZjVlODMzOTZmYmViNmY2MmU4NmNmZmViYjk4MSIsInN1YiI6IjY0ODIzMjcxZDJiMjA5MDBlYmJmM2Y5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO3Y1F5-wzOGPgGegX0KKGPSKeCvq8s50R1CV3r3ln0',
    },
  };

  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch breeds');
      }
      return response.json();
    })
    .catch(error => {
      throw new Error('Failed to fetch breeds');
    });
}
