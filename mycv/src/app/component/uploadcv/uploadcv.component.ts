import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { ValidateService } from './../../services/validate.service';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-uploadcv',
  templateUrl: './uploadcv.component.html',
  styleUrls: ['./uploadcv.component.css'],

})
export class UploadcvComponent implements OnInit {
  temp_response: any;
  temp_list: any = [];
  taskName: string;

  todoEdit: any;
  submitted: boolean = false;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private http: Http
  ) { }

  ngOnInit() {
    this.getAllJob();
}

 getAllJob() {
   this.authService.getAllJob().subscribe(response => {
     this.temp_response = response;
     this.temp_list = this.temp_response;
   });
 }

  onRegisterCV(id: any, updated_name: string) {
    const body: any = {};
    body.name = updated_name;
    this.authService.editjob(body, id).subscribe(response => {
      console.log(response);
      this.submitted = false;
    });
  }
}
