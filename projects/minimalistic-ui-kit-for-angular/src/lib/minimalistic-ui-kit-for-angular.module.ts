import { NgModule } from '@angular/core';
import { MinimalisticUiKitForAngularComponent } from './minimalistic-ui-kit-for-angular.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    MinimalisticUiKitForAngularComponent,
    ButtonComponent,
  ],
  imports: [
  ],
  exports: [ButtonComponent]
})
export class MinimalisticUiKitForAngularModule { }
