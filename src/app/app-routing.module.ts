import { QuizzDetailsComponent } from './quizz-details/quizz-details.component';
import { NewQuizzComponent } from './new-quizz/new-quizz.component';
import { QuizzesListComponent } from './quizzes_list/quizzes_list.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'quizzes', component: QuizzesListComponent},
  {path: 'new-quizz', component: NewQuizzComponent},
  {path: 'quizz-details', component: QuizzDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
