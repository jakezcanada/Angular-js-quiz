import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player, Leaderboard } from './leaderboard';
import { Question, Answer, quiz } from './quiz-data';

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

  selectedLeaderboard: Leaderboard | undefined;
  leaderboards: Leaderboard[] = [
    {
      id: 1,
      title: 'Test Leaderboard1',
      players: [
        {name: 'test1', score: 1},
        {name: 'test2', score: 3},
        {name: 'test5', score: 6},
      ]
    },
    {
      id: 2,
      title: 'Test Leaderboard2',
      players: [
        {name: 'test1', score: 1},
        {name: 'test2', score: 3},
        {name: 'test5', score: 6},
      ]
    },
    {
      id: 3,
      title: 'Test Leaderboard3',
      players: [
        {name: 'test1', score: 1},
        {name: 'test2', score: 3},
        {name: 'test5', score: 6},
      ]
    }
  ];

  playerNameInput: string | undefined;
  playerScoreInput: number | undefined;

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

  onSelectLeaderboard(leaderboard: Leaderboard){
    this.selectedLeaderboard = leaderboard;
  }

  onReturnToLeaderboardList(){
    this.selectedLeaderboard = undefined;
  }

  onAddPlayer(f: NgForm){
    this.selectedLeaderboard?.players.push(
      {
        name: f.value.name,
        score: f.value.score
      }
    );
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.leaderboards, event.previousIndex, event.currentIndex);
  }

  onCreateNewLeaderboard(title: string) {

  }

}
