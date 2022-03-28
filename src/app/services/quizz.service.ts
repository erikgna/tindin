import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { Quizz } from '../interfaces/quizz_interface';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  private quizzes: Quizz[];
  private url = "https://h-api-ava.tindin.com.br/quizzes"

  private authHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': this.authService.getToken()
  })

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) {
    this.quizzes = [];
  }

  get getQuizzes(){
    return this.quizzes;
  }

  allQuizzes(): Observable<any>{
    return this.httpClient.get<any>(this.url + "?filter=team:623497e07ccb72a54717b9f4&fields=title, description, level,rewardXp,type",
      {headers: this.authHeader}
    )
  }

  newQuizz(quizz: Quizz): Observable<any>{
    return this.httpClient.post(this.url, {
      team: quizz.team,
      title: quizz.title,
      description: quizz.description,
      level: quizz.level,
      rewardXp: quizz.rewardXp,
      type: quizz.type,
      options: quizz.options,
    }, {headers: this.authHeader})
  }

  quizzDetail(id: string): Observable<any>{
    return this.httpClient.get<any>(this.url + "/" + id,
      { headers: this.authHeader }
    )
  }

  editQuizz(id: string, quizz: Quizz): Observable<any>{
    return this.httpClient.put<any>(this.url,
      {
        _id: id,
        team: quizz.team,
        title: quizz.title,
        description: quizz.description,
        level: quizz.level,
        rewardXp: quizz.rewardXp,
        type: quizz.type,
        options: quizz.options,
      },
      { headers: this.authHeader }
    )
  }

  deleteQuizz(id: string): Observable<any>{
    return this.httpClient.delete<any>(this.url + "/" + id,
      { headers: this.authHeader }
    )
  }
}
