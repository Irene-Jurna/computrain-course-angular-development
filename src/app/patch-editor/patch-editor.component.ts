import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPatch } from '../models/colorpatch';
import { ColorpatchPipe } from "../pipes/colorpatchPipe";

@Component({
    selector: 'app-patch-editor',
    standalone: true,
    templateUrl: './patch-editor.component.html',
    styleUrl: './patch-editor.component.css',
    imports: [FormsModule, ColorpatchPipe]
})
export class PatchEditorComponent {

  @Input() patch = new ColorPatch(0, 0, 0, 1, 'black');

  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

}
