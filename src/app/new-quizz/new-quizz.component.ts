import { QuizzService } from './../services/quizz.service';
import { Component } from '@angular/core';
import { Quizz } from '../interfaces/quizz_interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-quizz',
  templateUrl: './new-quizz.component.html',
  styleUrls: ['./new-quizz.component.css', '../login/login.component.css']
})
export class NewQuizzComponent {
  id: any;

  team:string = '623497e07ccb72a54717b9f4';
  title:string = '';
  description:string = '';
  level:string = '';
  rewardXp:string = '';
  type:string = '';
  options:Array<any> = [];

  titleText = 'Criar Novo Quizz';
  buttonText = 'Criar novo';

  errorMsg = '';

  constructor(private router: Router, private quizzService: QuizzService, private route: ActivatedRoute){}

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id != undefined){
      this.quizzService.quizzDetail(this.id).subscribe(
        data => {
          this.team = data.quiz.team;
          this.title = data.quiz.title;
          this.description = data.quiz.description;
          this.level = data.quiz.level;
          this.rewardXp = data.quiz.rewardXp;
          this.type = data.quiz.type;
          this.options = data.quiz.options;

          this.titleText = "Editar Quizz"
          this.buttonText = "Confirmar edição"
        }
      )
    }
  }

  submitQuizz() {
    const quizzToAdd:Quizz = {
      team: this.team,
      title: this.title,
      description: this.description,
      level: this.level,
      rewardXp: this.rewardXp,
      type: this.type,
      options: this.options
    };


    if(this.id == undefined) this.quizzService.newQuizz(quizzToAdd).subscribe(
      _ => this.router.navigateByUrl('quizzes'),
      _ => this.errorMsg = "Falha na requisição"
    )
    else this.quizzService.editQuizz(this.id, quizzToAdd).subscribe(
      _ => this.router.navigateByUrl('quizzes'),
      _ => this.errorMsg = "Falha na requisição"
    )
  }

  optionPlus(){
    this.options.push({ text: "", correct: "true" })
  }
}
