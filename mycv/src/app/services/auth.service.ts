import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
   apiURL = 'http://localhost:3000/skills/jobs';
   apiURLs ='http://localhost:3000/users';
  authToken: any;
  user: any;
  skills: any;

  constructor(private http: Http) { }

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
      .pipe(map(res => res.json()));
  }

  // editUser(user: any, request_body: any) {
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.put('http://localhost:3000/users/:id', user,  { headers: headers })
  //     .pipe(map(res => res.json()));
  // }

   editUser(request_body:any, id:any) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.apiURLs + "/" + id, request_body, { headers: headers })
      .pipe(map(res => res.json()));
  }

  authenticateUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getProfile() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', { headers: headers })
      .pipe(map(res => res.json()));
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken () {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    const helper = new JwtHelperService();
      const isExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
      return isExpired;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();

  }
  // // put("/api/contacts/:id")
  // icreateCv( user ): Promise<void | user> {
  //   const putUrl = this.contactsUrl + '/' + putContact._id;
  //   return this.http.put(putUrl, putContact)
  //     .toPromise()
  //     .then(response => response.json() as Contact)
  //     .catch(this.handleError);
  // }

  // createCv(user) {
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.put('http://localhost:3000/users/:id', user, { headers: headers })
  //     .pipe(map(res => res.json()));
// }

  createCv(mainkSkills, workExperience, education) {
    const uri = 'http://localhost:3000/users/:id';

    const obj = {
      mainkSkills: mainkSkills,
      workExperience: workExperience,
      education: education
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  creatjob(skills) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/skills/jobs', skills, { headers: headers })
      .pipe(map(res => res.json()));
  }

  editjob(request_body: any, id: any) {
    return this.http.put(this.apiURL + '/' + id, request_body);
  }

  getAllJob() {
    return this.http.get(this.apiURL);
  }


}



