import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { FirstComponent } from './components/first/first.component';
import { TodoComponent } from './todo/component/todo/todo.component';
import { MiniwordComponent } from './directvies/miniword/miniword.component';
import { ColorComponent } from './components/color/color.component';
import { ROUTES } from './config/routes.config';
import { SecondComponent } from './components/second/second.component';
import { Nf404Component } from './components/nf404/nf404.component';

const routes: Routes = [
  { component: FirstComponent, path: ROUTES.home },
  { component: CvComponent, path: ROUTES.cv },
  { component: TodoComponent, path: ROUTES.todo },
  { component: MiniwordComponent, path: 'word' },
  { component: ColorComponent, path: 'color/:couleur' },
  { component: Nf404Component, path: ROUTES.joker },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
