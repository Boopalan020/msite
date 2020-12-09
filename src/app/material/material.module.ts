import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const importedMaterial = [
  MatButtonModule
]

@NgModule({
  imports: [importedMaterial],
  exports : [importedMaterial]
})
export class MaterialModule { }
