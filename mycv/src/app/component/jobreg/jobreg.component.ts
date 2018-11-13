import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { ValidateService } from './../../services/validate.service';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Skills } from './../../services/skills.model';
import { SkillsService } from './../../services/skills.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-jobreg',
  templateUrl: './jobreg.component.html',
  styleUrls: ['./jobreg.component.css']
})
export class JobregComponent implements OnInit {

  title: string;
  description: string;
  salary: number;
  type: string;
  reqSkills: string;
  companyName: string;
  comapanyDescription: string;
  city: string;
  creation: string;
  end: string;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }


  onRegisterCV() {
    const skills = {
      title: this.title,
      description: this.description,
      salary: this.salary,
      type: this.type,
      reqSkills: this.reqSkills,
      companyName: this.companyName,
      comapanyDescription: this.comapanyDescription,
      city: this.city,
      creation: this.creation,
      end: this.end
    };
    this.authService.creatjob(skills).subscribe((data => {
      if (data.success) {
        this.flashMessage.show('Success!', { cssClass: 'alert-success', timeout: 3000 });
      } else {
        this.flashMessage.show('Job Posted Successfully', { cssClass: 'alert-sucess', timeout: 3000 });
        console.log(data);
      }
    }));

  }
}
