import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { SayHelloService } from '../../services/say-hello.service';
import { TodoService } from '../../todo/service/todo.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [];
  date = new Date();

  selectedCv: Cv | null = null;
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService,
    private todoService: TodoService
  ) {
    this.cvs = [
      new Cv(
        1,
        'sellaouti',
        'aymen',
        'teacher',
        'rotating_card_profile2.png',
        40,
        '1111'
      ),
      new Cv(
        2,
        'sellaouti',
        'skander',
        'dev',
        'rotating_card_profile3.png',
        40,
        '1111'
      ),
      new Cv(2, 'sellaouti', 'skander', 'dev', '   ', 40, '1111'),
    ];
  }

  ngOnInit(): void {
    this.loggerService.logger('je suis le cvComponent');
    this.sayHelloService.hello();
  }
  selectCv(cv: Cv): void {
    this.selectedCv = cv;
    this.todoService.logger();
  }
}
