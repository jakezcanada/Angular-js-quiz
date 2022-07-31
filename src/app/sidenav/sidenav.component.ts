import { Component, OnInit } from '@angular/core';
import { Question, quiz } from '../quiz-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  questions: Question[] = quiz;
  selection: number = 0;
  selectedQuestion: Question | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectRandomQuestion(): void {
    this.selectedQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
  }

  onSelectQuestion(question: Question): void {
    this.selectedQuestion = question;
  }

}
