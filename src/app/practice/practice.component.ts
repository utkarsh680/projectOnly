import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Import necessary modules for reactive forms

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule], // Add ReactiveFormsModule here
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  currentStep: number = 1; // To keep track of the current form step

  // Define the form groups for each form
  form1!: FormGroup;
  form2!: FormGroup;
  form3!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    // Initialize the form groups with form controls and validators

    this.form1 = this.fb.group({
      field1: ['', Validators.required]
      // other fields
    });

    this.form2 = this.fb.group({
      field2: ['', Validators.required]
      // other fields
    });

    this.form3 = this.fb.group({
      field3: ['', Validators.required]
      // other fields
    });
  }

  // Method to handle the form submission for Form 1
  onSubmitForm1() {
    if (this.form1.valid) {
      const formData1 = this.form1.value;

      // Log form data for debugging
      console.log('Form 1 Data:', formData1);

      // Sending the form data to the backend via HTTP POST
      this.http.post('http://your-backend-url/api/form1', formData1)
        .subscribe(
          response => {
            console.log('Form 1 data submitted successfully:', response);
            // Move to the next form
            this.currentStep = 2;
          },
          error => {
            console.error('Error submitting Form 1 data:', error);
            // Handle error
          }
        );
    } else {
      console.error('Form 1 is invalid');
    }
  }

  // Method to handle the form submission for Form 2
  onSubmitForm2() {
    if (this.form2.valid) {
      const formData2 = this.form2.value;

      // Log form data for debugging
      console.log('Form 2 Data:', formData2);

      // Sending the form data to the backend via HTTP POST
      this.http.post('http://your-backend-url/api/form2', formData2)
        .subscribe(
          response => {
            console.log('Form 2 data submitted successfully:', response);
            // Move to the next form
            this.currentStep = 3;
          },
          error => {
            console.error('Error submitting Form 2 data:', error);
            // Handle error
          }
        );
    } else {
      console.error('Form 2 is invalid');
    }
  }

  // Method to handle the form submission for Form 3
  onSubmitForm3() {
    if (this.form3.valid) {
      const formData3 = this.form3.value;

      // Log form data for debugging
      console.log('Form 3 Data:', formData3);

      // Sending the form data to the backend via HTTP POST
      this.http.post('http://your-backend-url/api/form3', formData3)
        .subscribe(
          response => {
            console.log('Form 3 data submitted successfully:', response);
            // Handle success response, you can display a message or reset the form
            this.currentStep = 1; // Reset to the first step or navigate elsewhere
          },
          error => {
            console.error('Error submitting Form 3 data:', error);
            // Handle error
          }
        );
    } else {
      console.error('Form 3 is invalid');
    }
  }
}
