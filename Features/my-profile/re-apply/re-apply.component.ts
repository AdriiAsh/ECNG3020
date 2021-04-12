import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../../../Services/application.service'
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Skill} from '../../../Models/Availability'

@Component({
  selector: 'app-re-apply',
  templateUrl: './re-apply.component.html',
  styleUrls: ['./re-apply.component.css']
})
export class ReApplyComponent implements OnInit {

  constructor(private ApplicationService: ApplicationService, private FormBuilder:FormBuilder, private Router:Router) { }

  ApplicationForm = this.FormBuilder.group({

    Skill:this.FormBuilder.array([
      this.Addskills()
    ]),
   
});

  Application={
    _id:'',
  Firstname:'',    
  Lastname:'',
  Home_Address: '',
  Equipments_Owned:[],
  Gender:'',
  DoB:'',
  ContactNo1:'', //Array of numbers
  ContactNo2:'',
  Email:'', 
  Applicant_Type: [],
  Skill:[]
} 
Applicant_Types:any[] ;
Type:[] ; 
Check=true ; 
selectedFile:any
Results:any ;
Submission:any ;
f:string ;


  ngOnInit(): void {

    this.ApplicationService.GetApplicantApplication().subscribe(
      response => {console.log('Success!', response);
     this.Results=JSON.parse(JSON.stringify(response)) 
     if(response !== null){
      this.Application.Skill=this.Results.Skill
    this.ApplicationForm.setControl('Skill',this.setExistingSkill(this.Application.Skill))
  }
  })
  }

  setExistingSkill(Types:Skill[]): FormArray {
    const formArray=new FormArray([]);
    Types.forEach(s => {
      formArray.push(this.FormBuilder.group({
        Applicant_Type:s.Applicant_Type,
        Equipments_Owned:s.Equipments_Owned,
      }))
    });
    console.log(formArray)
    return formArray;
      }

  Addskills(): FormGroup {
    return this.FormBuilder.group({
      Applicant_Type: new FormControl('',[Validators.required]),
      Equipments_Owned: new FormControl('',[Validators.required]), 
    })
  }

  AddskillsButton(): void{
    (this.ApplicationForm.get('Skill') as FormArray)!.push(this.Addskills())
  
  }

  get aliasesArrayControl() {
    return this.ApplicationForm.get('Skill') as FormArray
  }
  
  Delete(skillindex:number):void{
    (<FormArray>this.ApplicationForm.get('Skill')).removeAt(skillindex)
    }
    

onSubmit(){
    this.ApplicationService.Reapply(this.ApplicationForm.value).subscribe(
      response => console.log('Updated!', response),
      error => console.error('Error!', error)
     )}
    
 //Choosing a file 
 onFileSelected(event:any){
  console.log(event.target.files[0].name)
  this.selectedFile=<File>event.target.files[0]; 
  }
  
//Upload a file
onUpload(){
const fd =new FormData() ;
 fd.append('productImage', this.selectedFile, this.selectedFile.name);
 this.ApplicationService.Upload(fd).subscribe(
  response => console.log('FileUploaded', response),
  error => console.error('Error!', error)
 )
 }



}
