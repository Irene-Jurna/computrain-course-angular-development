import { Routes } from '@angular/router';
import { MemoryComponent } from './memory/memory.component';
import { ColorpatchesComponent } from './colorpatches/colorpatches.component';

export const routes: Routes = [
    { path: 'memory', component : MemoryComponent },
    { path: 'colorpatches', component: ColorpatchesComponent }
];
