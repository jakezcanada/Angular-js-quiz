import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private webRequestService: WebRequestService) { }

  createLeaderboard(title: string){
    //send to web request service
    this.webRequestService.post('/leaderboard', { title });
  }
}
