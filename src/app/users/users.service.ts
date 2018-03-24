import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
// import { RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

// export interface User {
//   firstName: string,
//   lastName: string
// }

import { User } from './User';

// class LoginObject {
//   constructor(email: string, password: string) {
//     this.email = email;
//     this.password = password;
//   }
//   email: string;
//   password: string;
// }

class LoginToken {
  id: string
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class UsersService {
  url = 'http://codebrew-2018.herokuapp.com/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<Array<User>>(this.url)
    .pipe(
      retry(3), // retry 3 times
      catchError(this.handleError)
    )
  }

  signIn(email: string, password: string) {
    // var object = new LoginObject(email, password);

    // let myHeaders = new Headers();
    // myHeaders.set('Content-Type', 'application/json');
    // myHeaders.set('Accept', 'text/plain');
    // let myParams = new URLSearchParams();
    // myParams.set('email', email);
    // // myParams.set('writer', wtr);
    // let options = new RequestOptions({ headers: myHeaders, params: myParams });

    return this.http.get<string>(this.url + '/login', {
      params: {
        email: email
      }
    })
    .pipe(
      catchError(this.handleError)
    );
  }

  newUser(user: User) {
    // NOTE server has to return the new user
    return this.http.post<User>(this.url, user, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };
}
