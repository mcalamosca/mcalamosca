import {trigger, transition, style, animate} from "@angular/animations";

export const floatIn = trigger('floatIn', [
  transition('* => *', [
    style({ opacity: 0, transform: 'translateY(-30px)' }), // Initial state
    animate('4s ease', style({ opacity: 1, transform: 'translateY(0)' })), // Final animation state
  ]),
])
