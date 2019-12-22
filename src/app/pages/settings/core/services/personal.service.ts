import { Injectable } from '@angular/core';
import { UTypes } from '@app/pages/users/core/types/users.types'

@Injectable()
export class PersonalService {
    public readonly bodyParams: UTypes.IBodyParam[] = [
        { name: 'height', min: 120, max: 220, color: 'primary' },
        { name: 'weight', min: 40, max: 140, color: 'primary' },
        { name: 'shoe_size', min: 30, max: 60, color: 'tertiary' },
        { name: 'chest_girt', min: 40, max: 150, color: 'secondary' },
        { name: 'waist', min: 40, max: 150, color: 'secondary' },
        { name: 'hip_girth', min: 40, max: 150, color: 'secondary' },
    ];
}
