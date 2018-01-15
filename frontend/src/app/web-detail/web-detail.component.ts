import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-detail',
  templateUrl: './web-detail.component.html',
  styleUrls: ['./web-detail.component.scss']
})
export class WebDetailComponent implements OnInit {
  @Input() data;

  private _total = 0;

  constructor() {}

  ngOnInit() {
    if (this.data.severities.length > 0) {
      this._total = this.data.severities.reduce((agg, sev) => agg + sev.value, 0);
    }

    this.data.types = this.data.types.map(type => {
      type.image = 'assets/icon-' + type.name.split(' ').join('').toLowerCase() + '.png';
      type.name = type.name.toUpperCase();
      return type;
    });
  }

  getPerimeter(radius: number, sev): number {
    return Math.PI * 2 * radius;
  }

  getColor(sevName): string {
    let ret;

    switch (sevName.toLowerCase()) {
      case ('low'):
        ret = '#41b0d5';
        break;
      case ('medium'):
        ret = '#f3ab10';
        break;
      case ('high'):
        ret = '#d54141';
        break;
    }

    return ret;
  }

  getOffset(radius: number, index: number): number {
    let percent = 0;

    for (let i = 0; i < index ; i++) {
      percent += ((this.data.severities[i].value) / this._total);
    }

    const perimeter = Math.PI * -2 * radius;
    return perimeter * percent;
  }

}
