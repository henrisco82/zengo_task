import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { CountiesApi } from '../../../app/shared/sdk/services';
import { CityApi } from '../../../app/shared/sdk/services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   counties: any;
   selectedCities: any;
   id: any;
   name: string;
   population: string;

   editRowId: any ;

   thecity: any;
   dropForm: boolean = false;
   myForm: FormGroup;

  constructor(
    private countiesapi: CountiesApi,
    private cityapi: CityApi,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {

    this.countiesapi.find().subscribe((data)=>{
         this.counties = data;
    },(error)=>{
          console.log(error);
    });



  }

  loadCities(){
      this.cityapi.find({where: {'county_id': this.id}}).subscribe((data)=>{
            this.selectedCities = data;
            console.log(this.selectedCities);
      },(error)=>{
            console.log(error);
      });
  }

  selectchange(event){
        this.id = event.target.value;
        this.dropForm = true;
        this.loadCities();

  }


  addCity(){

    if(this.id){
            var model = {
              name: this.thecity,
              county_id: this.id
          }
          this.cityapi.create(model).subscribe((data)=>{
             console.log(data);
             this.loadCities();
          },(error)=>{
              console.log(error);
          });

    }
    this.editRowId = "";
   
   

  }


  editCity(name){
     
      if(this.editRowId){
            var model = {
              name: name,
              county_id: this.id
          }
          this.cityapi.patchAttributes(this.editRowId, model).subscribe((data)=>{
                  console.log(data);
          },(error)=>{
                console.log(error);
          });
      }
      
    
        this.editRowId = "";

  }


  deleteCity(){
      if(this.editRowId){
        if(confirm('Are you sure you want to delete this city? ')){
          this.cityapi.deleteById(this.editRowId).subscribe((data)=>{
                console.log('the city has been deleted');
                this.loadCities()
                this.editRowId = "";
          },(error)=>{
                console.log(error);
          });
        }
      }
     
  }


  cancel(){
    this.editRowId = "";
  }


  edit(val){
    this.editRowId = val;
  }

}
