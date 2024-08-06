// dishes
interface Dish {
  name: string;
  sayEnjoy(): string;
}

class ChineseDish implements Dish {
  public name = "Stir fry tofu";
  public sayEnjoy(): string {
    return "Qǐng xiǎngyòng";
  }
}

class ItalianDish implements Dish {
  public name = "Spaghetti bolognese";
  public sayEnjoy(): string {
    return "Buon appetito";
  }
}

// restaurants
abstract class Restaurant {
  public abstract prepareMeal(): Dish;

  public serveMeal(): string {
    const meal = this.prepareMeal();
    return `Please enjoy ${meal.name}, ${meal.sayEnjoy()}`;
  }
}

class ChineseRestaurant extends Restaurant {
  public prepareMeal(): Dish {
    console.log("Wok and fire!");
    return new ChineseDish();
  }
}

class ItalianRestaurant extends Restaurant {
  public prepareMeal(): Dish {
    console.log("Tomatoes rules!");
    return new ItalianDish();
  }
}

// -----------------------------------------------------------------------------
// CLIENT CODE

const clientUsesFunction = (placeToEat: Restaurant) => console.log(placeToEat.serveMeal());

// clientUsesFunction(new Restaurant());
clientUsesFunction(new ChineseRestaurant());
clientUsesFunction(new ItalianRestaurant());
