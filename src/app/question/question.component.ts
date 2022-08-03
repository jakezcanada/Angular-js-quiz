import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Question, Answer, quiz } from '../quiz-data';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, AfterViewInit, OnDestroy{
  questions: Question[] = quiz;
  selectedQuestion: Question | undefined;
  selectedAnswer: Answer | undefined;
  hasAnswered: boolean = false;
  selectedId: number = 1;
  routeListener: Subscription | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.routeListener = this.activatedRoute.params.subscribe(params => {
      this.selectedId = params['id'];
      this.selectedQuestion = this.questions[this.selectedId-1];
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //this.selectedQuestion = this.questions[this.selectedId];
  }

  ngOnDestroy(): void {
    this.routeListener?.unsubscribe();
  }

  onAnswer(answer: Answer): void {
    if(!this.hasAnswered && !answer.correct)
      this.selectedAnswer = answer;
    this.hasAnswered = true;
  } 

}
