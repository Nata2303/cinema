import { upcomingMovieRequest } from "./request";
// import Notiflix from 'notiflix';
// import { createMarkup } from "./createMarkup";

// const box = document.querySelector(".upcom-js-list");

upcomingMovieRequest();

// export async function upcomingMovie() {
//     try {
//         upcomingMovieRequest()
//             .then(data => {
//                 console.log(data);
//                 if (data.length === 0 || data.length === undefined) {
//                    console.log('0');
//                     return
//                 }
//                 console.log(data);
//             })
//             .catch(err => console.log(err));
//     } catch (err) {
//         console.log(err);
//     }
// }