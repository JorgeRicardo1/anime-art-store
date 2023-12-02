import { Component } from '@angular/core';

@Component({
  selector: 'app-decoration-bar',
  templateUrl: './decoration-bar.component.html',
  styleUrls: ['./decoration-bar.component.scss']
})
export class DecorationBarComponent {
  constructor(){
  }

  originalList: string[] = ['Art', 'Collectibles', 'Music', 'Photography', 'Trending','Soundtracka'];
  intercalatedList: string[] = this.intercalateWithAsterisks(this.originalList);

  intercalateWithAsterisks(list: string[]): string[] {
    const result: string[] = [];
    list.forEach((item) => {
      result.push('*');
      result.push(item);
    });
    result.push('*');
    return result;
  }
}

