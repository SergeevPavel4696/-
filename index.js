//Кнопка старта.
const startButton = document.getElementById("start");
//Элементы на поле.
const el1 = {el: document.getElementById("1"), id: 1};
const el2 = {el: document.getElementById("2"), id: 2};
const el3 = {el: document.getElementById("3"), id: 3};
const el4 = {el: document.getElementById("4"), id: 4};
const el5 = {el: document.getElementById("5"), id: 5};
const el6 = {el: document.getElementById("6"), id: 6};
const el7 = {el: document.getElementById("7"), id: 7};
const el8 = {el: document.getElementById("8"), id: 8};
const el9 = {el: document.getElementById("9"), id: 9};
const el10 = {el: document.getElementById("10"), id: 10};
const el11 = {el: document.getElementById("11"), id: 11};
const el12 = {el: document.getElementById("12"), id: 12};
const el13 = {el: document.getElementById("13"), id: 13};
const el14 = {el: document.getElementById("14"), id: 14};
const el15 = {el: document.getElementById("15"), id: 15};
//Позиции на поле.
const poz = {
    "0": {x: 0, y: 0}, "10": {x: 100, y: 0}, "20": {x: 200, y: 0}, "30": {x: 300, y: 0},
    "1": {x: 0, y: 100}, "11": {x: 100, y: 100}, "21": {x: 200, y: 100}, "31": {x: 300, y: 100},
    "2": {x: 0, y: 200}, "12": {x: 100, y: 200}, "22": {x: 200, y: 200}, "32": {x: 300, y: 200},
    "3": {x: 0, y: 300}, "13": {x: 100, y: 300}, "23": {x: 200, y: 300}, "33": {x: 300, y: 300}
};
//Карта элементов
let els = {};
//Пустое место на поле.
let empty;


//Сохранить эелемент в хранилище.
function setElInStorage(el, p) {
    //Сохранить позицию элемента по id в хранилище.
    localStorage.setItem(String(100 * el), p);
    //Сохранить id элемента по позиции в хранилище.
    localStorage.setItem(p, String(100 * el));
}

//Разместить элемент на поле.
function setElOnField(el, p) {
    if (el) {
        //Разместить элемент на поле по координатам.
        el.el.setAttribute("style", "left: " + poz[p].x + "px; top: " + poz[p].y + "px;");
        //Сохранить элемент в хранилище.
        setElInStorage(el.id, p);
    } else {
        //Сохранить пустой элемент в хранилище.
        setElInStorage(16, p);
    }
}

//Получить позицию элемента из хранилища по id или id элемента по позиции.
function getFromStorage(el) {
    return localStorage.getItem(el);
}

//Задать массив элементов при новой игре.
function setElArrayForNewGame() {
    //Массив элементов по возрастанию id.
    const temp1 = [el1, el2, el3, el4, el5, el6, el7, el8, el9, el10, el11, el12, el13, el14, el15];
    //Массив для элементов в произвольном расположении.
    const temp2 = [];
    //Цикл для произвольного расположения элементов.
    for (let i = 0; i < 15; i++) {
        const n = Math.floor(Math.random() * temp1.length);
        temp2[i] = temp1[n];
        temp1.splice(n, 1);
    }
    //Задать в массив элементы в произвольном расположении.
    els["0"] = temp2[0];
    els["10"] = temp2[1];
    els["20"] = temp2[2];
    els["30"] = temp2[3];
    els["1"] = temp2[4];
    els["11"] = temp2[5];
    els["21"] = temp2[6];
    els["31"] = temp2[7];
    els["2"] = temp2[8];
    els["12"] = temp2[9];
    els["22"] = temp2[10];
    els["32"] = temp2[11];
    els["3"] = temp2[12];
    els["13"] = temp2[13];
    els["23"] = temp2[14];
    els["33"] = null;
}

//Задать массив элементов при старой игре.
function setElArrayForOldGame() {
    //Массив элементов по возрастанию id.
    const temp1 = [el1, el2, el3, el4, el5, el6, el7, el8, el9, el10, el11, el12, el13, el14, el15, null];
    //Загрузка id элеметов из хранилища по позициям.
    for (let i = 0; i < 15; i++) {
        els[getFromStorage(String(100 * (i + 1)))] = temp1[i];
    }
}

//Задать позиции элементов на поле по позициям.
function setElPosForGame() {
    setElOnField(els["0"], "0");
    setElOnField(els["10"], "10");
    setElOnField(els["20"], "20");
    setElOnField(els["30"], "30");
    setElOnField(els["1"], "1");
    setElOnField(els["11"], "11");
    setElOnField(els["21"], "21");
    setElOnField(els["31"], "31");
    setElOnField(els["2"], "2");
    setElOnField(els["12"], "12");
    setElOnField(els["22"], "22");
    setElOnField(els["32"], "32");
    setElOnField(els["3"], "3");
    setElOnField(els["13"], "13");
    setElOnField(els["23"], "23");
    setElOnField(els["33"], "33");
}

//Проверка правильности последовательности.
function isOk() {
    if (
        Number(empty) === 33 &&
        els["23"] !== null && Number(els["23"].id) === 15 &&
        els["13"] !== null && Number(els["13"].id) === 14 &&
        els["3"] !== null && Number(els["3"].id) === 13 &&
        els["32"] !== null && Number(els["32"].id) === 12 &&
        els["22"] !== null && Number(els["22"].id) === 11 &&
        els["12"] !== null && Number(els["12"].id) === 10 &&
        els["2"] !== null && Number(els["2"].id) === 9 &&
        els["31"] !== null && Number(els["31"].id) === 8 &&
        els["21"] !== null && Number(els["21"].id) === 7 &&
        els["11"] !== null && Number(els["11"].id) === 6 &&
        els["1"] !== null && Number(els["1"].id) === 5 &&
        els["30"] !== null && Number(els["30"].id) === 4 &&
        els["20"] !== null && Number(els["20"].id) === 3 &&
        els["10"] !== null && Number(els["10"].id) === 2 &&
        els["0"] !== null && Number(els["0"].id) === 1) {
        //Отключить обработчики событий кнопкам стрелок.
        window.removeEventListener("keydown", go);
    }
}

//Подключить обработчики событий кнопкам стрелок.
function go(evt) {
    function changePos(newEmpty) {
        //Задать смещаемому элементу в хранилище позицию пустого элемента.
        setElOnField(els[String(newEmpty)], String(empty));
        //Задать смещаемому элементу в массиве позицию пустого элемента.
        els[String(empty)] = els[String(newEmpty)];
        //Задать пустому элементу в массиве позицию смещаемого элемента.
        els[String(newEmpty)] = null;
        //Задать новую позицию пустого элемента.
        empty = newEmpty;
        //Задать пустому элементу в хранилище позицию смещаемого элемента.
        setElOnField(null, String(empty));
        //Проверить правильность последовательности элементов.
        isOk();
    }

    //Затать действие клику по стрелке вправо.
    if (evt.key === "ArrowRight" && Math.floor(empty / 10) !== 0) {
        changePos(empty - 10);
    }
    //Затать действие клику по стрелке вниз.
    if (evt.key === "ArrowDown" && empty % 10 !== 0) {
        changePos(empty - 1);
    }
    //Затать действие клику по стрелке влево.
    if (evt.key === "ArrowLeft" && Math.floor(empty / 10) !== 3) {
        changePos(empty + 10);
    }
    //Затать действие клику по стрелке вверх.
    if (evt.key === "ArrowUp" && empty % 10 !== 3) {
        changePos(empty + 1);
    }
}

//Начать новую игру нажатием кнопки старт.
function startNewGame() {
    //Подключить обработчик событий к кнопке "Старт".
    startButton.addEventListener("click", function () {
        //Задать массив элементов при новой игре.
        setElArrayForNewGame();
        //Задать позиции элементов на поле по позициям.
        setElPosForGame();
        //Задать позицию пустого элемента.
        empty = 33;
        //Подключить обработчик событий стрелкам.
        window.addEventListener("keydown", go);
    })
}

//Продолжить игру при загрузке страницы.
function startOldGame() {
    if (getFromStorage("1600")) {
        //Задать массив элементов при старой игре.
        setElArrayForOldGame();
        //Задать позиции элементов на поле по позициям.
        setElPosForGame();
        //Задать позицию пустого элемента.
        empty = Number(getFromStorage("1600"));
        //Подключить обработчик событий стрелкам.
        window.addEventListener("keydown", go);
    }
}

//Начать новую игру.
startOldGame();
//Продолжить старую игру.
startNewGame();
//Проверить правильность последовательности элементов.
isOk();
