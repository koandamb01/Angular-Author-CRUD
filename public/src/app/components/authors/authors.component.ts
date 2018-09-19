import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../author.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(
    private _authorService: AuthorService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  authors: any;
  messages: any;
  ngOnInit() {
    this.messages = "";
    this.getAuthors()
  }

  getAuthors() {
    let obs = this._authorService.getAll();
    obs.subscribe(response => {
      if (response['status'] == false) {
        this.messages = "Something went while processing your request, Please reload the page!"
      }
      else if (response['authors'] == null) {
        this.messages = "There no data in the system yet! Please be the first to add an author";
      }
      else {
        this.authors = response['authors'];
      }
    })
  }

  deleteAuthor(author) {
    let obs = this._authorService.delete(author);
    obs.subscribe(response => {
      if (response['status'] == false) {
        this.messages = response['messages'];
      }
      else {
        this.messages = response['messages'];
        setTimeout(() => { this.ngOnInit() }, 2000);
      }
    });
  }
}
