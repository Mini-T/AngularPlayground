import {
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output
} from '@angular/core';
import {health, ServerStatusData} from './server-status-data';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {ServerStatusExampleSheetComponent} from './server-status-sheet/server-status-sheet.component';
import {ServerStatusService} from './server-status.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
	selector: 'zds-server-status',
	templateUrl: './server-status.component.html',
	styleUrls: ['./server-status.component.scss']
})
export class ServerStatusComponent implements OnInit, OnDestroy {
	status = health;
	@Output() serverClicked = new EventEmitter<ServerStatusData>();
	statuses!: {[key: string]: number};
	private readonly destroyed$ = new Subject<void>();

	private _data: ServerStatusData[] = [];

	constructor(
		private readonly bottomSheet: MatBottomSheet,
		private readonly serverStatusService: ServerStatusService
	) {}

	get data(): ServerStatusData[] {
		return this._data;
	}

	@Input() set data(value: ServerStatusData[]) {
		this._data = value;
		this.statuses = this.statusCount();
	}

	openComponentSheetMenu() {
		if (this._data != null) {
			const bottomSheetRef = this.bottomSheet.open(
				ServerStatusExampleSheetComponent,
				{
					data: this._data
				}
			);
		}
	}

	ngOnInit(): void {
		this.serverStatusService.serverClicked
			.pipe(takeUntil(this.destroyed$))
			.subscribe(data => this.serverClicked.emit(data));
	}

	ngOnDestroy() {
		this.destroyed$.next();
		this.destroyed$.complete();
	}

	private statusCount(): {[key: string]: number} {
		const ret = {
			[health.RUNNING]: 0,
			[health.WARNING]: 0,
			[health.DOWN]: 0
		};
		if (this._data != null) {
			this._data.forEach(server => {
				switch (server.health) {
					case health.RUNNING:
						ret[health.RUNNING]++;
						break;
					case health.WARNING:
						ret[health.WARNING]++;
						break;

					default:
						ret[health.DOWN]++;
				}
			});
			return ret;
		} else {
			return ret;
		}
	}
}
