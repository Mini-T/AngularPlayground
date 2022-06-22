export interface ServerStatusData {
	name: string;
	health: health;
	info: {
		artifact?: string;
		name?: string;
		time?: string;
		version?: string;
		group?: string;
		unknown?: unknown;
	};
}
export enum health {
	RUNNING = 'Running',
	WARNING = 'Warning',
	DOWN = 'Down'
}
