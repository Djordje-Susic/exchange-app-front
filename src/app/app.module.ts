import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TableComponent } from './table/table.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { BuyModalComponent } from './buy-modal/buy-modal.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TableComponent,
    SpinnerComponent,
    BuyModalComponent,
    SubmitButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
