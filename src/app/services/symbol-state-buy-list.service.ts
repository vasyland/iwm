import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BuySymbol } from '../interfaces/buy-symbol';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SymbolStateBuyListService {

  hasError = false;
  
  constructor(private http: HttpClient) { }

  getRecommendedBuyList(): Observable<BuySymbol[]> {
    //return this.http.get<BuySymbol[]>(`${environment.apiUrl}/${environment.urls.buylist}`);
    return this.http.get<BuySymbol[]>('http://localhost:8587/api/buy-list');
  }
}
