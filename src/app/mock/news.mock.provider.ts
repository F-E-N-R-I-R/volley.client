import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NTypes } from '@core/types';

@Injectable()
export class NewsMockProvider {
    constructor() {
    }

    getAllNews(): Observable<NTypes.INewsList> {
        return new BehaviorSubject({
            items: [
                {
                    id: 1,
                    title: 'New1',
                    picture: 'string',
                    description: 'Важно! Вчера в районе Москолевски,сознательными гражданами был пойман Онанист ' +
                        'рицедевист по приметам улыбчивый парень высокого роста с телосложением Гринча похитителя ' +
                        'рождества...',
                    category: NTypes.ECategory.FVU,
                    date: 'string',
                    created_by: 'string',
                },
                {
                    id: 2,
                    title: 'New2',
                    picture: 'string',
                    description: 'Внимание! Внимание! завтра в 15:00 будут прходить бои ветеранами шлюховых войск ' +
                        'всех приглашаем на отвратительное зрелище',
                    category: NTypes.ECategory.FVHO,
                    date: 'string',
                    created_by: 'string',
                },
                {
                    id: 3,
                    title: 'New3',
                    picture: 'string',
                    description: 'Новости из мира технологии учеными-технологами был разработан новый Плюмбус 2.1!! ' +
                        'Плюмбус 2.1 Теперь еще и с шплюхендорхом и более обьемным умпладихером!!',
                    category: NTypes.ECategory.FIVB,
                    date: 'string',
                    created_by: 'string',
                },
            ]
        });
    }

    getItemNews(): Observable<NTypes.INews> {
        return new BehaviorSubject({
            id: 1,
            title: 'New1',
            picture: 'string',
            description: 'string',
            category: NTypes.ECategory.FVU,
            date: 'string',
            created_by: 'string',
        });
    }

    getItem(item): Observable<NTypes.INews> {
        return new BehaviorSubject(item);
    }
}
