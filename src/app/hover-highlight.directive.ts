import { Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective /* implement OnInit */ {

  constructor (private elRef: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    this.render.setStyle(this.elRef.nativeElement, 'background-color','salmon');
  }
}
