import { Routes } from '@angular/router';
import { MemoryComponent } from './memory/memory.component';
import { ColorpatchesComponent } from './colorpatches/colorpatches.component';
import { ColorpatchesObservablesComponent } from './colorpatches-observables/colorpatches-observables.component';

export const routes: Routes = [
    { path: 'memory', component : MemoryComponent },
    { path: 'colorpatches', component: ColorpatchesComponent },
    { path: 'colorpatchesObservables', component: ColorpatchesObservablesComponent}
];
