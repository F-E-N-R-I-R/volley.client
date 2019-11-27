import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'multiplayPreview'
})
export class MultiplayPreviewPipe implements
PipeTransform { 
	transform(items: any[]) {
		return	items.length === 1 ? items[0].name : items.length;
		 
	}

}
