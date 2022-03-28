import { Component, OnInit } from "@angular/core";

import { QuizzService } from './../services/quizz.service';
import { Quizz } from "src/app/interfaces/quizz_interface";
import { Router } from "@angular/router";

@Component({
    selector: 'app-quizzes-list',
    templateUrl: './quizzes_list.component.html',
    styleUrls: ['./quizzes_list.component.css']
})
export class QuizzesListComponent{
  quizzes!: Quizz[];

  constructor(private router: Router, private quizzService: QuizzService){}

  ngOnInit(){
    this.quizzService.allQuizzes().subscribe(
      data => this.quizzes = data.quizzes
    )
  }

  navigateWithId(id: string, route: string){
    this.router.navigate([ route, { id } ])
  }

  deleteQuizz(id: string){
    this.quizzService.deleteQuizz(id).subscribe(
      _ => this.quizzes = this.quizzes.filter((quizz) => quizz._id != id)
    )
  }
}
