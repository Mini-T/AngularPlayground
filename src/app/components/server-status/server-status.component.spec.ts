import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {ServerStatusComponent} from './server-status.component';
import {health} from './server-status-data';
import {MatTooltipModule} from '@angular/material/tooltip';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ServerStatusExampleSheetComponent} from './server-status-sheet/server-status-sheet.component';
import {ServerStatusModule} from './server-status.module';
import {By} from '@angular/platform-browser';

const data = [
	{
		name: 'Server1',
		health: health.RUNNING,
		info: {
			artifact: 'some text',
			name: 'name',
			time: '2022-03-02T15:31:42.167Z',
			version: '1.2.1',
			group: 'ch.admin.zas.transverse'
		}
	},
	{
		name: 'Server2',
		health: health.RUNNING,
		info: {
			artifact: 'some text',
			name: 'name',
			time: '2022-03-02T15:31:42.167Z',
			version: '1.2.1',
			group: 'ch.admin.zas.transverse'
		}
	},
	{
		name: 'Server3',
		health: health.WARNING,
		info: {
			artifact: 'some text',
			name: 'name',
			time: '2022-03-02T15:31:42.167Z',
			version: '1.2.1',
			group: 'ch.admin.zas.transverse'
		}
	},
	{
		name: 'Server4',
		health: health.DOWN,
		info: {
			artifact: 'some text',
			name: 'name',
			time: '2022-03-02T15:31:42.167Z',
			version: '1.2.1',
			group: 'ch.admin.zas.transverse'
		}
	}
];
describe('ServerStatusComponent', () => {
	let component: ServerStatusComponent;
	let bottomSheet: HTMLElement;
	let fixture: ComponentFixture<ServerStatusComponent>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				ObliqueTestingModule,
				HttpClientTestingModule,
				RouterTestingModule,
				MatTooltipModule,
				MatBottomSheetModule,
				NoopAnimationsModule,
				ServerStatusModule
			]
		})
			.overrideModule(ServerStatusModule, {
				set: {entryComponents: [ServerStatusExampleSheetComponent]}
			})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ServerStatusComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should open the status panel at the bottom of the page', () => {
		component.data = data;
		fixture.detectChanges();
		let response = spyOn(component, 'openComponentSheetMenu');
		let clickable = fixture.debugElement.query(By.css('.server-status-top'));
		expect(clickable).toBeTruthy();
		clickable.triggerEventHandler('click', null);

		expect(response).toHaveBeenCalled();
	});
	it('should create check for component.data existence', () => {
		expect(component.data.length).toEqual(0);
		const topBar = fixture.debugElement.query(By.css('.nulldata'));
		expect(topBar).toBeTruthy();
		fixture.detectChanges();
	});
});
