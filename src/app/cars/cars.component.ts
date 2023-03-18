import { Component, OnInit } from '@angular/core';
import { Mobiles } from 'src/Files/CarArray';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  text: string;
  nameOfCar: string[] = ["Fer", "Gert", "Bugga"];
  sc = new Mobiles();
  constructor() {
    this.text = "Hello World";
  }

  ngOnInit(): void {
  }
  getInfoName(){
    
    return this.nameOfCar;
  }
  addItem (isTrue: string){
    const ttr= 'jjh;#';
    if (isTrue != null){
        let ggtr= isTrue
    }
  }
}
