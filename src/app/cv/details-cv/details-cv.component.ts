import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { ROUTES } from '../../config/routes.config';
import { ToastrService } from 'ngx-toastr';

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
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cvService.getCvById(+params['id']).subscribe({
        next: (cv: Cv) => (this.cv = cv),
        error: () => {
          this.router.navigate([ROUTES.cv]);
        },
      });
    });
    this.activatedRoute.queryParams.subscribe((qp) => {
      console.log('qp : ', qp);
    });
  }
  delete(): void {
    if (this.cv) {
      this.cvService.deleteCv(this.cv.id).subscribe({
        next: (success) => {
          this.router.navigate([ROUTES.cv]);
          this.toastr.success(`Le cv de ${this.cv?.name} a été supprimé avec succès`)
        },
        error: (e) => {
          this.toastr.error('Veuillez contacter l admin');
        },
      });
    }
  }
}
