import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ActionLink } from '../models/actionlink.model';

@Injectable()
export class ActionLinkService {
    constructor(private _api: ApiService) { }

    getAll() {
        return this._api.get('/services/entity/rest/examples/actionlink');
    }

    getById(id: number) {
        return this._api.get('/services/entity/actionlink/get/' + id);
    }

    create(actionLink: ActionLink) {
        return this._api.post('/services/entity/actionlink', actionLink);
    }

    update(actionLink: ActionLink) {
        return this._api.post('/services/entity/actionlink/update', actionLink);
    }

    delete(id: number) {
        return this._api.delete('/services/entity/actionlink/delete/' + id);
    }

}
