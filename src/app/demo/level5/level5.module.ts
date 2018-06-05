import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FuryCardModule } from '../../core/common/card/card.module';
import { PageModule } from '../../core/common/page/page.module';
import { Level5RoutingModule } from './level5-routing.module';
import { Level5Component } from './level5.component';

@NgModule({
  imports: [
    CommonModule,
    Level5RoutingModule,
    FuryCardModule,
    PageModule
  ],
  declarations: [Level5Component]
})
export class Level5Module {
}
