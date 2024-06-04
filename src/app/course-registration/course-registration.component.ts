import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course-registration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-registration.component.html',
  styleUrl: './course-registration.component.scss'
})
export class CourseRegistrationComponent {
  
  totalCredits: number = 0;

  ngOnInit(): void {
    this.calculateTotalCredits();
  }
  
  calculateTotalCredits(): void {
    this.totalCredits = this.rows.reduce((acc, current) => acc + current.unit, 0);
  }
  

  rows = [
    { code: 'CSC 221', name: 'Introduction to Operating System', type: 'Core', unit: 4, disabled: false },
    { code: 'CSC 231', name: 'Scientific Programming', type: 'Core', unit: 3, disabled: false },
    { code: 'CSC 212', name: 'Introduction to Computer Electronics', type: 'Core', unit: 3, disabled: false },
    { code: 'CSC 232', name: 'Structured Programming', type: 'Core', unit: 3, disabled: false },
    { code: 'CSC 233', name: 'Programming and Algorithms', type: 'Core', unit: 4, disabled: false },
    { code: 'CSC 234', name: 'Assembly Language Programming', type: 'Elective', unit: 3, disabled: false },
    { code: 'CSC 241', name: 'Discrete Structures', type: 'Core', unit: 4, disabled: false },
    { code: 'CSC 272', name: 'Information Management Systems', type: 'Elective', unit: 3, disabled: false },
    { code: 'CSC 291', name: 'Elementary Data Processing', type: 'Elective', unit: 3, disabled: false },
    { code: 'CSC 292', name: ' Business Programming ', type: 'Core', unit: 3, disabled: false },
    { code: 'MAT 213', name: 'Further-Mathematics', type: 'Elective', unit: 4, disabled: false },
    { code: 'GNS 201', name: 'Communication In English', type: 'Elective', unit: 3, disabled: false },
    { code: 'STA 211', name: 'Statistic', type: 'Core', unit: 3, disabled: false },
    { code: 'GES 103', name: 'Citizenship', type: 'Elective', unit: 3, disabled: false },
  ];
  
  onClick(row: any) {
    row.disabled = true;
    // ... perform the action ...
    // setTimeout(() => {
    //   row.disabled = false;
    // }, ); // re-enable the button after 3 seconds
  }
  
  // buttonDisabled = false;
  // buttonLabel = 'Add';

  // isDisabled = false;


  // onButtonClick() {
  //   if (!this.isDisabled) {
  //     this.isDisabled = true;
      // ... perform the action ...
    // }
  }
  
    // this.buttonLabel = 'Remove';
  

