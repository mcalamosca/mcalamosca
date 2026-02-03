import { animate, style, transition, trigger } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition('* => *', [
    style({ opacity: 0 }), // Initial state
    animate('3s ease', style({ opacity: 1 })), // Final animation state
  ]),
]);
