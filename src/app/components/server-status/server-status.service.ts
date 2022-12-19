import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ServerStatusData} from './server-status-data';

@Injectable({
	providedIn: 'root'
})
export class ServerStatusService {
	serverClicked = new Subject<ServerStatusData>();
}
