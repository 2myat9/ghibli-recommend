const GHIBLI_URL = "https://ghibliapi.herokuapp.com/films";

const film = document.querySelector(".welcome-msg");
const filmDescription = document.querySelector(".film-description");
const filmImage = document.querySelector(".film-image");
const filmMeta = document.querySelector(".film-meta");
const descriptionContainer = document.querySelector(".description-container");
let previousNum = null;

const generateUniqueRandom = (length) => {
  const randomNum = Math.floor(Math.random() * (length + 1));

  if (previousNum === randomNum) {
    generateUniqueRandom();
  } else {
    previousNum = randomNum;
    return randomNum;
  }
};

const addFilm = () => {
  const promise = fetch(GHIBLI_URL);
  promise
    .then((response) => {
      const processedResponse = response.json();
      return processedResponse;
    })
    .then((processedResponse) => {
      uniqueRandom = generateUniqueRandom(processedResponse.length);

      const randomFilm = processedResponse[uniqueRandom];
      film.innerText = randomFilm.title;
      filmMeta.innerText = `Directed by: ${randomFilm.director} \n Release Date: ${randomFilm.release_date} \n`;

      // remove and add animation classes again with delay (repaint)
      descriptionContainer.classList.remove("p-slide");
      film.classList.remove("slide-up");
      filmImage.classList.remove("image-slide");

      setTimeout(() => {
        filmDescription.innerText = randomFilm.description;
        descriptionContainer.classList.add("p-slide");
        film.classList.add("slide-up");
        filmImage.classList.add("image-slide");
      }, 50);

      // grab image
      filmImage.src = getImage(randomFilm);

      function getImage(randomFilm) {
        switch (randomFilm.title) {
          case "My Neighbor Totoro":
            return "https://lwlies.com/wp-content/uploads/2016/06/my_neighbor_totoro_poster-900x0-c-default.jpg";
          case "Princess Mononoke":
            return "https://lwlies.com/wp-content/uploads/2016/06/princess_mononoke_poster-900x0-c-default.jpg";
          case "Castle in the Sky":
            return "https://lwlies.com/wp-content/uploads/2016/06/600full-castle-in-the-sky-poster-900x0-c-default.jpg";
          case "Grave of the Fireflies":
            return "https://i.pinimg.com/originals/5b/8c/97/5b8c97cdc96b6e6701d9b3de48afd921.jpg";
          case "Kiki's Delivery Service":
            return "https://i.pinimg.com/originals/9d/5c/b0/9d5cb00ea0a430bb2c537b83f5df88cc.jpg";
          case "Only Yesterday":
            return "https://m.media-amazon.com/images/I/71zUP7v2t5L._AC_SY879_.jpg";
          case "Porco Rosso":
            return "https://lwlies.com/wp-content/uploads/2016/06/poster1-900x0-c-default.jpg";
          case "Pom Poko":
            return "https://cdn.traileraddict.com/content/unknown/pom_poko.jpg";
          case "Whisper of the Heart":
            return "https://m.media-amazon.com/images/M/MV5BZDg0MWNmNjktMGEwZC00ZDlmLWI1MTUtMDBmNjQzMWM2NjBjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg";
          case "My Neighbors the Yamadas":
            return "https://static.wikia.nocookie.net/dubbing9585/images/f/fa/My-neighbors-the-yamadas-poster.jpg/revision/latest?cb=20171223052252";
          case "Spirited Away":
            return "https://lwlies.com/wp-content/uploads/2016/06/Spirited-Away-movie-poster-1020340447-900x0-c-default.jpg";
          case "The Cat Returns":
            return "https://fesapusewebsite.blob.core.windows.net/fathom/catreturns-1000x1480-r2-e2481ba29124ec1d9943105ae36a66ff.jpg";
          case "Howl's Moving Castle":
            return "https://lwlies.com/wp-content/uploads/2016/06/howls-moving-castle-poster-900x0-c-default.png";
          case "Tales from Earthsea":
            return "https://m.media-amazon.com/images/M/MV5BZGFlN2FhYTktZGYzNi00MzllLWFlOTAtY2ExNjRjZjhkZWM2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg";
          case "Ponyo":
            return "https://lwlies.com/wp-content/uploads/2016/06/ponyo-on-the-cliff-movie-poster-2008-1020417340-900x0-c-default.jpg";
          case "Arrietty":
            return "https://m.media-amazon.com/images/M/MV5BZDY3ZGI0ZDAtMThlNy00MzAxLTg4YjAtNjkwYTkxNmQ4MjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg";
          case "From Up on Poppy Hill":
            return "https://images-na.ssl-images-amazon.com/images/I/81JVKziDNAL._SL1500_.jpg";
          case "The Wind Rises":
            return "https://lwlies.com/wp-content/uploads/2016/06/TheWindRisesPoster-900x0-c-default.jpg";
          case "The Tale of the Princess Kaguya":
            return "https://lwlies.com/wp-content/uploads/2016/06/ee80632a9278d3e1f6aae9f8cc9b509a-900x0-c-default.jpg";
          case "When Marnie Was There":
            return "https://lwlies.com/wp-content/uploads/2016/06/when-marnie-was-there-japanese-poster-900x0-c-default.jpg";
        }
      }
    });
};

const button = document.querySelector(".generate-button");

button.addEventListener("click", addFilm);
