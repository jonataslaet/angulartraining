import { Component } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'treinos-algaworks';

  adicionar(): void {
    const randomNumber = Math.round(Math.random() * 100);
    this.title = `Laet ${randomNumber}`;
    console.log("Funcionário adicionado.")
  }

  alterarNome(event: any) {
    this.title = event.target.value;
  }
}
