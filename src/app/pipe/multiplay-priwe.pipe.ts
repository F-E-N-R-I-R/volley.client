import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'multiplay-priwe'
})
export class MultiplayPriwePipe implements
PipeTransform { 
	transform(items: any[]) {
		return	items.length === 1 ? items[0].name : items.length;
		 
	}

}
