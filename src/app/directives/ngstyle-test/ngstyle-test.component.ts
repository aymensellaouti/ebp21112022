import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-test',
  templateUrl: './ngstyle-test.component.html',
  styleUrls: ['./ngstyle-test.component.css']
})
export class NgstyleTestComponent implements OnInit {
  color = 'lightblue';
  bgc = 'gold';
  font = 'verdana';
  constructor() {}

  ngOnInit(): void {}
}
