import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})

// doCheck implementeren voor de lifeCycleHook 
// Hier beter een kaart implementeren? In plaats van de losse name en exposed 
export class CardComponent {
  @Input() name = '';
  @Input() exposed: boolean = false;
  @Input() hidden: boolean = false;
  @Output() cardClicked = new EventEmitter<void>;

  // ngDoCheck(): void {
  //   if(this.cardClicked && this.exposed && !this.hidden) {
  //     let sound = this.playAudio(this.name);
  //   }
  // }

  onClickCard() {
    this.cardClicked.emit();
    this.playAudio(this.name);
  }

playAudio(name: string) {
  if (!this.exposed) {
    const audio = new Audio(`assets/snd/${name}.wav`);
    audio.play();
  }
}

}

