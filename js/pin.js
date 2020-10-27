'use strict';
(function () {
  const LIB_SIZE = 8;

  const OFFSET_X = 200;
  const OFFSET_Y = 400;

  let libType = [`palace`, `flat`, `house`, `bungalow`];
  let libCheck = [`12:00`, `13:00`, `14:00`];
  let libFeatures = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];
  let libPhotos = [`http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`];

  const mapPins = document.querySelector(`.map__pins`);
  const pinTemplate = document.querySelector(`#pin`).content;
  const newItemPin = pinTemplate.querySelector(`.map__pin`);

  /**
   * Создаем массив случайных объектов.
   * @return {array} - Массив случайных объектов.
   */
  const createLib = (volume) => {
    let array = [];
    for (let i = 0; i < volume; i++) {
      array[i] = {'author': {}, 'offer': {}, 'location': {}};
      array[i].author = {
        'avatar': `../img/avatars/user0${i + 1}.png`
      };
      array[i].location = {
        'x': Math.ceil(Math.random() * 100),
        'y': Math.ceil(Math.random() * 100)
      };
      array[i].offer = {
        'title': ` `,
        'address': `${array[i].location[`x`]}, ${array[i].location[`y`]}`,
        'price': ` `,
        'type': window.data.randomParameter(libType),
        'rooms': ` `,
        'guests': ` `,
        'checkin': window.data.randomParameter(libCheck),
        'checkout': window.data.randomParameter(libCheck),
        'features': window.data.randomArray(libFeatures),
        'description': ` `,
        'photos': window.data.randomArray(libPhotos)
      };
    }
    return array;
  };

  /**
   * Копируем template и добавляем в разметку - в блок "map__pins".
   */
  const fillMap = () => {
    let mapPin = newItemPin.cloneNode(true);
    mapPins.appendChild(mapPin);
  };

  /**
   * Используя данные исходного массива и функцию добавления в разметку новых объектов, наполняем элементы стилями и пр. инфо.
   * @param {array} array - Исходный массив.
   */
  const createPins = (array) => {
    for (let i = 0; i < array.length; i++) {
      newItemPin.style = `left: ${array[i].location.x + OFFSET_X}px; top: ${array[i].location.y + OFFSET_Y}px`;
      let picture = newItemPin.querySelector(`img`);
      picture.src = `${array[i].author.avatar}`;
      picture.alt = `заголовок объявления`;
      fillMap();
    }
  };

  // let library = createLib(LIB_SIZE);
  // createPins(library);

  window.pin = {
    mainPin: mapPins.querySelector(`.map__pin--main`)
  };
}());
