import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MemoryCard } from '../models/card-interface';

@Component({
  selector: 'app-memory',
  standalone: true,
  imports: [CardComponent ],
  templateUrl: './memory.component.html',
  styleUrl: './memory.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MemoryComponent {

  cards: MemoryCard[] = [
    {"name": "dog", "exposed": false, "hidden": false},
    {"name": "cat", "exposed": false, "hidden": false},
    {"name": "rooster", "exposed": false, "hidden": false},
    {"name": "goose", "exposed": false, "hidden": false},
    {"name": "chick", "exposed": false, "hidden": false},
    {"name": "cow", "exposed": false, "hidden": false},
    {"name": "kitten", "exposed": false, "hidden": false},
    {"name": "lamb", "exposed": false, "hidden": false},
    {"name": "mouse", "exposed": false, "hidden": false},
    {"name": "piglet", "exposed": false, "hidden": false},
    {"name": "puppy", "exposed": false, "hidden": false},
    {"name": "duck", "exposed": false, "hidden": false},
    {"name": "horse", "exposed": false, "hidden": false},
    {"name": "goat", "exposed": false, "hidden": false},
    {"name": "sheep", "exposed": false, "hidden": false},
    {"name": "hen", "exposed": false, "hidden": false},
    {"name": "pig", "exposed": false, "hidden": false},
    {"name": "fox", "exposed": false, "hidden": false},
    {"name": "hedgehog", "exposed": false, "hidden": false},
    {"name": "peacock", "exposed": false, "hidden": false},
    {"name": "donkey", "exposed": false, "hidden": false},
    {"name": "pigeon", "exposed": false, "hidden": false}
  ];

  cardDeck:MemoryCard[] = [];
  chosenCards:MemoryCard[] = [];

  ngOnInit() {
    const doubleCards = [...this.cards.map(card => ({ ...card })), ...this.cards.map(card => ({ ...card }))];
    this.cardDeck = doubleCards;

    this.shuffleDeck();

    this.cardDeck.forEach((card, index) => {
      card.id = index + 1;
    });

    console.log(this.cardDeck);
  }  
  
  
  onClickCard(card: MemoryCard) {
    if (!card.exposed && this.chosenCards.length < 2) {
      console.log("Chosen card: " + card.name);
      this.chosenCards.push((card));
      card.exposed = true;
    }
    if (this.chosenCards.length === 2) {
      setTimeout(() => {
        this.checkIfCardsMatch();
      }, 200);
    }
  }
  
  checkIfCardsMatch() {
    console.log("CheckIfCardsMatch functie: " + this.chosenCards[0].name + " en " + this.chosenCards[1].name);
    if (this.chosenCards[0].name === this.chosenCards[1].name) {
      console.log("Match! Twee gelijke kaarten gevonden")
        this.hideCards(); 
    } else {
          console.log("Nee, deze kaarten zijn niet gelijk")
          this.resetExposedCards();
    }
    this.resetChosenCards()
  }

  hideCards() {
    console.log("We verbergen nu de gelijke kaarten in chosenCards: " + JSON.stringify(this.chosenCards));
    this.chosenCards.forEach(card => {
      card.hidden = true;
    });
  }

  resetExposedCards() {
    this.chosenCards.forEach(card => {
      card.exposed = false;
    });
  }

  resetChosenCards() {
    this.chosenCards = [];
    console.log("Reset uitgevoerd: " + JSON.stringify(this.chosenCards));
  }

  shuffleDeck() {
    this.cardDeck = this.shuffle(this.cardDeck);
  }

  // Methode van de docent meegekregen in de cursus Angular Development
  shuffle(array:any) {
    var m = array.length, t, i;
    // while there remain elements to shuffle 
    while(m) {
      // Pick a remaining element...
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    } 
    return array;
  }

}
