import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  webData;
  daata;

  constructor(private dataService: DataService) {}

  flattenData(data) {
    const res = {};

    for (const key of Object.keys(data)) {{
      res[key.toLowerCase()] = [];

      for (const innerKey of Object.keys(data[key])) {
        const temp = {};
        temp['name'] = innerKey.split(/(?=[A-Z])/).join(' ');
        temp['value'] = data[key][innerKey];
        res[key.toLowerCase()].push(temp);
      }
    }}

    return res;
  }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.webData = [];

      for (const key of Object.keys(data)) {
        if (key === '_id') {
          continue;
        }

        const temp = this.flattenData(data[key]);
        temp['name'] = key;
        temp['image'] = 'assets/' + key.toLowerCase() + '.png';
        this.webData.push(temp);
      }
    });
  }
}
