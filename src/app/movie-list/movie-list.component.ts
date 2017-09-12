import { Component,OnInit,Input } from '@angular/core';
import { MoviesService } from '../app.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

	
	@Input() display: any;

		constructor(private service: MoviesService) {}
	 addFav(fm:any) {
		this.service.addtofav(fm);
	 }
	ngOnInit() {
		
	}

	// save() {
	// 	console.log(this.state);
	// }
}