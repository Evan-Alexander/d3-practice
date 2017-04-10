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

  scatterData: any = [
                  [ 5,     20 ],
                  [ 480,   90 ],
                  [ 250,   50 ],
                  [ 100,   33 ],
                  [ 330,   95 ],
                  [ 410,   12 ],
                  [ 475,   44 ],
                  [ 25,    67 ],
                  [ 85,    21 ],
                  [ 220,   88 ]
              ];
  saveScatterData(scatterData) {
    this.scatterData = scatterData;
  }
}
