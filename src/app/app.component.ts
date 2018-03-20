import { Component} from '@angular/core';
import{Quotes} from './items'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  quotes = [
    new Quotes ("Mart Damon","Life is what happenswhen your busy making plans","18/2/1990")
    ]

    addNewQuote(Quote){
      this.quotes.push(Quote)

    }

  }
