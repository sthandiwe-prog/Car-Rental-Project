const logIn = document.getElementById("user-log-in-button");
logIn.addEventListener("click", () => {
  document.getElementById("poped-up-content-log-in").style.display = "flex";
});

const signUp = document.getElementById("user-sign-up-button");
signUp.addEventListener("click", () => {
  document.getElementById("poped-up-content-sign-up").style.display = "flex";
});

const removeLogIn = document.getElementById("log-in-closing-icon");
removeLogIn.addEventListener("click", () => {
  document.getElementById("poped-up-content-log-in").style.display = "none";
});

const removeSignUp = document.getElementById("sign-up-closing-icon");
removeSignUp.addEventListener("click", () => {
  document.getElementById("poped-up-content-sign-up").style.display = "none";
});

const modelOne = document.getElementById("bmw");
modelOne.addEventListener("click", () => {
  let model = document.getElementById("image");
  model.src = "car-1.jpg";
  let amount = document.getElementById("amount");
  amount.innerHTML = "R561 /rent per day";
  let carType = document.getElementById("carType");
  carType.innerHTML = "BMW";
  let year = document.getElementById("year");
  year.innerHTML = "2006";
  let transmission = document.getElementById("transmission");
  transmission.innerHTML = "Automatic";
  let fuel = document.getElementById("fuel");
  fuel.innerHTML = "Premium Gasoline ";
});

const modelTwo = document.getElementById("toyota-fortuner");
modelTwo.addEventListener("click", () => {
  let model = document.getElementById("image");
  model.src = "car-2.jpg";
  let amount = document.getElementById("amount");
  amount.innerHTML = "R690 /rent per day";
  let carType = document.getElementById("carType");
  carType.innerHTML = "TOYOTA FORTUNER";
  let year = document.getElementById("year");
  year.innerHTML = "2009";
  let transmission = document.getElementById("transmission");
  transmission.innerHTML = "Manual";
  let fuel = document.getElementById("fuel");
  fuel.innerHTML = "93 Octane";
});

const modelThree = document.getElementById("ford");
modelThree.addEventListener("click", () => {
  let model = document.getElementById("image");
  model.src = "car-3.jpg";
  let amount = document.getElementById("amount");
  amount.innerHTML = "R680 /rent per day";
  let carType = document.getElementById("carType");
  carType.innerHTML = "FORD";
  let year = document.getElementById("year");
  year.innerHTML = "2000";
  let transmission = document.getElementById("transmission");
  transmission.innerHTML = "Automatic";
  let fuel = document.getElementById("fuel");
  fuel.innerHTML = "Regular Unleaded Gasoline";
});

const modelFour = document.getElementById("hyndai");
modelFour.addEventListener("click", () => {
  let model = document.getElementById("image");
  model.src = "car-4.jpg";
  let amount = document.getElementById("amount");
  amount.innerHTML = "R491 /rent per day";
  let carType = document.getElementById("carType");
  carType.innerHTML = "HYNDAI";
  let year = document.getElementById("year");
  year.innerHTML = "2002";
  let transmission = document.getElementById("transmission");
  transmission.innerHTML = "Automatic";
  let fuel = document.getElementById("fuel");
  fuel.innerHTML = "Diesel/Petrol";
});

const modelFive = document.getElementById("volkswagen-polo");
modelFive.addEventListener("click", () => {
  let model = document.getElementById("image");
  model.src = "car-5.jpg";
  let amount = document.getElementById("amount");
  amount.innerHTML = "R420 /rent per day";
  let carType = document.getElementById("carType");
  carType.innerHTML = "VOLKSWAGEN-POLO";
  let year = document.getElementById("year");
  year.innerHTML = "2010";
  let transmission = document.getElementById("transmission");
  transmission.innerHTML = "Manual";
  let fuel = document.getElementById("fuel");
  fuel.innerHTML = "Premium Unleaded Petrol";
});
