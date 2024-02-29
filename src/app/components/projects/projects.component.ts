import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private elRef: ElementRef) {}

  scrollIntoView() {
    this.elRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}