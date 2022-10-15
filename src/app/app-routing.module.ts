import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddArtistComponent } from "./artist/pages/add-artist/add-artist.component";
import { MainArtistComponent } from "./artist/pages/main-artist/main-artist.component";

const routes: Routes = [
  {
    path:'',
    component: MainArtistComponent,
    pathMatch: "full"
  },
  {
    path: 'add',
    component: AddArtistComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting{}
