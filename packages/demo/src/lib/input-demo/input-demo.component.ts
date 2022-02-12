import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'demo-input',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.css'],
})
export class InputDemoComponent implements OnInit {
  @Input()
  appearance = '';

  @Input()
  fontSize = 16;

  firstName = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.firstName.markAsTouched();
  }
}
