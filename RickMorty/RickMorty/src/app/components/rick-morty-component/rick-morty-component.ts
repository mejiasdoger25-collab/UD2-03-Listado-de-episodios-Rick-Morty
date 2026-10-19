import { Component, inject } from '@angular/core';
import { episodeService } from '../services/episode-service';

@Component({
  imports: [],
  selector: 'app-rick-morty-component',
  styleUrl: './rick-morty-component.css',
  templateUrl: './rick-morty-component.html',
})
export class RickMortyComponent {
  episodeServiceVar = inject(this.episodeService);
}
