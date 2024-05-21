import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPatch } from '../models/colorpatch';

@Component({
  selector: 'app-patch-editor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './patch-editor.component.html',
  styleUrl: './patch-editor.component.css'
})
export class PatchEditorComponent {

  @Input() patch = new ColorPatch(0, 0, 0, 1, 'black');

  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

}
