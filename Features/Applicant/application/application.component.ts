import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../../../Services/application.service'
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Skill} from '../../../Models/Availability'
import {MatDialog} from '@angular/material/dialog';
import { PictureUploadedComponent } from 'src/app/Dialogs/picture-uploaded/picture-uploaded.component';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  isDirty=true ; 
  constructor( public dialog:MatDialog, private ApplicationService: ApplicationService, private FormBuilder:FormBuilder, private Router:Router) {

   }

   openDialog(){
    this.dialog.open(PictureUploadedComponent, { disableClose: true });

  }

   ApplicationForm = this.FormBuilder.group({
    Firstname: new FormControl('',[Validators.required]), 
    Lastname: new FormControl('',[Validators.required]),
    Home_Address: new FormControl('',[Validators.required]),
    Gender:new FormControl('',[Validators.required]),
    DoB:new FormControl('',[Validators.required]),
    ContactNo1:new FormControl('',[Validators.required]),
    ContactNo2:new FormControl(''),
  
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
//dateToString:string;

  ngOnInit(): void {

    this.ApplicationService.GetApplicantApplication().subscribe(
      response => {console.log('Success!', response);
     this.Results=JSON.parse(JSON.stringify(response)) 
     if(response !== null){
      this.Application._id=this.Results._id,
      this.Application.Firstname=this.Results.Firstname,
      this.Application.Lastname=this.Results.Lastname,
      this.Application.Home_Address=this.Results.Home_Address,
      this.Application.Gender=this.Results.Gender,
      this.Application.DoB=this.Results.DoB,
      this.Application.ContactNo1=this.Results.ContactNo1,
      this.Application.ContactNo2=this.Results.ContactNo2,
      this.Application.Skill=this.Results.Skill,
     

     this.ApplicationForm.patchValue({
      Firstname:this.Application.Firstname,    
      Lastname:this.Application.Lastname,
      Home_Address: this.Application.Home_Address,
      Gender:this.Application.Gender,
      DoB:this.Application.DoB,
      ContactNo1:this.Application.ContactNo1, //Array of numbers
      ContactNo2:this.Application.ContactNo2,
    }),
    
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

  onSubmit(){
    this.isDirty=false ; 
    this.ApplicationService.GetApplicantApplication().subscribe(
      response => {console.log('Success!', response);
    console.log(this.Application);

  
if(response === null){
    console.log(this.ApplicationForm.value);
    this.ApplicationService.CreateApplication(this.ApplicationForm.value).subscribe(
      response => console.log('Created!', response),
      error => console.error('Error!', error)
    )
}
else if(response !== null){
  console.log(this.ApplicationForm.value);
  this.ApplicationService.UpdateApplication(this.ApplicationForm.value).subscribe(
    response => console.log('Updated!', response),
    error => console.error('Error!', error)
  )
}
      })
      this.Router.navigate(['Applicant/HomePage/Application/Schedule'])    
    }


    
addApplicant_Type(){
  this.Applicant_Type.push(this.FormBuilder.control('')) ;
}

get Applicant_Type(){
  return this.ApplicationForm.get('Applicant_Type') as FormArray
}

 //Choosing a file 
onFileSelected(event:any){
    //console.log(event.target.files[0].name)
    this.selectedFile=<File>event.target.files[0]; 
    }
    
  //Upload a file
  onUpload(){
  const fd =new FormData() ;
   fd.append('productImage', this.selectedFile, this.selectedFile.name);
   this.ApplicationService.Upload(fd).subscribe(
    response =>{ console.log('FileUploaded', response)
    this.openDialog() ; 
  },
    error => console.error('Error!', error)
   )
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
    


}
