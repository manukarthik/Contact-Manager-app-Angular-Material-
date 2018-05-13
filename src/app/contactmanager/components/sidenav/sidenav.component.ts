import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
const SMALL_WIDTH_BREAKPOINT=720;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)

  users:Observable<User[]>

  constructor(zone : NgZone,private router: Router,private userService:UserService) {
    this.mediaMatcher.addListener(mql => 
    zone.run(()=> this.mediaMatcher= mql)
    )
   }
@ViewChild(MatSidenav) sidenav : MatSidenav

  ngOnInit() {
    this.users=this.userService.users
    this.userService.loadAll();
    
    this.router.events.subscribe(()=>{
        if(this.isScreenSmall())
        this.sidenav.close();
    })
  }

  isScreenSmall():boolean{
    return this.mediaMatcher.matches;
  }
}
