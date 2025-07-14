const cars = [
  {
    id: "bmw",
    src: "images/car-1.jpg",
    amount: "R561 /rent per day",
    type: "BMW",
    year: "2006",
    transmission: "Automatic",
    fuel: "Premium Gasoline"
  },
  {
    id: "toyota-fortuner",
    src: "images/car-2.jpg",
    amount: "R690 /rent per day",
    type: "TOYOTA FORTUNER",
    year: "2009",
    transmission: "Manual",
    fuel: "93 Octane"
  },
  {
    id: "ford",
    src: "images/car-3.jpg",
    amount: "R680 /rent per day",
    type: "FORD",
    year: "2000",
    transmission: "Automatic",
    fuel: "Regular Unleaded Gasoline"
  },
  {
    id: "hyndai",
    src: "images/car-4.jpg",
    amount: "R491 /rent per day",
    type: "HYNDAI",
    year: "2002",
    transmission: "Automatic",
    fuel: "Diesel/Petrol"
  },
  {
    id: "volkswagen-polo",
    src: "images/car-5.jpg",
    amount: "R420 /rent per day",
    type: "VOLKSWAGEN-POLO",
    year: "2010",
    transmission: "Manual",
    fuel: "Premium Unleaded Petrol"
  }
];

// Function to update car details
function updateCarDetails(car) {
  document.getElementById("image").src = car.src;
  document.getElementById("amount").innerHTML = car.amount;
  document.getElementById("carType").innerHTML = car.type;
  document.getElementById("year").innerHTML = car.year;
  document.getElementById("transmission").innerHTML = car.transmission;
  document.getElementById("fuel").innerHTML = car.fuel;
}

cars.forEach(car => {
  const element = document.getElementById(car.id);
  if (element) {
    element.addEventListener("click", () => {
      updateCarDetails(car);
    });
  }
});
