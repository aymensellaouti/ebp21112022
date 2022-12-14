import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() cv: Cv | null = null;
  constructor(
    private embaucheService: EmbaucheService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.cvService.selectCv$.subscribe((cv: Cv) => (this.cv = cv));
  }
  embaucher() {
    if (this.cv) {
      if (this.embaucheService.embaucher(this.cv)) {
        this.toastr.success(
          `Le cv de ${this.cv.firstname} ${this.cv.name} a été ajouté avec succès`
        );
      } else {
        this.toastr.warning(
          `Le cv de ${this.cv.firstname} ${this.cv.name} est déjà pré selectionné`
        );
      }
    }
  }
}
