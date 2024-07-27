import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  @Input() color: string = 'gold';

  constructor(private eleref: ElementRef, @Inject(DOCUMENT) private doc: Document, private render: Renderer2) {
    console.log("elemement ref ", this.eleref.nativeElement);

  }


  ngOnInit(): void {
    // this.eleref.nativeElement.style.backGroundColor = this.color;
    this.render.setStyle(this.eleref.nativeElement, 'backgroundColor', this.color);
  }
  // 11:37

  @HostListener('mouseenter') onMouseEnter() {
    this.render.setStyle(this.eleref.nativeElement, 'backgroundColor', 'pink');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(this.eleref.nativeElement, 'backgroundColor', 'white');
  }

}
