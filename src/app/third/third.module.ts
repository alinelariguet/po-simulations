import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdComponent } from './third.component';
import { PoModule } from '@po-ui/ng-components';
import { ThirdRoutingModule } from './third-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PoModule,
    ThirdRoutingModule
  ],
  declarations: [ThirdComponent]
})
export class ThirdModule { }
