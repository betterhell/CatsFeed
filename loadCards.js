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
    gifts: `<span> 40 </span> порций <br /> <span> 2 </span> мыши в подарок`,
    weight: `<h1>2</h1><p>кг</p>`,
    postCards: "Головы щучьи с чесноком да свежайшая сёмгушка.",
  },
  {
    topDesctription: "Сказачное заморское яство",
    header: "Нямушка",
    postHeader: "c курой",
    gifts: `<span> 100 </span> порций <br /> <span> 5 </span> мышей в подарок`,
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
          src="./img/Photo_default.png"
          alt=""
        />
      </div>
      <p class="card__postCardInfo">
          ${card.postCards}
      </p>`),
  ]);
};

loadCards();
