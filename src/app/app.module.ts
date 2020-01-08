//ties everything together, where I would be importing other modules

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// import { AngularFireModule } from '@angularfire2';
// import { AngularFireDatabaseModule } from '@angularfire2/database';
import { environment } from './../environments/environment'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { from } from 'rxjs';
 
import { AutofocusModule } from 'angular-autofocus-fix';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AutofocusModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
