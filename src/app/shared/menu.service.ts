import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }
  
  private breakfastUrl = environment.apiUrl + 'breakfast';
  private burgerUrl = environment.apiUrl + 'burger';

  public getBreakFast():Observable<any>{
    return this.http.get<any>(this.breakfastUrl)
  }

  public getBurger():Observable<any>{
    return this.http.get<any>(this.burgerUrl)
  }
}
