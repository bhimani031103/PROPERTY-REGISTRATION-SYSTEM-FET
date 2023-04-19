import { StudentsComponent } from './Pages/property/property.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './Pages/add-property/add-property.component';

const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"contact", component: ContactComponent},
    {path:"students", component: StudentsComponent},
    {path:"student/add", component:AddStudentComponent},
    {path:"student/edit/:id", component: AddStudentComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
