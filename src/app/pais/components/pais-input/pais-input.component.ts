import {Component, EventEmitter, Output, OnInit, Input} from '@angular/core';
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<any> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  @Input() placeholder: string = '';

  buscar() {
    this.onEnter.emit( this.termino );
  }

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( valor => {
        this.onDebounce.emit(valor);
    })
  }

  teclaPresionada () {
    this.debouncer.next(this.termino)
  }

}
