import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';
import {InputNumberModule} from 'primeng/inputnumber';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ToolbarModule} from 'primeng/toolbar';

const PRIMENG_IMPORTS = [
  LayoutModule,
  TableModule,
  ButtonModule,
  InputTextModule,
  InputTextareaModule,
  CalendarModule,
  DialogModule,
  DropdownModule,
  ToastModule,
  CardModule,
  InputNumberModule,
  ConfirmDialogModule,
  MessagesModule,
  MessageModule,
  DynamicDialogModule,
  ToolbarModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...PRIMENG_IMPORTS
  ],
  exports: [
    ...PRIMENG_IMPORTS
  ],
  providers: []
})
export class PrimengImportsModule { }
