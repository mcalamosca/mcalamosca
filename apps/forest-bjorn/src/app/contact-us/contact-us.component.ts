import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'forest-bjorn-contact-us',
  standalone: true,
  //material form
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatCardModule, MatButtonModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  contactForm = new FormGroup({
    inquiryType: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
