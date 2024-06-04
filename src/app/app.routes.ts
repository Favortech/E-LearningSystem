import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { guardGuard } from './auth/guard.guard';
import { CourseRegistrationComponent } from './course-registration/course-registration.component';
import { RegistrationComponent } from './registration/registration.component';
import { LandingComponent } from './landing/landing.component';
import { StudentRecordComponent } from './student-record/student-record.component';
import { TimetableComponent } from './timetable/timetable.component';
import { CourseEditComponent } from './course-edit/course-edit.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent,canMatch:[guardGuard]},
    {path:'landing',component:LandingComponent,canMatch:[guardGuard]},
    {path:'register',component:RegistrationComponent,canMatch:[guardGuard]},
    {path:'student-record',component:StudentRecordComponent,canMatch:[guardGuard]},
    {path:'course-register',component:CourseRegistrationComponent,canMatch:[guardGuard]},
   
    {path:'timetable',component:TimetableComponent,canMatch:[guardGuard]},
    {path:'view-course',component:CourseEditComponent,canMatch:[guardGuard]},

];
