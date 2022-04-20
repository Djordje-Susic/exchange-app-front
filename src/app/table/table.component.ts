import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExchangeQuote } from '../shared/models/exchange-quote.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() quotes: ExchangeQuote[] = [];
  @Output() quoteSelected = new EventEmitter<ExchangeQuote>();

  selectedQuote?: ExchangeQuote;

  constructor() { }

  ngOnInit(): void {
  }

  onQuoteSelect(index: number){
    this.selectedQuote = this.quotes[index];
    // console.log(this.selectedQuote);
    this.quoteSelected.emit({...this.selectedQuote});
  }

}
