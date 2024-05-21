import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPatch } from '../models/colorpatch';
import { ColorthumbComponent } from '../colorthumb/colorthumb.component';
import { PatchEditorComponent } from '../patch-editor/patch-editor.component';

@Component({
  selector: 'app-colorpatches',
  standalone: true,
  imports: [FormsModule, ColorthumbComponent, PatchEditorComponent],
  templateUrl: './colorpatches.component.html',
  styleUrl: './colorpatches.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorpatchesComponent {

  name = "Irene"
  editState = false;

  currentPatch = new ColorPatch(56, 87, 98, 1, "smoke");
  editPatch = new ColorPatch(0, 0, 0, 1, '');

  patches:ColorPatch[] = [
    new ColorPatch(250, 246, 246, 1, 'snow'),
    new ColorPatch(11, 29, 81, 1, 'pen blue'),
    new ColorPatch(255, 87, 20, 1, 'giants orange'),
    new ColorPatch(218, 237, 189, 1, 'tea green'),
    new ColorPatch(27, 231, 255, 1, 'electric blue'),
    new ColorPatch(255, 230, 109, 1, 'naples yellow'),
    new ColorPatch(239, 164, 139, 1, 'atomic tangerine'),
    new ColorPatch(161, 74, 118, 1, 'magenta haze')
  ];

  onDeletePatch(patch:ColorPatch) {
    this.patches.splice(this.patches.indexOf(patch),1);
  }

  onEditPatch(patch:ColorPatch) {
    this.currentPatch = patch;
    // Kopie maken van de variabele 
    this.editPatch = new ColorPatch(patch.r, patch.g, patch.b, patch.a, patch.name);
    this.editState = true;
  }

  onCancelEdit() {
    this.editState = false;
    this.currentPatch = new ColorPatch(0, 0, 0, 1, '');
  }

  onSavePatch() {
    this.editState = false;
    if (this.patches.indexOf(this.currentPatch) === -1) {
      this.patches.push(this.editPatch);
    } else {
      this.patches[this.patches.indexOf(this.currentPatch)] = this.editPatch;
    }
    this.editPatch = new ColorPatch(0, 0, 0, 1, '');
  }

  onClickAdd() {
    this.editState = true;
  }

}