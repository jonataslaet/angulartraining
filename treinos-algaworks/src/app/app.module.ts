import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWithCliComponent } from './components/greetings/hello-with-cli/hello-with-cli.component';
import { HelloWithMyhandsComponent } from './components/greetings/hello-with-myhands/hello-with-myhands.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWithCliComponent,
    HelloWithMyhandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
