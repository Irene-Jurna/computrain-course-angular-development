import { Pipe, PipeTransform } from "@angular/core";
import { ColorPatch } from "../models/colorpatch";

@Pipe({
    name: 'colorToString', 
    standalone: true,
})

export class ColorpatchPipe implements PipeTransform {
    transform(patch:ColorPatch): string { 
        return `rgba(${patch.r},${patch.g}, ${patch.b}, ${patch.a})`
    }
}