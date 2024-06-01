
import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpoyeeService } from '../empoyeService/empoyee.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-empoyee-form',
  templateUrl: './empoyee-form.component.html',
  styleUrls: ['./empoyee-form.component.css']
})
export class EmpoyeeFormComponent implements OnInit {
  empoyeeFormGrop!:FormGroup;
  erroralert:boolean=false;
  submitbtn:boolean=false;
  Empoyebuttonvalue:string=this._Empoyee.Empoyebutton;
  
  
  constructor(private _Empoyee:EmpoyeeService,private parmasId:ActivatedRoute, private router:Router) { }
  ngOnInit(): void {
    this.formcoltionEmpoyee()
    this.editEmpoye()
    console.log(this.parmasId.snapshot.params?.['id']);
    
  }

  formcoltionEmpoyee(){
    this.empoyeeFormGrop=new FormGroup({
      ename:new FormControl('',[Validators.required,Validators.minLength(3)]),
      ework:new FormControl('',[Validators.required]),
      eage:new FormControl('',[Validators.required]),
    })
  }
  get namevalidation(){return this.empoyeeFormGrop.get('ename')}
  get workvalidation(){return this.empoyeeFormGrop.get('ework')}
  get agevalidation(){return this.empoyeeFormGrop.get('eage')}

  empoyeForm(){
    if(this.empoyeeFormGrop.invalid && this.empoyeeFormGrop.value.ename=='' && this.empoyeeFormGrop.value.ework=='' && this.empoyeeFormGrop.value.eage==''){
     this.erroralert=true
   }    
   if(this.empoyeeFormGrop.value.ename=='' || this.empoyeeFormGrop.value.ework=='' || this.empoyeeFormGrop.value.eage=='') {
     this.submitbtn=true
   }
   console.log("this",this._Empoyee.isEdite);
  
   if(this._Empoyee.isEdite==true){
     
     this._Empoyee.isEdite=false
     // patch
     this._Empoyee.putEmpoye(this.parmasId.snapshot.params?.['id'],this.empoyeeFormGrop.value).subscribe((data)=>{
       alert("Empoye Update....")
       this.empoyeeFormGrop.reset()
      })
      this.router.navigate([`empoyeList`])
      this._Empoyee.Empoyebutton='Submit'
      
    }else{
     console.log("this",this.empoyeeFormGrop.value);
     if(this.empoyeeFormGrop.valid){
       this._Empoyee.postEmpoye({
        ename:this.empoyeeFormGrop.value.ename,
        ework:this.empoyeeFormGrop.value.ework,
        eage:this.empoyeeFormGrop.value.eage,
       }).subscribe((data)=>{
        console.log("data",data);
        
        alert("Empoye Add....")
        this.empoyeeFormGrop.reset()
      })
     }                   
   }
  }

  editEmpoye(){
    this._Empoyee.getsingleEmpoye(this.parmasId.snapshot.params?.['id']).subscribe((data:any)=>{
      this.empoyeeFormGrop=new FormGroup({
        ename:new FormControl(`${data.ename}`,[Validators.required,Validators.minLength(3)]),
        ework:new FormControl(`${data.ework}`,[Validators.required]),
        eage:new FormControl(`${data.eage}`,[Validators.required]),
      })
    })
  }
}
