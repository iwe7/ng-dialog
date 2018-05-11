import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  prefixCls: string = "rmc-dialog";
  constructor() {}
}
