import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ServerStatusExampleSheetComponent} from './server-status-sheet.component';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import {health, ServerStatusData} from '../server-status-data';
import {By} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('ServerStatusExampleSheetComponent', () => {
	let component: ServerStatusExampleSheetComponent;
	let fixture: ComponentFixture<ServerStatusExampleSheetComponent>;

	describe('ServerStatusExampleSheetComponent with data', () => {
		const compData = [
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

		beforeEach(async () => {
			await TestBed.configureTestingModule({
				declarations: [ServerStatusExampleSheetComponent],
				providers: [
					{
						provide: MAT_BOTTOM_SHEET_DATA,
						useValue: compData
					}
				],
				schemas: [CUSTOM_ELEMENTS_SCHEMA]
			}).compileComponents();
		});

		beforeEach(() => {
			fixture = TestBed.createComponent(ServerStatusExampleSheetComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
			expect(component.data).toBeTruthy();
			expect(component.data.length).toEqual(4);
		});
		it('should detect 4 elements on the panel', () => {
			const serverStatusDisplayer = fixture.debugElement.queryAll(
				By.css('.statusBar')
			);
			expect(serverStatusDisplayer.length).toEqual(compData.length);
		});
		it('should detect 2 Running elements on the panel', () => {
			const serverStatusRunning = fixture.debugElement.queryAll(
				By.css('.icons.running')
			);
			expect(serverStatusRunning.length).toEqual(2);
		});
		it('should detect 1 Down element on the panel', () => {
			const serverStatusDown = fixture.debugElement.queryAll(
				By.css('.icons.down')
			);
			expect(serverStatusDown.length).toEqual(1);
		});
		it('should detect 1 Warning element on the panel', () => {
			const serverStatusWarning = fixture.debugElement.queryAll(
				By.css('.icons.warning')
			);
			expect(serverStatusWarning.length).toEqual(1);
		});
	});
	describe('ServerStatusExampleSheetComponent without data', () => {
		const compData: ServerStatusData[] = [];

		beforeEach(async () => {
			await TestBed.configureTestingModule({
				declarations: [ServerStatusExampleSheetComponent],
				providers: [
					{
						provide: MAT_BOTTOM_SHEET_DATA,
						useValue: compData
					}
				],
				schemas: [CUSTOM_ELEMENTS_SCHEMA]
			}).compileComponents();
		});

		beforeEach(() => {
			fixture = TestBed.createComponent(ServerStatusExampleSheetComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeTruthy();
			expect(component.data).toBeTruthy();
			expect(component.data.length).toEqual(0);
		});
		it('should see 0 elements on the panel', () => {
			const serverStatusDisplayer = fixture.debugElement.queryAll(
				By.css('.statusBar')
			);
			expect(serverStatusDisplayer.length).toEqual(compData.length);
		});
	});
});
