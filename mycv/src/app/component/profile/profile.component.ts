import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  temp_response: any;
  temp_list: any = [];
  user: Object;
  submitted: Boolean = false;
  name: String;
  username: String;
  email: String;
  password: String;
  address: String;
  mainSkills: String;
  workExperience: String;
  education: String;

  constructor(
    private authService: AuthService,
    private router: ActivatedRoute,
        private flashMessage: FlashMessagesService,
    private route: Router
  ) {  console.log(this.router.snapshot.params['id']);
    this.authService.getProfile(); }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  editUser(id: any,
    updated_name: string,
    updated_username: String,
    updated_email: String,
    updated_password: String,
    updated_address: String,) {

    const body: any = {};
    body.name = updated_name;
    body.username = updated_username;
    body.email = updated_email;
    body.password = updated_password;
    body.address = updated_address;


    this.authService.getProfile().subscribe(response => {
      console.log(response);
      this.temp_response = response;
      this.temp_list.push(this.temp_response);
      this.submitted = false;

    });

}

  editUser2(id: any,
   updated_mainSkills: String) {


    const body: any = {};
    body.mainSkills = updated_mainSkills;


    this.authService.getProfile().subscribe(response => {
      console.log(response);
      this.temp_response = response;
      this.temp_list.push(this.temp_response);
      this.submitted = false;

    });

}

  editUser3(id: any,

    updated_workExperience: String) {


    const body: any = {};

    body.workExperience = updated_workExperience;


    this.authService.getProfile().subscribe(response => {
      console.log(response);
      this.temp_response = response;
      this.temp_list.push(this.temp_response);
      this.submitted = false;

    });

}

  editUser4(id: any,
    updated_education: String) {

    const body: any = {};

    body.education = updated_education;

    this.authService.getProfile().subscribe(response => {
      console.log(response);
      this.temp_response = response;
      this.temp_list.push(this.temp_response);
      this.submitted = false;

    });

}
}
