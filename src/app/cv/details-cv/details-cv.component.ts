import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { ROUTES } from '../../config/routes.config';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent implements OnInit {
  cv: Cv | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cv = this.cvService.getCvById(+params['id']);
      if (!this.cv) {
        this.router.navigate([ROUTES.cv]);
      }
    });
    this.activatedRoute.queryParams.subscribe((qp) => {
      console.log('qp : ', qp);
    });
  }
  delete(): void {
    if (this.cv) {
      this.cvService.deleteCv(this.cv);
      this.router.navigate([ROUTES.cv]);
    }
  }
}
