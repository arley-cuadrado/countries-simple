import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { ContinentI, CountryI } from '../models/model.interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  //------------------------ Ancla DataService
  providers: [ DataService ]
})
export class HeaderComponent implements OnInit {

  public selectedContinent: ContinentI = { id: 0, name: '' };
  /*
  public selectedCountry: CountryI = { id: 0,
                                       continentId: 0,
                                       name: '',
                                       borders: '',
                                       region: '',
                                       population: '',
                                       currency: '',
                                       language: '', };
                                       */
  public continents: ContinentI[];
  public countries: CountryI[];

  constructor( private dataSvc: DataService ) { }

  ngOnInit(): void {
    this.continents = this.dataSvc.getContinents();
  }

  onSelect( id: number ): void{
    this.countries = this.dataSvc.getCountries().filter( item => item.continentId == id );
  }
  

}
