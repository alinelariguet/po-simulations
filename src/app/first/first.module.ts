import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { PoModule } from '@po-ui/ng-components';
import { FirstRoutingModule } from './first-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PoModule,
    FirstRoutingModule
  ],
  declarations: [FirstComponent]
})
export class FirstModule { }
