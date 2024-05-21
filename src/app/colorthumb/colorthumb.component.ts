import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-colorthumb',
  standalone: true,
  imports: [],
  templateUrl: './colorthumb.component.html',
  styleUrl: './colorthumb.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ColorthumbComponent {

  @Input({required: true}) rgba = '';
  @Input({required: true}) name = '';

  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>(); 

  onClickEdit() {
    this.edit.emit();
  }
}
