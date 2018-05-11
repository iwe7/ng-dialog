### install
```sh
yarn add iwe7-ng-dialog
```

```html
<button (click)="dialog.show(body)">show templateRef dialog</button>

<ng-template #body>
  <button (click)="showComp()">show component dialog</button>
</ng-template>
```

```ts
import { DialogService } from 'ng-dialog';
constructor(private dialog: DialogService) {}
showComp() {
  this.dialog.show(TestDialogComponent);
}
```
