import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() cardNumber: string;
  @Input() ownerName: string;

  get formattedCardNumber(): string {
    // Implementa la lógica de formateo del número de tarjeta aquí
    // Por ejemplo, puedes ocultar algunos dígitos y mostrar solo los últimos cuatro
    return '**** **** **** ' + this.cardNumber.slice(-4);
  }
}
