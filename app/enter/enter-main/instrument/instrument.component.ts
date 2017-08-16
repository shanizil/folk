import { Component, OnInit } from '@angular/core';
import { Instrument } from '../../../model/instrument.model';


@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent implements OnInit {

instruments : Instrument[] =[
new Instrument ("../../assets/images/violin.png","../../assets/images/guitar.png","../../assets/images/guitar2.png" , 205 , -175 ,"../../assets/images/guitar2.png","../../assets/images/dotBefore.png","../../assets/images/dotAfter.png", "Violin"),
new Instrument ("../../assets/images/bouzouki.png","../../assets/images/guitar.png","../../assets/images/guitar2.png" ,390 ,-70 ,"../../assets/images/guitar2.png","../../assets/images/dotBefore.png","../../assets/images/dotAfter.png", "bouzouki"),
new Instrument ("../../assets/images/drum.png","../../assets/images/guitar.png","../../assets/images/guitar2.png" ,495 ,-240 ,"../../assets/images/guitar2.png","../../assets/images/dotBefore.png","../../assets/images/dotAfter.png", "drums"),
new Instrument ("../../assets/images/quena.png","../../assets/images/guitar.png","../../assets/images/guitar2.png" ,570 ,-62 ,"../../assets/images/guitar2.png","../../assets/images/dotBefore.png","../../assets/images/dotAfter.png", "Quena"),
new Instrument ("../../assets/images/guitar.png","../../assets/images/guitar.png","../../assets/images/guitar2.png" ,665 ,-225 ,"../../assets/images/guitar2.png","../../assets/images/dotBefore.png","../../assets/images/dotAfter.png", "Guitar"),
new Instrument ("../../assets/images/panflute.png","../../assets/images/guitar.png","../../assets/images/guitar2.png" ,820 ,-55 ,"../../assets/images/guitar2.png","../../assets/images/dotBefore.png","../../assets/images/dotAfter.png", "panflute"),
new Instrument ("../../assets/images/piano.png","../../assets/images/guitar.png","../../assets/images/guitar2.png" ,980 ,-170 ,"../../assets/images/guitar2.png","../../assets/images/dotBefore.png","../../assets/images/dotAfter.png", "piano"),

];

  
// instriments [] = {
//     new instriment ("jdjgfjg","jdjgfjg","jdjgfjg" ,3 ,3 ,"jdjgfjg","jdjgfjg", "jdjgfjgyyyyyyyyy")
// }

  constructor( ){
  }

  ngOnInit() {
  }


}
