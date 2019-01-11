import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AccordionModule, AlertModule, ButtonsModule, CarouselModule, CollapseModule, DatepickerModule,
  BsDropdownModule, ModalModule, PaginationModule, PopoverModule, ProgressbarModule, RatingModule,
  SortableModule, TabsModule, TimepickerModule, TooltipModule, TypeaheadModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    DatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  exports: [
    AccordionModule,
    AlertModule,
    ButtonsModule,
    CarouselModule,
    CollapseModule,
    DatepickerModule,
    BsDropdownModule,
    ModalModule,
    PaginationModule,
    PopoverModule,
    ProgressbarModule,
    RatingModule,
    SortableModule,
    TabsModule,
    TimepickerModule,
    TooltipModule,
    TypeaheadModule
  ]
})
export class AppBootstrapModule { }
