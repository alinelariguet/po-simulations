import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second.component';
import { PoModule } from '@po-ui/ng-components';
import { SecondRoutingModule } from './second-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PoModule,
    SecondRoutingModule
  ],
  declarations: [SecondComponent]
})
export class SecondModule { }
