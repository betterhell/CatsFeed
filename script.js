const placeForCards = document.querySelector(".section");

const cards = [
  {
    topDesctription: "Сказачное заморское яство",
    header: "Нямушка",
    postHeader: "c фуа-гра",
    gifts: `<span> 10 </span> порций <br /> мыш в подарок`,
    weight: `<h1>0,5</h1><p>кг</p>`,
    postCards: "Вкусняха с фуа-гра в подливе.",
  },
  {
    topDesctription: "Сказачное заморское яство",
    header: "Нямушка",
    postHeader: "c рыбой",
    gifts: `<span> 40 </span> порций <br /> 2 мыши в подарок`,
    weight: `<h1>2</h1><p>кг</p>`,
    postCards: "Головы щучьи с чесноком да свежайшая сёмгушка.",
  },
  {
    topDesctription: "Сказачное заморское яство",
    header: "Нямушка",
    postHeader: "c курой",
    gifts: `<span> 100 </span> порций <br /> 5 мышей в подарок`,
    weight: `<h1>5</h1><p>кг</p>`,
    postCards: "Вкуснейшая курочка в свежих овощах.",
  },
];

const loadCards = () => {
  cards.forEach((card) => [
    (placeForCards.innerHTML += `<div class="card section__card">
      <div class="card__innderInfo">
        <p class="card__description">Сказачное заморское яство</p>
        <h2 class="card__header">${card.header}</h2>
        <h3 class="card__postHeader">${card.postHeader}</h3>
        <p class="card__gifts">
          ${card.gifts}
        </p>
      </div>
      <div class="card__weight">
        ${card.weight}
      </div>
      <div class="card__background">
        <img
          class="card__img"
          src="/images/background/Photo_default.png"
          alt=""
        />
      </div>
      <p class="card__postCardInfo">
          ${card.postCards}
      </p>`),
  ]);
};

loadCards();

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
        cardImgDefault.setAttribute(
          "src",
          "images/background/Photo_selected.png"
        );
        postDescription.innerHTML = `В корзине!`;
        weight.style.backgroundColor = "rgb(231, 45, 135)";
      } else if ((weight.style.backgroundColor = "rgb(231, 45, 135)")) {
        cardImgDefault.setAttribute(
          "src",
          "images/background/Photo_default.png"
        );
        postDescription.innerHTML = `Чего сидишь? Порадуй котэ, <a href="##">купи.</a>`;
        weight.style.backgroundColor = "rgb(73, 179, 236)";
      }
    });
  });
};

likeCards();
