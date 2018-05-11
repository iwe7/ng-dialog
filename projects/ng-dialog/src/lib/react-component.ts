import { ElementRef, Renderer2, Injector } from "@angular/core";
import { ConfigService } from "./config.service";

export abstract class ReactComponent {
  public ele: ElementRef;
  public render: Renderer2;
  public config: ConfigService;

  constructor(public prefixCls: string, public injector: Injector) {
    this.ele = this.injector.get(ElementRef);
    this.render = this.injector.get(Renderer2);
    this.config = this.injector.get(ConfigService);
    this.render.addClass(
      this.ele.nativeElement,
      `${this.config.prefixCls}${
        this.prefixCls.length > 0 ? "-" + this.prefixCls : ""
      }`
    );
  }
}
