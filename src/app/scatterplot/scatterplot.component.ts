import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { D3Service, D3, Selection, ScaleLinear } from 'd3-ng2-service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.css'],
  providers: [DataService]
})
export class ScatterplotComponent implements OnInit {
  private d3: D3; // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;
  @Input() data: any;
  @Input() scatterData: any;
  bikes: any = [];
  returnedBikes: any = [];
  constructor(element: ElementRef, d3Service: D3Service, private dataService: DataService) { // <-- pass the D3 Service into the constructor
     this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
     this.parentNativeElement = element.nativeElement;
  }

  loadData() {
    console.log(this.bikes.length);
    for(var i =0; i < this.bikes.length; i ++) {
      if (this.bikes[i].year === 2015) {
        this.returnedBikes.push(this.bikes[i]);
      }
    }
    console.log(this.returnedBikes);
    return this.returnedBikes;
  }

  ngOnInit() {
    this.dataService.getBikeData().subscribe((data) =>
    this.bikes = data.bikes);
    let d3 = this.d3; // <-- for convenience use a block scope variable
    let d3ParentElement: Selection<any, any, any, any>; // <-- Use the Selection interface (very basic here for illustration only)
    let w = 500;
    let h = 100;
    let barPadding = 1;
    let data = this.data;
    let scatterData = this.scatterData;
    let localReturnedBikes = this.returnedBikes;

    if (this.parentNativeElement !== null) {

      d3ParentElement = d3.select(this.parentNativeElement); // <-- use the D3 select method
      // Do more D3 things
      var svg = d3.select("#output")
      .append("svg")
      .attr("width", w)
      .attr("height", h);
    }

    svg.selectAll("rect")
      .data(localReturnedBikes)
      .enter()
      .append("rect")
      .attr("x", function(d:any, i:any) {
        return i * (w / localReturnedBikes.length);
      })
      .attr("y", function(d:any) {
        return h - (d*4);
      })
      .attr("width", w / localReturnedBikes.length - barPadding)
      .attr("height", function(d:any) {
        return d * 4;
      })
      .attr("fill", function(d:any) {
        return "rgb(0, 0, " + (d * 10) + ")";
      });

    svg.selectAll('text')
      .data(localReturnedBikes)
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

    var svg2 = d3.select("#scatterData")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    svg2.selectAll("circle")
      .data(scatterData)
      .enter()
      .append("circle")
      .attr("cx", function(d) {
        return d[0];
      })
      .attr("cy", function(d) {
        return d[1];
      })
      .attr("r", function(d) {
        return Math.sqrt(h -d[1]);
      });

    svg2.selectAll("text")
      .data(scatterData)
      .enter()
      .append("text")
      .text(function(d) {
        return d[0] + "," + d[1];
      })
      .attr("x", function(d) {
        return d[0];
      })
      .attr("y", function(d) {
        return d[1];
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "red");
    }
}
