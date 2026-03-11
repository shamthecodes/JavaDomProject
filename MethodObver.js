const readline = require("readline");

/* Login Class */

class UserLogin {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }

  displayDetails() {
    console.log("Login user:", this.userName);
  }
}

/* Parent Class */

class Application {
  constructor(login) {
    this.login = login;
  }

  scroll() {
    console.log("Ready to scroll the application");
  }
}

/* Child Class 1 */

class Instagram extends Application {
  constructor(login, userId) {
    super(login);
    this.userId = userId;
  }

  scroll() {
    super.scroll();
    console.log("Scrolling Instagram reels and posts");
  }

  open() {
    this.login.displayDetails();
    console.log("Instagram ID:", this.userId);
  }
}

/* Child Class 2 */

class FlipKart extends Application {
  constructor(login, wallet) {
    super(login);
    this.wallet = wallet;
  }

  scroll() {
    super.scroll();
    console.log("Scrolling Flipkart products");
  }

  addToCart() {
    console.log("Wallet balance:", this.wallet);
  }
}

/* Controller */

class MainUser {
  start(choice) {
    let login = new UserLogin("sham", "1234");

    if (choice == 1) {
      let insta = new Instagram(login, "sham_insta");

      insta.scroll();
      insta.open();
    } else if (choice == 2) {
      let flip = new FlipKart(login, 2500);

      flip.scroll();
      flip.addToCart();
    } else {
      console.log("Invalid choice");
    }
  }
}

/* User Input */

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter choice 1:Instagram 2:Flipkart : ", function (choice) {
  let user = new MainUser();

  user.start(parseInt(choice));

  rl.close();
});
