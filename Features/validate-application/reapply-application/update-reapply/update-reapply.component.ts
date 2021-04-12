import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../../../../Services/application.service'
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Skill} from '../../../../Models/Availability'

@Component({
  selector: 'app-update-reapply',
  templateUrl: './update-reapply.component.html',
  styleUrls: ['./update-reapply.component.css']
})
export class UpdateReapplyComponent implements OnInit {

  constructor(private ApplicationService: ApplicationService, private FormBuilder:FormBuilder, private Router:Router, private route: ActivatedRoute) { }

  ApplicationForm = this.FormBuilder.group({

    Skill:this.FormBuilder.array([
      this.Addskills()
    ]),
   
});
id:string ;
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
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];

    this.ApplicationService.GetoneApplication(this.id).subscribe(
      response => {console.log('Success!', response);
     this.Results=JSON.parse(JSON.stringify(response)) 
     if(response !== null){
      this.Application.Skill=this.Results.Skill
    this.ApplicationForm.setControl('Skill',this.setExistingSkill(this.Application.Skill))
  }
})
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
    this.ApplicationService.DeclineReapply( this.id,this.ApplicationForm.value).subscribe(
      response => console.log('Updated!', response),
      error => console.error('Error!', error)
     )}
    


}
