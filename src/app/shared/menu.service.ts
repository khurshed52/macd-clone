import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  private breakfastUrl = 'https://macd-api.herokuapp.com/breakfast';

  public getBreakFast():Observable<any>{
    return this.http.get<any>(this.breakfastUrl)
  }
}
