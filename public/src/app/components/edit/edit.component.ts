import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthorService } from '../../author.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _authorService: AuthorService,
  ) { }

  _id: any;
  messages: any;
  editAuthor: any;
  ngOnInit() {
    this.editAuthor = {}
    this.messages = { author: "" };
    this.getId();
    this.getOneAuthor()
  }

  goHome() {
    this._router.navigate(['/']);
  }

  getId() {
    this._route.params.subscribe((params: Params) => {
      this._id = params['id'];
    });
  }

  getOneAuthor() {
    let obs = this._authorService.getOneAuthor(this._id);
    obs.subscribe(response => {
      if (response['status'] == false) {
        this.messages = "Something went while processing your request, Please reload the page!"
      }
      else if (response['author'] == null) {
        this.messages = "Something went while processing your request, Please reload the page!"
      }
      else {
        this.editAuthor = response['author'];
      }
    });
  }

  updateAuthor() {
    let obs = this._authorService.update(this.editAuthor);
    obs.subscribe(response => {
      if (response['status'] == false) {
        this.messages = response['messages'];
      }
      else {
        this.messages = response['messages'];
        setTimeout(() => { this.goHome() }, 2000);
      }
    });
  }

} 
