import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWithCliComponent } from './components/greetings/hello-with-cli/hello-with-cli.component';
import { HelloWithMyhandsComponent } from './components/greetings/hello-with-myhands/hello-with-myhands.component';
import { FuncionarioCardComponent } from './components/funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './components/funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloWithCliComponent,
    HelloWithMyhandsComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    CampoColoridoDirective
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
