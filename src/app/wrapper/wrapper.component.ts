import { dialogStatic } from './wrapper-static';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss',
})
export class WrapperComponent implements OnInit {
  dialogStaticElement: any = dialogStatic;
  dialogList: any = dialogStatic.listItems;
  selectedDialogList: any = [];
  visible: boolean = false;
  ngOnInit(): void {}

  showDialog() {
    this.visible = true;
  }


  reorderList(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.selectedDialogList, event.previousIndex, event.currentIndex);
  }

  handleOptionChange(ele: any) {
    if (ele === null || ele === undefined) return;
    const index = this.selectedDialogList.indexOf(ele);

    index > -1
      ? this.selectedDialogList.splice(index, 1)
      : this.selectedDialogList.push(ele);
  }

}
