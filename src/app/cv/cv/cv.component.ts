import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { SayHelloService } from '../../services/say-hello.service';
import { TodoService } from '../../todo/service/todo.service';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';
import { ROUTES } from '../../config/routes.config';
import { distinctUntilChanged } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [];
  nb = 0;
  date = new Date();

  /*   selectedCv: Cv | null = null; */
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService,
    private todoService: TodoService,
    private cvService: CvService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loggerService.logger('je suis le cvComponent');
    this.sayHelloService.hello();
    this.cvService.getCvs().subscribe({
      next: (cvs: Cv[]) => {
        this.cvs = cvs;
      },
      error: (e) => {
        this.cvs = this.cvService.getFakeCvs();
        this.toastr.warning(
          'Les données sont fake, veuillez contacter l admin'
        );
      },
    });
    this.cvService.selectCv$
      .pipe(distinctUntilChanged())
      .subscribe((jeMenFou) => this.nb++);
  }
  /*   selectCv(cv: Cv): void {
    this.selectedCv = cv;
    this.todoService.logger();
  } */
  home() {
    this.router.navigate([ROUTES.home]);
  }
}
