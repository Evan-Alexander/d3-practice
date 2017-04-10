import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'D3 Practice!';
  data: any = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19,
                14, 11, 22, 23, 11, 13, 12, 17, 18, 10,
                24, 18, 25, 9, 5 ];

  saveData(data) {
    this.data = data;
  }
}
