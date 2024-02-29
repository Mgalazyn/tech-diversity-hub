import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  selectedPdf: string | null = null; // Variable to store the selected PDF

  selectPdf(pdf: string): void {
    this.selectedPdf = pdf;
  }

  goToOffer(url: string) {
    window.open(url, "_blank");
  }
}