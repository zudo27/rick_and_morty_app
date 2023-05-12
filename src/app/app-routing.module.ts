import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: '/character-list',
    pathMatch: 'full'
  },
  {
    path: 'character-list',
    component: CharacterListComponent
  },
  { 
    path: 'character-detail/:id', 
    component: CharacterDetailComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
