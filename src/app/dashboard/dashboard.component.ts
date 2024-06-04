import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [NgbHighlight, CommonModule, FormsModule, ReactiveFormsModule, SidebarComponent]
})
export class DashboardComponent {
  filter: FormControl;
  students: Array<any> = [
    {
      name: 'Abolarinwwa',
      studentimage: '/assets/img.png',
      age: '18',
      country: 'Nigeria',
      gender: 'male',
      flag: 'f/f3/Flag_of_Nigeria.svg',
      area: 17075200,
      population: 146989754,
    },
    {
      name: 'Abolarinwwa',
      studentimage: '/assets/img.png',
      age: '18',
      country: 'Russia',
      gender: 'male',
      area: 17075200,
      population: 146989754,
      flag: 'f/fa/Flag_of_Russia.svg',
    },
    {
      name: 'Abolarinwwa',
      studentimage: '/assets/img.png',
      age: '18',
      country: 'China',
      gender: 'male',
      flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
      area: 9596960,
      population: 1409517397,
    },
    {
      name: 'Abolarinwwa',
      studentimage: '/assets/img.png',
      age: '18',
      country: 'United States',
      gender: 'male',
      flag: 'a/a4/Flag_of_the_United_States.svg',
      area: 9629091,
      population: 324459463,
    },
    {
      name: 'Abolarinwwa',
      studentimage: '/assets/img.png',
      age: '18',
      country: 'Canada',
      gender: 'male',
      flag: 'c/cf/Flag_of_Canada.svg',
      area: 9976140,
      population: 36624199,
    },
  ];
  constructor(
    private fb: FormBuilder
  )
  {
    this.filter = this.fb.control("", {nonNullable:  true})
  }
}
