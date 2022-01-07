import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;
  
  constructor(private faceSnapsService: FaceSnapService,
    private router: Router) {}
  
  ngOnInit(): void {
  
      this.buttonText = 'Oh snap!'
  }
  onSnap() {
  if (this.buttonText === 'Oh snap!') {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.buttonText = 'oups un snap';
  } else {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.buttonText = 'Oh snap!'
  }
  }
  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
      }
  
}
