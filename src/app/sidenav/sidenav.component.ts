import { Component, OnInit } from '@angular/core';
import { Question, Answer, quiz } from '../quiz-data';
import { HighlightLoader } from 'ngx-highlightjs';

const themeAndroidStudio: string = 'node_modules/highlight.js/styles/androidstudio.css';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  questions: Question[] = quiz;
  selection: number = 0;
  selectedQuestion: Question | undefined;
  selectedAnswer: Answer | undefined;
  hasAnswered: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectRandomQuestion(): void {
    this.selectedQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
    this.resetQuestion();
  }

  onSelectQuestion(question: Question): void {
    this.selectedQuestion = question;
    this.resetQuestion();
  }

  onAnswer(answer: Answer): void {
    if(!this.hasAnswered && !answer.correct)
      this.selectedAnswer = answer;
    this.hasAnswered = true;
  }

  resetQuestion(): void{
    this.hasAnswered = false;
    this.selectedAnswer = undefined;
  }

}
