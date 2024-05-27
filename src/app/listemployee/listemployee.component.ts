import { Component } from '@angular/core';
import { EmpoyeeService } from '../empoyeService/empoyee.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent {
  Empoyes:any
  search:string=''
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
    this._Empoyee.isEdite=true
    this._Empoyee.Empoyebutton="Edite"
    this.router.navigate([`empoyeupdate/${id}`])
  
  }
}
