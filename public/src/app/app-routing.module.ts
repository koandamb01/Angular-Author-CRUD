import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { NewComponent } from './components/new/new.component';
import { EditComponent } from './components/edit/edit.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AuthorsComponent },
  { path: 'new', component: NewComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '**', component: PageNotFoundComponentComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
