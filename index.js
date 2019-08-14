// ### Exercise 1
// Create a Movie class. Make all the following attributes: movieName, rating, and yearReleased.
// Create three different methods to change each attribute.
// Outside of the class create two different Movie objects, assign values to each object, and print them to the console.
class Movie {
  constructor(movieName, rating, yearReleased) {
    this.movieName = movieName;
    this.rating = rating;
    this.yearReleased = yearReleased;
  }
  newMovie() {
    this.movieName = prompt("Enter New movie name");
  }
  newRating() {
    this.rating = prompt("Enter New rating");
  }
  newYear() {
    this.yearReleased = prompt("Enter New year released");
  }
}

// you only created one instance of the class. The directions call for two.
let coolMovie = new Movie("Zombies", 7, 2018);
console.log(coolMovie);
coolMovie.newMovie();
coolMovie.newRating();
coolMovie.newYear();
console.log(coolMovie);

// ### Exercise 2
// Create a class Product that represents a product sold online. A product has a price, quantity and name.
//
// The class should have:
// 1. A constructor to hold the values.
// 2. A method ```printProduct()``` that prints a product in the following form: ```Banana, price 1.1, amount 13```
class Product {
  constructor(price, quantity, name){
    this.price = price;
    this.quantity = quantity;
    this.name = name;
  }
  printProduct() {
    console.log(this.name +  ", price " + this.price + " amount " + this.quantity);
  }
}

let newProduct = new Product(1.1, 13, "Banana");
console.log(newProduct);
