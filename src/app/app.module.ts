import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { D3Service } from 'd3-ng2-service';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';
import { DataFormComponent } from './data-form/data-form.component';
import { WorldBankComponent } from './world-bank/world-bank.component';

@NgModule({
  declarations: [
    AppComponent,
    ScatterplotComponent,
    DataFormComponent,
    WorldBankComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
