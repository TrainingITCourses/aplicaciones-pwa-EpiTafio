import { Component } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { UpdateAvailableEvent } from '@angular/service-worker/src/low_level';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'speed';
  public developerVersion = '1.4';
  constructor (swUpdate: SwUpdate, swPush: SwPush) {
    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe(
        (event: UpdateAvailableEvent) => {
          const msg =
            'current: ' +
            event.current.hash +
            '. Load new: ' +
            event.available.hash +
            ' ?';
          if (confirm(msg)) {
            window.location.reload();
          }
        }
      );
    }
  swPush
  .requestSubscription({
    serverPublicKey: 'unaAPID_PUBLUC_KEY'
  })
  .then(sub =>
    swPush.messages.subscribe(m => console.log(m))
  )
  .catch(err => console.error('No es posible subscribirse'));
}
}
