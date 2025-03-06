import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl="C:/Users/ayush/Downloads/Ayush - FS HTML_CSS LP01 assets/assets";

  ngOnInit(): void {
    this.title = 'Hello From BridgeLabz!!';
  }
}
