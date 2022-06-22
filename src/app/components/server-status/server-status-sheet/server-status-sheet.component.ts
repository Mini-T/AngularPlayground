import {Component, Inject} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import {health, ServerStatusData} from '../server-status-data';
import {ServerStatusService} from '../server-status.service';

@Component({
	selector: 'zds-bottom-sheet-overview-example-sheet',
	templateUrl: 'server-status-sheet.component.html',
	styleUrls: ['../server-status.component.scss']
})
export class ServerStatusExampleSheetComponent {
	status = health;
	displayGrid: number;

	constructor(
		@Inject(MAT_BOTTOM_SHEET_DATA) public data: ServerStatusData[],
		private readonly serverStatusService: ServerStatusService
	) {
		this.displayGrid = 0;
	}
	changeDisplay() {
		if (this.displayGrid < 1) {
			this.displayGrid = 1;
		} else {
			this.displayGrid = 0;
		}
	}
	openLink(event: MouseEvent, serverData: ServerStatusData): void {
		event.preventDefault();
		this.serverStatusService.serverClicked.next(serverData);
	}
}
