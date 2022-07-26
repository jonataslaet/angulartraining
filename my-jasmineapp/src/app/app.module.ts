import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeTargetClickEventDirective } from './directives/change-target-click-event.directive';
import { TelaComponent } from './presentation/tela/tela.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaComponent,
    ChangeTargetClickEventDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
