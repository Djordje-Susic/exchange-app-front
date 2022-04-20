import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { ExchangeQuote } from '../models/exchange-quote.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public url = environment.serverUrl + '/api/v1/orders';

  constructor(
    private http: HttpClient,
  ) { }

  create(key: string, amount: number, quote: number) {
    return this.http.post<{ data: ExchangeQuote }>(this.url, {
      key,
      amount,
      quote
    }).pipe(take(1));
  }
}
