class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(loggedIn) {
    this.authenticated = true;
    loggedIn();
  }

  logout(loggedOut) {
    this.authenticated = false;
    loggedOut();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
