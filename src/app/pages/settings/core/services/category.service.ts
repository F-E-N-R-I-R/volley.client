import { Injectable } from '@angular/core';
import { UTypes } from '@app/pages/users/core/types/users.types';
import { EnumValues } from 'enum-values';

@Injectable()
export class CategoryService {
	public categories = EnumValues.getNames(UTypes.ECategory);
    // public readonly categories: UTypes.ICategory[] = [
    // { name: 'FIRST', color: 'vua-primary' },
    // { name: 'SECOND', color: 'vua-primary' },
    // { name: 'THIRD', color: 'vua-primary' },
    // { name: 'FYR', color: 'vua-primary'  },
    // { name: 'SYR', color: 'vua-primary' },
    // { name: 'TYR', color: 'vua-primary' },
    // { name: 'CMSU', color: 'vua-primary'},
    // { name: 'MSU', color: 'vua-primary' },
    // { name: 'MSWC', color: 'vua-primary' },
    // ]
}