import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  modalDialog: any;
  @Input() titleFooter: string;
  @Output() openDialog = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSave() {
    this.openDialog.emit('true');
  }
}
