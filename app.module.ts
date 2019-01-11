import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* routing */
import { AppRoutingModule } from './app-routing.module';
/* layout */
import { LayoutModule } from './layout/layout.module';
/* pages */
import { GlobalViewModule } from './pages/global-view/global-view.module';
import { LocationModule } from './pages/location/location.module';
import { ParentalControlModule } from './pages/parental-control/parental-control.module';
/* components */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalViewModule,
    LayoutModule,
    LocationModule,
    ParentalControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
