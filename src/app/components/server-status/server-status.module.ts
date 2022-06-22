import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServerStatusComponent} from './server-status.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {ServerStatusExampleSheetComponent} from './server-status-sheet/server-status-sheet.component';
import {MatButtonModule} from '@angular/material/button';
export {ServerStatusComponent} from './server-status.component';
export {ServerStatusData} from './server-status-data';
export {health} from './server-status-data';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
	declarations: [ServerStatusExampleSheetComponent, ServerStatusComponent],
	exports: [ServerStatusExampleSheetComponent, ServerStatusComponent],
	imports: [
		CommonModule,
		MatExpansionModule,
		MatTooltipModule,
		MatButtonModule,
		MatBottomSheetModule,
	]
})
export class ServerStatusModule {}
