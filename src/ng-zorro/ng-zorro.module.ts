/*================ IMPORTS ================*/
import { NgModule } from '@angular/core';

/*================ ICONS ================*/
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, es_ES } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

/*================ MODULE COMPONENTS ================*/

/*================ CONST ICONS ================*/

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};

const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

const NG_ZORRO_COMPONENTS = [];

@NgModule({
  imports: [...NG_ZORRO_COMPONENTS],
  exports: [...NG_ZORRO_COMPONENTS],
  providers: [
    { provide: NZ_I18N, useValue: es_ES },
    { provide: NZ_ICONS, useValue: icons },
  ],
})
export class NgZorroModule {}
