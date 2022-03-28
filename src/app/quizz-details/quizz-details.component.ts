import { QuizzService } from './../services/quizz.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizz-details',
  templateUrl: './quizz-details.component.html',
  styleUrls: ['./quizz-details.component.css']
})
export class QuizzDetailsComponent implements OnInit {
  title:string = '';
  description:string = '';
  type:string = '';
  level:string = '';
  options:any[] = [];
  totalCorrects:number = 0;
  totalResponses:number = 0;

  constructor(private quizzService: QuizzService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id != null){
      this.quizzService.quizzDetail(id).subscribe(
        data => {
          this.title = data.quiz.title;
          this.description = data.quiz.description;
          this.type = data.quiz.type;
          this.level = data.quiz.level;
          this.options = data.quiz.options;
          this.totalCorrects = data.quiz.totalCorrects;
          this.totalResponses = data.quiz.totalResponses;
        }
      )
    }
  }
}
