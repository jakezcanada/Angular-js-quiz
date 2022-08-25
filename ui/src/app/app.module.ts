import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { MaterialModule } from '../material.module';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
  {path: 'home/:id', loadChildren: () => import('./question/question.module').then(m => m.QuestionModule)},
  {path: '', redirectTo: '/home/1', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
