import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'home';
}
