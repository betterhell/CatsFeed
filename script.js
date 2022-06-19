const defaultWeight = document.querySelectorAll(".card__weight");

defaultWeight.forEach((weight) => {
  weight.style.backgroundColor = "rgb(73, 179, 236)";
});

const likeCards = () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const cardImgDefault = card.querySelector(".card__img");
    const weight = card.querySelector(".card__weight");
    const postDescription = card.querySelector(".card__postCardInfo");

    card.addEventListener("click", () => {
      if (weight.style.backgroundColor === "rgb(73, 179, 236)") {
        cardImgDefault.setAttribute("src", "../img/Photo_selected.png");
        postDescription.innerHTML = `В корзине!`;
        weight.style.backgroundColor = "rgb(231, 45, 135)";
      } else if ((weight.style.backgroundColor = "rgb(231, 45, 135)")) {
        cardImgDefault.setAttribute("src", "../img/Photo_default.png");
        postDescription.innerHTML = `Чего сидишь? Порадуй котэ, <a href="##">купи.</a>`;
        weight.style.backgroundColor = "rgb(73, 179, 236)";
      }
    });
  });
};

likeCards();
