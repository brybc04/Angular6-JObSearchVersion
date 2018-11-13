import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  query: string;
  searchResults: Array<AuthService>;


  constructor(private http: Http,
              private authService: AuthService) { }

  ngOnInit() {
  }

  getAll() {
    return this.http.get('http://localhost:3000/skills/jobs');
  }

}
