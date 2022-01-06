import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;

  ngOnInit(): void {
      this.mySnap = new FaceSnap(
      'Archibald',
      'mon meilleur ami depuis tout petit',
      new Date(),
      6,
      'https://img.huffingtonpost.com/asset/60fa6f884100000d7681bf15.jpeg?cache=CygCXsZoKQ&ops=scalefit_630_noupscale'
      )
  }
}
