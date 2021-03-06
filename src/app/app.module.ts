import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';

// Services
import { LogService } from './services/log.service';

// Components
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './main-components/not-found-page/not-found-page.component';
import { DemoComponent } from './main-components/demo/demo.component';
import { AboutComponent } from './main-components/about/about.component';
import { ReversePipe } from './custom-pipes/reverse.pipe';
import { SpinnerComponent } from './shared-components/spinner/spinner.component';
import { AnalysisFormComponent } from './main-components/demo/analysis-form/analysis-form.component';
import { SimpleToasterComponent } from './shared-components/simple-toaster/simple-toaster.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyBqxNTm3NLPmDs2rcXEean4sVlaxgV2OoU',
  authDomain: 'health-nlp-88b08.firebaseapp.com',
  databaseURL: 'https://health-nlp-88b08.firebaseio.com',
  projectId: 'health-nlp-88b08',
  storageBucket: 'health-nlp-88b08.appspot.com',
  messagingSenderId: '329948122061'
};

const appRoutes: Routes = [
  { path: '', component: DemoComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundPageComponent }
];



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    DemoComponent,
    AboutComponent,
    ReversePipe,
    SpinnerComponent,
    AnalysisFormComponent,
    SimpleToasterComponent
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
