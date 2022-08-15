import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Answer, Question, quiz} from './quiz-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'js-quiz';
  questions: Question[] = quiz;
  selectedQuestion: Question | undefined;
  selectedAnswer: Answer | undefined;
  hasAnswered: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router){

  }

  onSelectRandomQuestion(): void {
    this.selectedQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
    this.resetQuestion();
  }

  onSelectQuestion(question: Question): void {
    this.selectedQuestion = question;
    this.resetQuestion();
  }

  resetQuestion(): void{
    this.router.navigate(['home', this.selectedQuestion?.id]);
  }


}
