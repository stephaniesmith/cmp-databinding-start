import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('con');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('change:', changes);
  }

  ngOnInit() {
    console.log('init');
    console.log(this.header.nativeElement.textContent);
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('do');
  }

  ngAfterContentInit() {
    console.log('after con');
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('after con checked');
  }

  ngAfterViewInit() {
    console.log('after view');
    console.log(this.header.nativeElement.textContent);

  }

  ngAfterViewChecked() {
    console.log('after view checked');
  }

  ngOnDestroy() {
    console.log('destroy');
  }

}
