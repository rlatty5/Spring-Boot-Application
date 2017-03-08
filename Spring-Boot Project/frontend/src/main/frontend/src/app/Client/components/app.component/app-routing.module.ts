import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HomeComponent } from '../home.component/home.component';
import {SignUpComponent} from "../sign-up.component/sign-up.component";
import {StudentList} from "../student-list.component/student-list.component";

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent,

    pathMatch: 'full'
  },
  {
    path: 'Home',
    component: HomeComponent,

  },
  {
    path: 'SignUp',
    component: SignUpComponent
  },
  {
    path: 'ViewAll',
    component: StudentList,

  },
  {
    path: '**', component: SignUpComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, SignUpComponent, StudentList];
