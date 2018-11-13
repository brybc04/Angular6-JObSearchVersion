import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-joblisting',
  templateUrl: './joblisting.component.html',
  styleUrls: ['./joblisting.component.css']
})
export class JoblistingComponent implements OnInit {
  temp_response: object;
  temp_list: any = [];
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
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllJob();
  }

  getAllJob() {
    this.authService.getAllJob().subscribe(response => {
      this.temp_response = response;
      this.temp_response = this.temp_response;
    });
}
  showTaskDetail(data: any) {
    localStorage.setItem('task_name', data.title);
    //localStorage.setItem("task_detail",data);
    // code will come over here
    // which will redirect to the task-detail page/component
    this.router.navigate(['/jobs/:id']);
  }

}
