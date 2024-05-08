// let h2 = document.querySelector("h2");
// // h2.innerText = "<h1>Ovo je JS kurs!</h1>";
// h2.innerHTML = "<h1>Ovo je JS kurs!</h1>";

// h2.id = "tica";

// h2.classList = "active";

//TASK 1: Dodati 5 elemenata u UL
// let lista = document.querySelectorAll("li");

// lista.forEach((list, index) => {
//   let randomColor = ["blue", "red", "green", "yellow", "orange"];
//   list.innerText = `Tekst ${index + 1}`;
//   list.style.color = randomColor[index];
// });

//Event
// let btn = document.querySelector("button");

// btn.addEventListener("dogadjaj", "funkcija");
// btn.addEventListener('click', function () {

// });

//TOGGLE MENU
// let btn = document.querySelector("button");
// let menuDiv = document.querySelector("div");
// let closeBtn = document.querySelector("#close");

// btn.addEventListener("click", function () {
//   menuDiv.classList.add("toggleActive");
// });

// closeBtn.addEventListener("click", function () {
//   menuDiv.classList.remove("toggleActive");
// });

// let lists = document.querySelectorAll("li");

// lists.forEach((list) => {
//   list.addEventListener("click", colorLi);
// });

// function colorLi() {
//   let randomColor = ["blue", "red", "green", "yellow", "orange"];
//   this.style.backgroundColor = randomColor[this.id];
// }

// let newDiv = document.createElement("div");

// document.body.appendChild(newDiv);

// let commentsDiv = document.querySelector(".comments");

// let comments = [
//   {
//     id: 1,
//     title: "bla bla",
//   },
//   {
//     id: 2,
//     title: "React kurs",
//   },
//   {
//     id: 3,
//     title: "JS Kurs",
//   },
// ];

// //TODO: Svaki komentar ima strukturu <div>TEXT</div>

// //Hojsting je deklarisanje varijabli/podataka na vrhu da bi mogli da ih koristimo na dole

// displayComment();

// function displayComment() {
//   let commentText = "";

//   comments.forEach((comm) => {
//     commentText += `
//     <div>
//             <p>${comm.title}</p>
//         </div>
//         `;
//   });

//   //dodaj na stranicu sa innerHTML
//   commentsDiv.innerHTML = commentText;
// }

//TODO: Kreiraj dinamicnu klasu 'one' ili 'two'
//TODO Kreiramo jedan div i dodelimo tu klasu

// let klasa = 1 === 1 ? "one" : "two";

// let newDiv = document.createElement("div");

// let newP = document.createElement("p");
// newP.innerText = "Bravo za Kurs";

// newDiv.appendChild(newP);

// newDiv.className = klasa;

// document.body.appendChild(newDiv);

//EVENTI OPET
// let input = document.querySelectorAll("input");
// let btn = document.querySelector("button");

// let username = "";

// input.forEach((el) => {
//   el.addEventListener("input", function (event) {
//     // ako imamo direktno callBack funkciju u eventu, mi svakako uzimamo event i ako ga nismo dodali kao argument u nasoj funkciji
//     console.log(event.target.value);
//     console.log(event.target.name);

//     // let name = event.target.name;

//     // console.log({ name: event.target.value });
//   });
// });

// btn.addEventListener("click", function () {
//   //TODO Zelimo objekat sa username, lastname, id ????
//   console.log({ username, lastname: "Milenkovic", id: 2 });
// });
