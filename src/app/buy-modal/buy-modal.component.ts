import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { ExchangeQuote } from '../shared/models/exchange-quote.model';
import { OrderService } from '../shared/services/order.service';

@Component({
  selector: 'app-buy-modal',
  templateUrl: './buy-modal.component.html',
  styleUrls: ['./buy-modal.component.css']
})
export class BuyModalComponent implements OnInit, OnDestroy {
  @Input() quote?: ExchangeQuote;
  form!: FormGroup;
  isSaving: boolean = false;
  total?: number
  amountSub?: Subscription;
  successReport?: { message:string, success: boolean };

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group( {
      'amount': [null, {updateOn: 'change', validators:[Validators.required]}],
    });

    this.amountSub = this.form.controls['amount'].valueChanges.subscribe(value => {
      this.total = value * (this.quote?.quote || 0);
      console.log(value);
    });
  }

  onSubmit() {
    if (!(this.form.valid && this.quote)) {
      return;
    }

    this.isSaving = true;

    this.orderService.create(this.quote.key, this.form.controls['amount'].value, this.quote.quote).pipe(finalize(() => { this.isSaving = false })).subscribe(
      () => {
        this.form.reset();
        this.successReport = { message: 'Transaction successful', success: true };
      },
      error => {
        this.successReport = { message: 'Transaction error', success: false, };
      }
    );
  }

  ngOnDestroy(){
    if(this.amountSub){
      this.amountSub.unsubscribe();
    }
  }
}
