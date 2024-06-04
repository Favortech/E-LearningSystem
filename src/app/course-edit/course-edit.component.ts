import { Component } from '@angular/core';
import { CourseRegistrationComponent } from '../course-registration/course-registration.component';


@Component({
    selector: 'app-course-edit',
    standalone: true,
    templateUrl: './course-edit.component.html',
    styleUrl: './course-edit.component.scss',
    imports: [CourseRegistrationComponent]
})
export class CourseEditComponent {
    openAlert() {
        window.alert('Hello, world!');
      }
}
  