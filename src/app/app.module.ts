import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
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
import { RainbowDirective } from './directives/rainbow.directive';
import { BtcToUsdPipe } from './pipes/btc-to-usd.pipe';
import { TabFibComponent } from './components/tab-fib/tab-fib.component';
import { FiboPipe } from './pipes/fibo.pipe';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { LoggerService } from './services/logger.service';
import { TodoComponent } from './todo/component/todo/todo.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Nf404Component } from './components/nf404/nf404.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { LoginComponent } from './component/login/login.component';

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
    RainbowDirective,
    BtcToUsdPipe,
    TabFibComponent,
    FiboPipe,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    NavbarComponent,
    Nf404Component,
    DetailsCvComponent,
    TestFormComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
