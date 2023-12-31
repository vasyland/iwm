import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scenario } from '../interfaces/scenario';

@Injectable({
  providedIn: 'root'
})
export class UserScenarioService {

  hasError = false;

  constructor(private http: HttpClient) { }

  getUserScenarioList(): Observable<Scenario[]> {
    return this.http.get<Scenario[]>('http://localhost:8587/api/allscenarios');
  }
}
