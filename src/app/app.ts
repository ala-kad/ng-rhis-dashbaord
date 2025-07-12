import { Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [
    NavComponent
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ng-rhis-dashbaord';
}
