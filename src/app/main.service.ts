import { ToastrService } from 'ngx-toastr';
import { Injectable, Inject } from '@angular/core';
import { Game } from './models/game';
import { DOCUMENT } from '@angular/platform-browser';
import { OptionsService } from './options.service';


const UP_INTERVAL = 250;
const SAVE_INTERVAL = 1000 * 60 * 5;


@Injectable({
  providedIn: 'root'
})
export class MainService {
  public show = false;
  last: number;

  game: Game;

  themeClarity: HTMLLinkElement;
  themeMy: HTMLLinkElement;

  constructor(
    public options: OptionsService,
    public toastr: ToastrService,
    @Inject(DOCUMENT) private document: Document
  ) {

    this.themeClarity = this.document.createElement('link');
    this.themeClarity.rel = 'stylesheet';
    this.themeClarity.type = 'text/css';
    this.document.querySelector('head').appendChild(this.themeClarity);

    this.themeMy = this.document.createElement('link');
    this.themeMy.rel = 'stylesheet';
    this.themeMy.type = 'text/css';
    this.document.querySelector('head').appendChild(this.themeMy);

    this.last = Date.now();

    if (!this.game) {
      this.game = new Game(this);
    }

  }

  start() {
    this.show = true;
    // setInterval(this.update.bind(this), UP_INTERVAL);
    // setInterval(this.save.bind(this, true), SAVE_INTERVAL);
  }
  update() {
    const now = Date.now();
    const diff = now - this.last;
    // TODO update logic

    this.last = now;
  }

  save(autosave = false) {
    try {
      const save = this.getSave();
    } catch (ex) {

    }
  }

  getSave() {
    return ;
  }

  setTheme() {
    const themeClarity = false
    ? 'clr-ui-dark.min.css'
    : 'clr-ui.min.css';
  if (this.themeClarity.href !== themeClarity) {
    this.themeClarity.href = themeClarity;
  }

  const myTheme = 'assets/' + (false ? 'dark.css' : 'light.css');
  if (myTheme !== this.themeMy.href) {
    this.themeMy.href =
      'assets/' + (false ? 'dark.css' : 'light.css');
  }
  }


}
