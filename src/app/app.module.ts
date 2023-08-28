import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { LightboxModule } from 'ngx-lightbox';
import { FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './mycomponents/navbar/navbar.component';
import { HomeComponent } from './mycomponents/home/home.component';
import { FooterComponent } from './mycomponents/footer/footer.component';
import { HeroComponent } from './mycomponents/hero/hero.component';
import { UpcomingEventsComponent } from './mycomponents/events/upcoming-events/upcoming-events.component';
import { ContactComponent } from './mycomponents/contact/contact.component';
import { EventhomeComponent } from './mycomponents/events/eventhome/eventhome.component';
import { SponsorsComponent } from './mycomponents/sponsors/sponsors.component';
import { GalarySliderComponent } from './mycomponents/gallary/galary-slider/galary-slider.component';
import { ProgramComponent } from './mycomponents/program/program.component';
import { EuphoriaComponent } from './mycomponents/euphoria/euphoria.component';
import { VelocityComponent } from './mycomponents/events/velocity/velocity/velocity.component';
import { VelocityGRComponent } from './mycomponents/events/velocity/velocity-gr/velocity-gr.component';
import { ThunderboltComponent } from './mycomponents/events/thunderbolt/thunderbolt.component';
import { SolastaComponent } from './mycomponents/events/solasta/solasta/solasta.component';
import { GallaryComponent } from './mycomponents/gallary/gallary/gallary.component';
import { DancerulesComponent } from './mycomponents/events/solasta/dancerules/dancerules.component';
import { MusicrulesComponent } from './mycomponents/events/solasta/musicrules/musicrules.component';
import { DramarulesComponent } from './mycomponents/events/solasta/dramarules/dramarules.component';
import { MusicfestComponent } from './mycomponents/events/solasta/musicfest/musicfest.component';
import { DancefestComponent } from './mycomponents/events/solasta/dancefest/dancefest.component';
import { DramafestComponent } from './mycomponents/events/solasta/dramafest/dramafest.component';
import { ArswaComponent } from './mycomponents/arswa/arswa.component';
import { FineartsComponent } from './mycomponents/events/Fineart/finearts/finearts.component';
import { FineartRulesComponent } from './mycomponents/events/Fineart/fineart-rules/fineart-rules.component';
import { AFFASINATOComponent } from './mycomponents/events/AFFASINATO/affasinato/affasinato.component';
import { LittmaniaComponent } from './mycomponents/events/littmania/littmania/littmania.component';
import { AboutComponent } from './mycomponents/about/about.component';
import { PrivicypolicyComponent } from './mycomponents/policy/privicypolicy/privicypolicy.component';
import { RefundpolicyComponent } from './mycomponents/policy/refundpolicy/refundpolicy.component';
import { TermconditionsComponent } from './mycomponents/policy/termconditions/termconditions.component';
import { AccomodationsComponent } from './mycomponents/accomodations/accomodations.component';
import { LittmaniaRulesComponent } from './mycomponents/events/littmania/littmania-rules/littmania-rules.component';
import { PageNotFoundComponent } from './mycomponents/page-not-found/page-not-found.component';
import { CricketComponent } from './mycomponents/events/velocity/velocityrules/cricket/cricket.component';
import { FootballComponent } from './mycomponents/events/velocity/velocityrules/football/football.component';
import { BasketballComponent } from './mycomponents/events/velocity/velocityrules/basketball/basketball.component';
import { VollyballComponent } from './mycomponents/events/velocity/velocityrules/vollyball/vollyball.component';
import { LawntennsiComponent } from './mycomponents/events/velocity/velocityrules/lawntennsi/lawntennsi.component';
import { TabletennsiComponent } from './mycomponents/events/velocity/velocityrules/tabletennsi/tabletennsi.component';
import { FutsalComponent } from './mycomponents/events/velocity/velocityrules/futsal/futsal.component';
import { ChessComponent } from './mycomponents/events/velocity/velocityrules/chess/chess.component';
import { BadmintonComponent } from './mycomponents/events/velocity/velocityrules/badminton/badminton.component';
import { KabbadiComponent } from './mycomponents/events/velocity/velocityrules/kabbadi/kabbadi.component';
import { InformalsComponent } from './mycomponents/events/informals/informals/informals.component';
import { InformalsRulesComponent } from './mycomponents/events/informals/informals-rules/informals-rules.component';
import { ThunderboltRulesComponent } from './mycomponents/events/thunderbolt/thunderbolt-rules/thunderbolt-rules.component';
import { PyrexiagotComponent } from './mycomponents/events/solasta/pyrexiagot/pyrexiagot.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    HeroComponent,
    UpcomingEventsComponent,
    ContactComponent,
    EventhomeComponent,
    SponsorsComponent,
    GalarySliderComponent,
    ProgramComponent,
    EuphoriaComponent,
    VelocityComponent,
    VelocityGRComponent,
    ThunderboltComponent,
    SolastaComponent,
    GallaryComponent,
    DancerulesComponent,
    MusicrulesComponent,
    DramarulesComponent,
    MusicfestComponent,
    DancefestComponent,
    DramafestComponent,
    ArswaComponent,
    FineartsComponent,
    FineartRulesComponent,
    AFFASINATOComponent,
    LittmaniaComponent,
    AboutComponent,
    PrivicypolicyComponent,
    RefundpolicyComponent,
    TermconditionsComponent,
    AccomodationsComponent,
    LittmaniaRulesComponent,
    PageNotFoundComponent,
    CricketComponent,
    FootballComponent,
    BasketballComponent,
    VollyballComponent,
    LawntennsiComponent,
    TabletennsiComponent,
    FutsalComponent,
    ChessComponent,
    BadmintonComponent,
    KabbadiComponent,
    InformalsComponent,
    InformalsRulesComponent,
    ThunderboltRulesComponent,
    PyrexiagotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgImageSliderModule,
    NgxUiLoaderModule,
    LightboxModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'velocity', component: VelocityComponent},
      {path: 'thunderbolt', component: ThunderboltComponent},
      {path: 'solasta', component: SolastaComponent},
      {path: 'gallary', component: GallaryComponent},
      {path: 'ARSWA-Team', component: ArswaComponent},
      {path: 'dance', component: DancefestComponent},
      {path: 'music', component: MusicfestComponent},
      {path: 'drama', component: DramafestComponent},
      {path: 'dance-rules', component: DancerulesComponent},
      {path: 'music-rules', component: MusicrulesComponent},
      {path: 'drama-rules', component: DramarulesComponent},
      {path: 'kalakriti', component: FineartsComponent},
      {path: 'chronos', component: AFFASINATOComponent},
      {path: 'littmania', component: LittmaniaComponent},
      {path: 'about', component: AboutComponent},
      {path: 'Privicy-policy', component: PrivicypolicyComponent},
      {path: 'Refund-policy', component: RefundpolicyComponent},
      {path: 'Term-conditions', component: TermconditionsComponent},
      {path: 'accomodations', component: AccomodationsComponent},      
      {path: 'littmania-rules', component: LittmaniaRulesComponent},    
      {path: 'velocity-Cricket-rule', component: CricketComponent},  
      {path: 'velocity-Football-rule', component: FootballComponent},  
      {path: 'velocity-Basketball-rule', component: BasketballComponent},  
      {path: 'velocity-Volleball-rule', component: VollyballComponent},  
      {path: 'velocity-Lawn-tennis-rule', component: LawntennsiComponent},  
      {path: 'velocity-Table-tennis-rule', component: TabletennsiComponent},  
      {path: 'velocity-Futsal-rule', component: FutsalComponent},  
      {path: 'velocity-Badminton-rule', component: BadmintonComponent},  
      {path: 'velocity-Kabbadi-rule', component: KabbadiComponent},   
      {path: 'velocity-Chess-rule', component: ChessComponent},   
      {path: 'Alfresco', component: InformalsComponent},   
      {path: 'alfresco-rules', component: InformalsRulesComponent},   
      {path: 'thunderbolt-rules', component: ThunderboltRulesComponent},
      {path: 'Kalakriti-rules', component: FineartRulesComponent},
      {path: 'Pyrexia-got-talent-rules', component: PyrexiagotComponent},
      {path: '**', component: HomeComponent}

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
