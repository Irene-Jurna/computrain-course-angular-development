import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() name = '';
  @Input() exposed: boolean = false;
  @Input() hidden: boolean = false;
  @Output() cardClicked = new EventEmitter<void>;

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

