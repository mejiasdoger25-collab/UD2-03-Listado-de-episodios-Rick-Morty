import { HttpClient } from '@angular/common/http';
import { Service } from '@angular/core';
import { inject } from '@angular/core/primitives/di';
import { RickMortyComponent } from '../components/rick-morty-component/rick-morty-component';
import { Observable } from 'rxjs';

@Service()
export class EpisodeService {

    http=inject(HttpClient);

    getAll(): Observable<RickMortyComponent> {
        return this.http.get<RickMortyComponent>('https://rickandmortyapi.com/api/episode');
    }

}
