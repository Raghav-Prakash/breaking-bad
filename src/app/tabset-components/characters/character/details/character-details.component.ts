import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  TemplateRef
} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Character } from 'app/models/character';

@Component({
  selector: 'character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.less']
})
export class CharacterDetailsComponent implements OnChanges {
  /**
   * The character whose details will be presented in the view.
   */
  @Input() character: Character;
  /**
   * Reference to the details template.
   */
  @ViewChild('details', { static: true }) details: TemplateRef<any>;
  /**
   * Event emitter letting the parent component know that the details component
   * can be closed.
   */
  @Output() closeDetails: EventEmitter<void> = new EventEmitter();
  /**
   * Reference to the modal.
   */
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) {}

  ngOnChanges() {
    this.modalRef = this.modalService.show(this.details);
  }

  /**
   * When closing the details modal, hide the modal and emit the close event to
   * the parent component.
   */
  onCloseDetails() {
    this.modalRef.hide();
    this.closeDetails.emit();
  }
}
