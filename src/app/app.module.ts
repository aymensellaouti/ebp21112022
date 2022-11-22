import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { SommeComponent } from './components/somme/somme.component';
import { FilsComponent } from './components/fils/fils.component';
import { PereComponent } from './components/pere/pere.component';
import { CvComponent } from './cv/cv/cv.component';
import { ItemComponent } from './cv/item/item.component';
import { ListComponent } from './cv/list/list.component';
import { DetailComponent } from './cv/detail/detail.component';
import { NgstyleTestComponent } from './directives/ngstyle-test/ngstyle-test.component';
import { MiniwordComponent } from './directvies/miniword/miniword.component';
import { NgClassTestComponent } from './directives/ng-class-test/ng-class-test.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    SommeComponent,
    FilsComponent,
    PereComponent,
    CvComponent,
    ItemComponent,
    ListComponent,
    DetailComponent,
    NgstyleTestComponent,
    MiniwordComponent,
    NgClassTestComponent,
    HighlightDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
