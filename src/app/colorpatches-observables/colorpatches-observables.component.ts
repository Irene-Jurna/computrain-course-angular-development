import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPatch } from '../models/colorpatch';
import { ColorthumbComponent } from '../colorthumb/colorthumb.component';
import { PatchEditorComponent } from '../patch-editor/patch-editor.component';
import { PatchesService } from '../models/patches.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-colorpatches',
  standalone: true,
  imports: [FormsModule, ColorthumbComponent, PatchEditorComponent, AsyncPipe],
  templateUrl: './colorpatches-observables.component.html',
  styleUrl: './colorpatches-observables.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ColorpatchesObservablesComponent implements OnInit {

  patchesService = inject(PatchesService);

  name = "Irene"
  editState = false;

  currentPatch = new ColorPatch(56, 87, 98, 1, "smoke");
  editPatch = new ColorPatch(0, 0, 0, 1, '');
  patches$!: BehaviorSubject<ColorPatch[]>;

  ngOnInit() {
    this.patches$ = this.patchesService.getPatches$(); 
  }

  onDeletePatch(patch:ColorPatch) {
    this.patchesService.delete(patch);
  }

  onEditPatch(patch:ColorPatch) {
    this.currentPatch = patch;
    this.editPatch = new ColorPatch(patch.r, patch.g, patch.b, patch.a, patch.name);
    this.editState = true;
  }

  onCancelEdit() {
    this.editState = false;
    this.currentPatch = new ColorPatch(0, 0, 0, 1, '');
  }

  onSavePatch() {
    this.editState = false;
    if (this.currentPatch.name) {
      this.patchesService.update(this.currentPatch, this.editPatch);
    } else {
      this.patchesService.create(this.editPatch);
    }

    this.editPatch = new ColorPatch(0, 0, 0, 1, '');
    this.currentPatch = new ColorPatch(0, 0, 0, 1, '');
  } 

  onClickAdd() {
    this.editPatch = new ColorPatch(0, 0, 0, 1, '');
    this.currentPatch = new ColorPatch(0, 0, 0, 1, '');
    this.editState = true;
  }

}