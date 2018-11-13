import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Skills } from '../services/skills.model';


@Injectable()
export class SkillsService {
  selectedSkills: Skills;
  skills: Skills[];
  readonly baseURL = 'http://localhost:3000/skills/skills';

  constructor(private http: Http) { }

  postSkills(skills: Skills) {
    return this.http.post(this.baseURL, skills);
  }
}
