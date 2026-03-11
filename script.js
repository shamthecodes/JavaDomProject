class UserLogin {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login(username, password) {
    if (username === this.username && password === this.password) {
      alert("Login successful");
    } else {
      alert("Invalid credentials");
    }
  }
}

class Application {
  constructor(login) {
    this.login = login;
  }

  scroll() {
    return "Scrolling application...";
  }
}

class Instagram extends Application {
  constructor(login, userId) {
    super(login); // constructor chaining
    this.userId = userId;
  }

  scroll() {
    return "Scrolling Instagram reels";
  }
}

class Flipkart extends Application {
  constructor(login, wallet) {
    super(login);
    this.wallet = wallet;
  }

  scroll() {
    return "Scrolling Flipkart products";
  }
}

function loginUser() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let login = new UserLogin("sham", "1234");

  let result = login.login(username, password);

  document.getElementById("result").innerText = result;
}
