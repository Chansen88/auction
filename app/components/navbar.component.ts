import {Component} from 'angular2/core';

@Component({
    selector: 'nav-bar',
    template: `<nav class="navbar">
                <p class="navbar-item is-centered">
                  <a class="link is-info" href="#">Home</a>
                </p>
                <p class="navbar-item is-centered">
                <img src="/images/logo.png" alt="" style="height: 33px;">
                </p>
                <p class="navbar-item is-centered">
                  <a class="link is-info" href="#">Account</a>
                </p>
              </nav>`,
})
export class NavBarComponent { }
