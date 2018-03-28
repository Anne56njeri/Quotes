import { Component} from '@angular/core';
import{Quotes} from './items'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  quotes = [
    new Quotes (1, "Mart Damon","Life is what happenswhen your busy making plans","18/2/1990"),
    new Quotes (2, "Mark Lawrence","Friends show their love in times of trouble not in happiness","14/8/1990"),
    new Quotes (3, "Damien Marley","Put your heart ,mind and soul into even your smallest acts.This is the secret of success","12/8/1890"),
    ]

    addNewQuote(Quote){
      this.quotes.push(Quote)

    }

    quoteDelete(index){
      let toDelete=confirm(`Are you sure you want to delete this quote`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }

  }
