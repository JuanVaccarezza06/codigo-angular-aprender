import { Component } from '@angular/core';
import { MovieService } from '../../services/movie-service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(public mService: MovieService){}
}
