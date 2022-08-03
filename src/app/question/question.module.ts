import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { MaterialModule } from '../material-module';
import { QuestionComponent } from './question.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '**', component: QuestionComponent}
]

@NgModule({
  declarations: [
    QuestionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HighlightModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
})
export class QuestionModule { }
