import { Component, OnInit } from '@angular/core';
import { ExchangeQuote } from './shared/models/exchange-quote.model';

import { ExchangeRateService } from './shared/services/exchange-rate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'exchange-app-front';
  quotes: ExchangeQuote[] = [];
  selectedQuote?: ExchangeQuote;
  isLoading = true;

  constructor(
    private exchangeRateService: ExchangeRateService
  ) { }

  ngOnInit(): void {
    this.exchangeRateService.getAll().subscribe(
      response => {
        this.quotes = response.data;
        console.log(this.quotes);
        this.isLoading = false;
      }
    );
  }

  onQuoteselected(value: ExchangeQuote){
    this.selectedQuote = value;
    console.log(this.selectedQuote);
  }
}
