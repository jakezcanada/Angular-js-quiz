import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '../material.module'

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { QuizComponent } from './quiz/quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
