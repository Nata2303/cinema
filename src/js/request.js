// export function fetchBreeds() {
//   const url =
//     'https://api.themoviedb.org/3/search/movie?query=Batman&callback=test';
//   const options = {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGFlZjVlODMzOTZmYmViNmY2MmU4NmNmZmViYjk4MSIsInN1YiI6IjY0ODIzMjcxZDJiMjA5MDBlYmJmM2Y5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO3Y1F5-wzOGPgGegX0KKGPSKeCvq8s50R1CV3r3ln0',
//     },
//   };

//   return fetch(url, options)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to fetch breeds');
//       }
//       return response.json();
//     })
//     .catch(error => {
//       throw new Error('Failed to fetch breeds');
//     });
// }

// import { api } from "./api";

// export async function upcomingMovieRequest() {
//     try {
//         const response = await api.get('/discover/movie?api_key=5e7ddcd8633dca4662efc3d617b08e4a&language=uk&sort_by=popularity.desc');
//         return response.data;
//     } catch (err) {
//         console.log(err);
//     }
// }

import axios from 'axios';

export async function upcomingMovieRequest(){
    try {
        return await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=5e7ddcd8633dca4662efc3d617b08e4a&language=uk&sort_by=popularity.desc')
    } catch (err){
        console.error(err.message);
    }
}