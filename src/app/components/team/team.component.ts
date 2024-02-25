import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements AfterViewInit {
  ngAfterViewInit() {
    const cardsWrapper = document.querySelector('.cards-wrapper') as HTMLElement;
    if (cardsWrapper) {
        const updateScroll = () => {
            const scrollMiddle = (cardsWrapper.scrollWidth - cardsWrapper.clientWidth * 2);
            cardsWrapper.scrollLeft = scrollMiddle;
        };

        // Call the function initially and on window resize
        updateScroll();
        window.addEventListener('resize', updateScroll);

        // Add event listener for left arrow button
        const scrollLeftButton = document.querySelector('.scroll-left') as HTMLElement;
        scrollLeftButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Stop event propagation
            cardsWrapper.scrollLeft -= cardsWrapper.clientWidth;
        });

        // Add event listener for right arrow button
        const scrollRightButton = document.querySelector('.scroll-right') as HTMLElement;
        scrollRightButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Stop event propagation
            cardsWrapper.scrollLeft += cardsWrapper.clientWidth;
        });
    }
  }
}
