import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './cricketer-app.component';
import { CricketersListComponent } from './cricketers/cricketers-list.component';
import { MyHighlighterDirective } from 'app/directive/my-highlighter.directive';
import { CriketerDropDownService } from 'app/services/criketer-drop-down.service';
import {ResolveService} from 'app/routes/resolve-service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { CricketerComponent } from 'app/cricketer/cricketer.component';
import { appRouting } from "app/routes/cricket-app.routes";
import { CricketerService } from "app/services/cricketer.service";
import { CricketerDetailComponent } from './cricketer-detail/cricketer-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NextComponent } from './next/next.component';
//import { AuthGuardComponent} from 'app/routes/auth-guard';
//import { UnsavedComponent } from 'app/routes/unsaved';
@NgModule({
  declarations: [
    AppComponent,
    CricketersListComponent,
    CricketerComponent,
    MyHighlighterDirective,
    SearchPipe,
    OrderByPipe,
    CricketerDetailComponent,
    PageNotFoundComponent,
    NextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting
  ],
  providers: [CriketerDropDownService, CricketerService,ResolveService],
  bootstrap: [AppComponent]
})

export class AppModule { }
