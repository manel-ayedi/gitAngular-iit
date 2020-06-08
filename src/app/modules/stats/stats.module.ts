import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';
import { StatsComponent } from './stats.component';
import {SharedModule} from "../../shared/shared.module";
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [StatsComponent],
    imports: [
        CommonModule,
        StatsRoutingModule,
        SharedModule,
        ChartsModule
    ]
})
export class StatsModule { }
