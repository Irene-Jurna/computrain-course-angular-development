import { Injectable, inject } from "@angular/core";
import { ColorPatch } from "./colorpatch";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PatchesService {
    http = inject(HttpClient);

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

  // Patches stream aanmaken
  patches$: Observable<ColorPatch[]>

  getPatches():ColorPatch[]{
    return this.patches;
  }

  getPatches$():Observable<ColorPatch[]> {
    return this.patches$;
  }

    constructor() {
        this.patches$ = this.http.get<ColorPatch[]>('https://my-json-server.typicode.com/cmmnct/patchDemo/patches').pipe(
            map(patches => patches.map(patch => new ColorPatch(patch.r, patch.g, patch.b, patch.a, patch.name, patch.id)))
        );
    }
}