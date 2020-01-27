import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdekNgMultiSelectComponent } from './sdek-ng-multiselect.component';
import { SdekNgClickOutsideDirective } from './sdek-ng-click-outside.directive';
import { SdekNgListFilterPipe } from './sdek-ng-list-filter.pipe';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [SdekNgMultiSelectComponent, SdekNgClickOutsideDirective, SdekNgListFilterPipe],
  exports: [SdekNgMultiSelectComponent]
})

export class SdekNgMultiSelectDropDownModule {
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: SdekNgMultiSelectDropDownModule
      };
    }
}
