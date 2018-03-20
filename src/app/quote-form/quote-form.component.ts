import { Component, OnInit } from '@angular/core';
import { Quotes} from '../items'
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
public showQuote: boolean;

newQuote=new Quotes("","","");


quoteInfo(){
  this.showQuote= !this.showQuote;
}

  constructor() {
  this.showQuote= false }

  ngOnInit() {
  }

}
