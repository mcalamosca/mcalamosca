import { animate, state, style, transition, trigger } from '@angular/animations';

export const fade = trigger('fadeInAndOut', [
  state(
    'show',
    style({
      opacity: 1,
    })
  ),
  state(
    'hide',
    style({
      opacity: 0,
    })
  ),
  transition('show => hide', [animate('0.5s')]),
  transition('hide => show', [animate('0.5s')]),
]);
