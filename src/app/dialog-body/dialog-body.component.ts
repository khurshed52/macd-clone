import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
declare var Swal:any
@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {
  myForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      city: [],
      name: [],
      phone: [],
      address: [],
    })
   }

  ngOnInit(): void {
   
  }

  public people = [
    'Abu Dhabi', 'Ajman', 'Al Ain', 'Dubai', 'Sharjah', 'Ras Al Khaimah', 'Umm Al Quwain'
  ]

  onSubmit() {
    console.log(this.myForm.value);
    this.myForm.reset();
    Swal.fire({
      icon: 'success',
      text: 'Done',
      timer: 1500
    })
  }

}
