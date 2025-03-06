import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = 'HelloWorld'; 
  imgUrl: string="https://imgs.search.brave.com/vbM4jQzRWT57hMn-O-1K9-TIHvgrR9BSmTvew_VRA8w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZTQub3dsZXIuY29t/L2xvZ28vYnJpZGdl/bGFiel9vd2xlcl8y/MDIxMDIyMl8xMDQx/NDVfbGFyZ2UucG5n";
  url : string = 'https://www.bridgelabz.com';


  ngOnInit(): void {
    this.title = 'Hello From BridgeLabz!!';
  }
  
  onClick(event: Event) : void {
    window.open(this.url, '_blank');
  }
}
