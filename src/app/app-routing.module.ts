import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { AnimalComponent } from './animal/animal.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //redirect to home if there is no other route 
  { path: '**', component: NotFoundComponent } //this is a page not found component 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
