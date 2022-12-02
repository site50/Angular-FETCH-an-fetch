import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 5, name: '333Dr. Nice' },
      { id: 6, name: 'Bombasto' },
      { id: 7, name: 'Celeritas' },
      { id: 8, name: 'Magneta' },

    ];
    return { heroes };
  }

}
