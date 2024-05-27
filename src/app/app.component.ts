import { Component } from '@angular/core';
import { EmpoyeeService } from './empoyeService/empoyee.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApplication';
  Empoyes:any
  constructor (private _Empoyee:EmpoyeeService,private router:Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getEmpoyes()
  }
  getEmpoyes(){
    this._Empoyee.getEmpoyee().subscribe((data)=>{
      this.Empoyes=data
      
    })
  }
  empoyeDelete(id:any){
    this._Empoyee.deleteEmpoye(id).subscribe((data)=>{
      this.getEmpoyes()
    })
  }
  Empoyebuttonvalue:string="Edite"

  empoyeEdit(id:any){
    this.Empoyebuttonvalue="Edite"
    this.router.navigate([`empoyeupdate/${id}`])
  
  }
}
