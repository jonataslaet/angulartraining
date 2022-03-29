import { Component, ElementRef } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'treinos-algaworks';

  adicionar(name: HTMLInputElement): void {
    this.title = name.value;
  }

  alterarNome(event: any) {
    this.title = event.target.value;
  }
}
