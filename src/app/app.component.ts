import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, NgIf, NgFor } from '@angular/common';
import { PracticeComponent } from './practice/practice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, HttpClientModule, NgIf, NgFor, ReactiveFormsModule, PracticeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentStep: number = 1; // To keep track of the current form step

  // Define the form groups for each form
  form1!: FormGroup;
  form2!: FormGroup;
  form3!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    // Initialize the form groups without validators
    this.form1 = this.fb.group({
      
      organizationName: ['hhhh'],
      buildingNo: [''],
      district: [''],
      city: [''],
      street: [''],
      postalCode: [''],
      state: [''],
      country: [''],
      incorporationDate: [''],
      organizationType: [''],
      systemRegistrationMailId: [''],
      directorName: [''],
      directorEmail: [''],
      directorContact: [''],
      tenure: [''],
      numberOfEmployees: [''],
      countryOfServices: [''],
      numberOfLevels: ['']
    });

    // Initialize the other forms as needed
    this.form2 = this.fb.group({
      name2: [''],
      email2: ['']
    });

    this.form3 = this.fb.group({
      name3: [''],
      email3: ['']
    });
  }

  // Method to handle the form submission for Form 1
  onSubmitForm1() {
    const formData1 = this.form1.value;
    console.log('Form 1 Data:', formData1);

    // Use the desired API endpoint for submitting the form data
    this.http.post('https://localhost:7268/api/Form', formData1)
      .subscribe(
        response => {
          console.log('Form 1 data submitted successfully:', response);
          this.currentStep = 2; // Move to the next form step
        },
        error => {
          console.error('Error submitting Form 1 data:', error);
        }
      );
  }

  // Method to handle the form submission for Form 2
  onSubmitForm2() {
    const formData2 = this.form2.value;
    console.log('Form 2 Data:', formData2);

    this.http.post('http://your-backend-url/api/form2', formData2)
      .subscribe(
        response => {
          console.log('Form 2 data submitted successfully:', response);
          this.currentStep = 3;
        },
        error => {
          console.error('Error submitting Form 2 data:', error);
        }
      );
  }

  // Method to handle the form submission for Form 3
  onSubmitForm3() {
    const formData3 = this.form3.value;
    console.log('Form 3 Data:', formData3);

    this.http.post('http://your-backend-url/api/form3', formData3)
      .subscribe(
        response => {
          console.log('Form 3 data submitted successfully:', response);
          this.currentStep = 1; // Reset to the first step or navigate elsewhere
        },
        error => {
          console.error('Error submitting Form 3 data:', error);
        }
      );
  }
}
