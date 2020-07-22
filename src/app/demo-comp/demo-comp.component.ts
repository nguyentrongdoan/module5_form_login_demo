import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-demo-comp',
  templateUrl: './demo-comp.component.html',
  styleUrls: ['./demo-comp.component.scss']
})
export class DemoCompComponent implements OnInit {
  demoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.demoForm = this.formBuilder.group({
      username: ['',[Validators.required, Validators.minLength(9)]]
      }
    )
  }

}
