import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';

@Component({
  selector: 'app-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.css']
})
export class ScatterplotComponent implements OnInit {
  private d3: D3; // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;
  @Input() data: any;
  constructor(element: ElementRef, d3Service: D3Service) { // <-- pass the D3 Service into the constructor
     this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
     this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {
   let d3 = this.d3; // <-- for convenience use a block scope variable
   let d3ParentElement: Selection<any, any, any, any>; // <-- Use the Selection interface (very basic here for illustration only)
   let w = 500;
   let h = 100;
   let barPadding = 1;
   let data = this.data;

   if (this.parentNativeElement !== null) {

     d3ParentElement = d3.select(this.parentNativeElement); // <-- use the D3 select method
     // Do more D3 things
     var svg = d3.select("#output")
       .append("svg")
       .attr("width", w)
       .attr("height", h);
   }




    svg.selectAll("rect")
      .data(this.data)
      .enter()
      .append("rect")
      .attr("x", function(d:any, i:any) {
        return i * (w / data.length);
      })
      .attr("y", function(d:any) {
        return h - (d*4);
      })
      .attr("width", w / data.length - barPadding)
      .attr("height", function(d:any) {
        return d * 4;
      })
      .attr("fill", function(d:any) {
        return "rgb(0, 0, " + (d * 10) + ")";
      });

    svg.selectAll('text')
     .data(data)
     .enter()
     .append('text')
     .text(function(d:any) {
       return d;
     })
     .attr("x", function(d:any, i:any) {
        return i * (w / data.length) + (w / data.length - barPadding) / 2;
    })
    .attr("y", function(d:any) {
      return h - (d * 4) + 14;  //15 is now 14
    })
     .attr("font-family", "sans-serif")
     .attr("font-size", "11px")
     .attr("fill", "white")
     .attr("text-anchor", "middle");
    }
}
