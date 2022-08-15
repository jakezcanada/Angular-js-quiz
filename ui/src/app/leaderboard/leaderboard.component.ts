import { Component, OnInit } from '@angular/core';
import {Leaderboard} from "../leaderboard";
import {NgForm} from "@angular/forms";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
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

  onCreateNewLeaderboard() {

  }

}
