import { Pipe, PipeTransform, TemplateRef, Type } from "@angular/core";

@Pipe({
  name: "isTemplateRef"
})
export class IsTemplateRefPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value instanceof TemplateRef;
  }
}

@Pipe({
  name: "isType"
})
export class IsTypePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value instanceof Type;
  }
}
