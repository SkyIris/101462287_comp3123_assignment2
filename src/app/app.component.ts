import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AppModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101462287_comp3133_assignment2';
}
