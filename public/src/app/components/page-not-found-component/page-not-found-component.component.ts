import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../author.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-page-not-found-component',
  templateUrl: './page-not-found-component.component.html',
  styleUrls: ['./page-not-found-component.component.css']
})
export class PageNotFoundComponentComponent implements OnInit {

  constructor(
    private _authorService: AuthorService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  goHome() {
    this._router.navigate(['/']);
  }
}
