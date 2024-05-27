import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPatch } from '../models/colorpatch';
import { ColorthumbComponent } from '../colorthumb/colorthumb.component';
import { PatchEditorComponent } from '../patch-editor/patch-editor.component';
import { PatchesService } from '../models/patches.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-colorpatches',
  standalone: true,
  imports: [FormsModule, ColorthumbComponent, PatchEditorComponent, AsyncPipe],
  templateUrl: './colorpatches.component.html',
  styleUrl: './colorpatches.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

// Implement toevoegen voor ngOnInit
export class ColorpatchesComponent implements OnInit {

  patchesService = inject(PatchesService);

  name = "Irene"
  editState = false;

  currentPatch = new ColorPatch(56, 87, 98, 1, "smoke");
  editPatch = new ColorPatch(0, 0, 0, 1, '');
  patches!: ColorPatch[];
  patches$!: Observable<ColorPatch[]>;

  // LifeCycleHooks 
  ngOnInit() {
    this.patches = this.patchesService.getPatches();
    this.patches$ = this.patchesService.getPatches$(); 
  }

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