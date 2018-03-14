import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {

  domain = "http://localhost:8080"; // Development Domain - Not Needed in Production
  authToken;
  user;
  options;
  userData;

  constructor( 
    private http: Http 
  ) { }

  // Function to create headers, add token, to be used in HTTP requests
  createAuthenticationHeaders() {
    this.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authToken // Attach token
      })
    });
  }

  // Function to get token from client local storage
  loadToken() {
    this.authToken = localStorage.getItem('token');; // Get token and asssign to variable to be used elsewhere
  }

  registerUser(user) {
    return this.http.post(this.domain + '/authentication/register', user).map(res => res.json());
  }

  // Function to check if username is taken
  checkUsername(username) {
    return this.http.get(this.domain + '/authentication/checkUsername/' + username).map(res => res.json());
  }

  // Function to check if e-mail is taken
  checkEmail(email) {
    return this.http.get(this.domain + '/authentication/checkEmail/' + email).map(res => res.json());
  }

  login(user) {
    return this.http.post("http://localhost:3000" + '/login', user).map(res => res.json());
  }
  
  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  // Function to store user's data in client local storage
  storeUserData(token, user, email, avatar, isOnline, aboutMe) {
    localStorage.setItem('token', token); // Set token in local storage
    localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
    localStorage.setItem('email', JSON.stringify(email)); // Set email in local storage as string
    localStorage.setItem('avatar', JSON.stringify(avatar)); // Set avatar in local storage
    localStorage.setItem('isOnline', JSON.stringify(isOnline)); // Set isOnline in local storage 
    localStorage.setItem('aboutMe', JSON.stringify(aboutMe)); // Set aboutMe in local storage
    this.authToken = token; // Assign token to be used elsewhere
    this.user = user; // Set user to be used elsewhere
    this.storeUserData;
  }

    // Function to check if user is logged in
    loggedIn() {
      //return tokenNotExpired();
      if (this.authToken = localStorage.getItem('token')) { // if there is a user token in the storage
        return true; // return true
      } else { // otherwise 
        return false; // return user to page
      }
    }

}
