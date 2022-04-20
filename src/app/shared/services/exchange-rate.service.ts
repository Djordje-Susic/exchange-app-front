import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';

import { ExchangeQuote } from '../models/exchange-quote.model';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  public url = environment.serverUrl + '/api/v1/quotes';

  constructor(
    private http: HttpClient,
  ) { }

  getAll() {
    return this.http.get<{ data: ExchangeQuote[] }>(this.url).pipe(take(1));
  }
}
