import { AuthService } from './../../services/auth.service';
import { ValidateService } from './../../services/validate.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    name: String;
    username: String;
    email: String;
    password: String;
    address: String;
    mainSkills: String;
    workExperience: String;
    education: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      address: this.address,
      mainSkills: this.mainSkills,
      workExperience: this.workExperience,
      education: this.education

    };

   // Required Fields
   if (!this.validateService.validateRegister(user)) {
     this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
     return false;
   }
    // validate email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // register user
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/register']);
      }
    });

  }

}
