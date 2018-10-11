import { ClarityIcons } from '@clr/icons';
import { AfterViewInit } from '@angular/core';
import { animate } from '@angular/animations';
import { trigger, transition, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';

import { ClrShapeBug, ClrShapeLightbulb, ClrShapeWorld, ClrShapeClock, ClrShapeTools } from '@clr/icons/shapes/essential-shapes';
import {
  ClrShapeCog,
  ClrShapeExclamationTriangle,
  ClrShapeAngleDouble,
  ClrShapeAngle,
  ClrShapeInfoStandard
} from '@clr/icons/shapes/core-shapes';
import { ClrShapeStore } from '@clr/icons/shapes/commerce-shapes';

import { ClrShapePause } from '@clr/icons/shapes/media-shapes';
import { ClrShapeStar } from '@clr/icons/shapes/social-shapes';
import {
  ClrShapeCertificate,
  ClrShapeDashboard,
  ClrShapeDownloadCloud,
  ClrShapeFloppy,
  ClrShapeInstall,
  ClrShapeUninstall,
  ClrShapeUploadCloud
} from '@clr/icons/shapes/technology-shapes';
import { ClrShapePaintRoller } from '@clr/icons/shapes/text-edit-shapes';
import { OptionsService } from './options.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ant2';

  constructor(public ms: MainService, public os: OptionsService) {
    ClarityIcons.add({
      bug: ClrShapeBug,
      lightbulb: ClrShapeLightbulb,
      world: ClrShapeWorld,
      clock: ClrShapeClock,
      cog: ClrShapeCog,
      store: ClrShapeStore,
      'exclamation-triangle': ClrShapeExclamationTriangle,
      'angle-double': ClrShapeAngleDouble,
      angle: ClrShapeAngle,
      pause: ClrShapePause,
      infoStandard: ClrShapeInfoStandard,
      floppy: ClrShapeFloppy,
      'paint-roller': ClrShapePaintRoller,
      install: ClrShapeInstall,
      uninstall: ClrShapeUninstall,
      tools: ClrShapeTools,
      star: ClrShapeStar,
      dashboard: ClrShapeDashboard,
      certificate: ClrShapeCertificate,
      'upload-cloud': ClrShapeUploadCloud,
      'download-cloud': ClrShapeDownloadCloud
    });

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // used setTimeout can disable 'Expression has changed after it was checked' error
    setTimeout(() => {
      this.ms.start();
    }, 1);
  }

}
