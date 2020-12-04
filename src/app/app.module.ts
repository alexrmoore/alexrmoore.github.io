import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LockedRoomsService } from './locked-rooms.service';
import { EndscreenComponent } from './endscreen/endscreen.component';
import { ReflectionRoom1Component } from './reflection-room1/reflection-room1.component';
import { ReflectionRoom2LockedComponent } from './reflection-room2-locked/reflection-room2-locked.component';
import { ReflectionRoom2Component } from './reflection-room2/reflection-room2.component';
import { ReflectionRoom3Component } from './reflection-room3/reflection-room3.component';
import { ReflectionRoom4Component } from './reflection-room4/reflection-room4.component';
import { InterferenceRoom1Component } from './interference-room1/interference-room1.component';
import { InterferenceRoom2Component } from './interference-room2/interference-room2.component';
import { InterferenceRoom4Component } from './interference-room4/interference-room4.component';
import { InterferenceRoom5Component } from './interference-room5/interference-room5.component';
import { InterferenceRoom3Component } from './interference-room3/interference-room3.component';
import { InterferenceRoom3LockedComponent } from './interference-room3-locked/interference-room3-locked.component';
import { PhotoelectricRoom1Component } from './photoelectric-room1/photoelectric-room1.component';
import { PhotoelectricRoom2Component } from './photoelectric-room2/photoelectric-room2.component';
import { PhotoelectricRoom3Component } from './photoelectric-room3/photoelectric-room3.component';
import { PhotoelectricRoom3LockedComponent } from './photoelectric-room3-locked/photoelectric-room3-locked.component';
import { PhotoelectricRoom4Component } from './photoelectric-room4/photoelectric-room4.component';
import { OverallRoom1Component } from './overall-room1/overall-room1.component';
import { OverallRoom1LockedComponent } from './overall-room1-locked/overall-room1-locked.component';
import { CompleteRoomComponent } from './complete-room/complete-room.component';
import { ReflectionRoom1Info1Component } from './reflection-room1-info1/reflection-room1-info1.component';
import { ReflectionRoom2Info1Component } from './reflection-room2-info1/reflection-room2-info1.component';
import { ReflectionRoom3Info1Component } from './reflection-room3-info1/reflection-room3-info1.component';
import { ReflectionRoom4Info1Component } from './reflection-room4-info1/reflection-room4-info1.component';
import { ReflectionRoom3Puzzle1Component } from './reflection-room3-puzzle1/reflection-room3-puzzle1.component';
import { ReflectionRoom4Puzzle1Component } from './reflection-room4-puzzle1/reflection-room4-puzzle1.component';
import { TimerComponent } from './timer/timer.component';
import { InterferenceRoom1Info1Component } from './interference-room1-info1/interference-room1-info1.component';
import { InterferenceRoom2Info1Component } from './interference-room2-info1/interference-room2-info1.component';
import { InterferenceRoom3Info1Component } from './interference-room3-info1/interference-room3-info1.component';
import { InterferenceRoom4Info1Component } from './interference-room4-info1/interference-room4-info1.component';
import { InterferenceRoom5Info1Component } from './interference-room5-info1/interference-room5-info1.component';
import { PhotoelectricRoom1Info1Component } from './photoelectric-room1-info1/photoelectric-room1-info1.component';
import { PhotoelectricRoom2Info1Component } from './photoelectric-room2-info1/photoelectric-room2-info1.component';
import { PhotoelectricRoom3Info1Component } from './photoelectric-room3-info1/photoelectric-room3-info1.component';
import { PhotoelectricRoom4Info1Component } from './photoelectric-room4-info1/photoelectric-room4-info1.component';
import { ReflectionRoom2Puzzle1Component } from './reflection-room2-puzzle1/reflection-room2-puzzle1.component';
import { PhotoelectricRoom3Puzzle1Component } from './photoelectric-room3-puzzle1/photoelectric-room3-puzzle1.component';
import { InterferenceRoom3Puzzle1Component } from './interference-room3-puzzle1/interference-room3-puzzle1.component';
import { InstructionScreenComponent } from './instruction-screen/instruction-screen.component';
import { OverallRoom1Puzzle1Component } from './overall-room1-puzzle1/overall-room1-puzzle1.component';
import { PhotoelectricRoom4Puzzle1Component } from './photoelectric-room4-puzzle1/photoelectric-room4-puzzle1.component';
import { InterferenceRoom4Puzzle1Component } from './interference-room4-puzzle1/interference-room4-puzzle1.component';
import { AnonymousIdentifierService } from './anonymous-identifier.service';
import { PhotoelectricRoom5Component } from './photoelectric-room5/photoelectric-room5.component';
import { PhotoelectricRoom5Info1Component } from './photoelectric-room5-info1/photoelectric-room5-info1.component';
import { PhotoelectricRoom5Info2Component } from './photoelectric-room5-info2/photoelectric-room5-info2.component';
import { OverallRoom1Info1Component } from './overall-room1-info1/overall-room1-info1.component';
import { OverallRoom1Info2Component } from './overall-room1-info2/overall-room1-info2.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'instructions', component: InstructionScreenComponent },
  { path: 'endscreen', component: EndscreenComponent},

  { path: 'reflection_room1', component: ReflectionRoom1Component },
  { path: 'reflection_room2', component: ReflectionRoom2Component },
  { path: 'reflection_room2_locked', component: ReflectionRoom2LockedComponent },
  { path: 'reflection_room3', component: ReflectionRoom3Component },
  { path: 'reflection_room4', component: ReflectionRoom4Component },

  { path: 'reflection_room1_info1', component: ReflectionRoom1Info1Component },
  { path: 'reflection_room2_info1', component: ReflectionRoom2Info1Component },
  { path: 'reflection_room3_info1', component: ReflectionRoom3Info1Component },
  { path: 'reflection_room4_info1', component: ReflectionRoom4Info1Component },
  { path: 'reflection_room2_puzzle1', component: ReflectionRoom2Puzzle1Component },
  { path: 'reflection_room3_puzzle1', component: ReflectionRoom3Puzzle1Component },
  { path: 'reflection_room4_puzzle1', component: ReflectionRoom4Puzzle1Component },

  { path: 'interference_room1', component: InterferenceRoom1Component},
  { path: 'interference_room2', component: InterferenceRoom2Component},
  { path: 'interference_room3', component: InterferenceRoom3Component},
  { path: 'interference_room3_locked', component: InterferenceRoom3LockedComponent},
  { path: 'interference_room4', component: InterferenceRoom4Component},
  { path: 'interference_room5', component: InterferenceRoom5Component},

  { path: 'interference_room1_info1', component: InterferenceRoom1Info1Component},
  { path: 'interference_room2_info1', component: InterferenceRoom2Info1Component},
  { path: 'interference_room3_info1', component: InterferenceRoom3Info1Component},
  { path: 'interference_room4_info1', component: InterferenceRoom4Info1Component},
  { path: 'interference_room5_info1', component: InterferenceRoom5Info1Component},
  { path: 'interference_room3_puzzle1', component: InterferenceRoom3Puzzle1Component},
  { path: 'interference_room4_puzzle1', component: InterferenceRoom4Puzzle1Component},

  { path: 'photoelectric_room1', component: PhotoelectricRoom1Component},
  { path: 'photoelectric_room2', component: PhotoelectricRoom2Component},
  { path: 'photoelectric_room3', component: PhotoelectricRoom3Component},
  { path: 'photoelectric_room3_locked', component: PhotoelectricRoom3LockedComponent},
  { path: 'photoelectric_room4', component: PhotoelectricRoom4Component},
  { path: 'photoelectric_room5', component: PhotoelectricRoom5Component},

  { path: 'photoelectric_room1_info1', component: PhotoelectricRoom1Info1Component},
  { path: 'photoelectric_room2_info1', component: PhotoelectricRoom2Info1Component},
  { path: 'photoelectric_room3_info1', component: PhotoelectricRoom3Info1Component},
  { path: 'photoelectric_room4_info1', component: PhotoelectricRoom4Info1Component},
  { path: 'photoelectric_room3_puzzle1', component: PhotoelectricRoom3Puzzle1Component},
  { path: 'photoelectric_room4_puzzle1', component: PhotoelectricRoom4Puzzle1Component},
  { path: 'photoelectric_room5_info1', component: PhotoelectricRoom5Info1Component},
  { path: 'photoelectric_room5_info2', component: PhotoelectricRoom5Info2Component},

  { path: 'overall_room1', component: OverallRoom1Component},
  { path: 'overall_room1_locked', component: OverallRoom1LockedComponent},
  { path: 'overall_room1_info1', component: OverallRoom1Info1Component},
  { path: 'overall_room1_info2', component: OverallRoom1Info2Component},

  { path: 'overall_room1_puzzle1', component: OverallRoom1Puzzle1Component},

  { path: 'complete_room', component: CompleteRoomComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EndscreenComponent,
    ReflectionRoom1Component,
    ReflectionRoom2LockedComponent,
    ReflectionRoom2Component,
    ReflectionRoom3Component,
    ReflectionRoom4Component,
    InterferenceRoom1Component,
    InterferenceRoom2Component,
    InterferenceRoom4Component,
    InterferenceRoom3Component,
    InterferenceRoom3LockedComponent,
    PhotoelectricRoom1Component,
    PhotoelectricRoom2Component,
    PhotoelectricRoom3Component,
    PhotoelectricRoom3LockedComponent,
    PhotoelectricRoom4Component,
    InterferenceRoom5Component,
    OverallRoom1Component,
    OverallRoom1LockedComponent,
    CompleteRoomComponent,
    ReflectionRoom1Info1Component,
    ReflectionRoom2Info1Component,
    ReflectionRoom3Info1Component,
    ReflectionRoom4Info1Component,
    ReflectionRoom3Puzzle1Component,
    ReflectionRoom4Puzzle1Component,
    TimerComponent,
    InterferenceRoom1Info1Component,
    InterferenceRoom2Info1Component,
    InterferenceRoom3Info1Component,
    InterferenceRoom4Info1Component,
    InterferenceRoom5Info1Component,
    PhotoelectricRoom1Info1Component,
    PhotoelectricRoom2Info1Component,
    PhotoelectricRoom3Info1Component,
    PhotoelectricRoom4Info1Component,
    ReflectionRoom2Puzzle1Component,
    PhotoelectricRoom3Puzzle1Component,
    InterferenceRoom3Puzzle1Component,
    InstructionScreenComponent,
    OverallRoom1Puzzle1Component,
    PhotoelectricRoom4Puzzle1Component,
    InterferenceRoom4Puzzle1Component,
    PhotoelectricRoom5Component,
    PhotoelectricRoom5Info1Component,
    PhotoelectricRoom5Info2Component,
    OverallRoom1Info1Component,
    OverallRoom1Info2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    DragDropModule
  ],
  exports: [RouterModule],
  providers: [LockedRoomsService, AnonymousIdentifierService, HomeComponent, TimerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
