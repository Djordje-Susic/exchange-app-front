import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css']
})
export class SubmitButtonComponent implements OnInit {
  @Input() form?: FormGroup;
  @Input() isSaving: boolean = false;
  @Input() text: string = "Submit";
  @Input() submittingText: string = "Working...";

  constructor() { }

  ngOnInit(): void {
  }

}
