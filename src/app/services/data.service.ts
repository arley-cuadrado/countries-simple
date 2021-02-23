import { Injectable } from '@angular/core';
import { ContinentI, CountryI } from '../models/model.interface';

@Injectable()
export class DataService {

private continents: ContinentI[] = [
  {
    id: 0,
    name: 'Selecciona un continente',
  },
  {
    id: 1,
    name: 'America',
  },
  {
    id: 2,
    name: 'Europa',
  },
  {
    id: 3,
    name: 'Africa',
  },
  {
    id: 4,
    name: 'Asia',
  },
  {
    id: 5,
    name: 'Oceania',
  }
];

private countries: CountryI[] = [
  {
    id: 1,
    continentId: 1,
    name: 'Colombia',
    borders: 'Venezuela, Perú, Ecuador, Brasil',
    region: 'Sur America',
    population: '49 millones',
    currency: 'Peso colombiano',
    language: 'Español',
    flag: '../../assets/colombia.png',
  },
  {
    id: 2,
    continentId: 1,
    name: 'Ecuador',
    borders: 'Colombia, Perú',
    region: 'Sur America',
    population: '17 millones',
    currency: 'Dollar',
    language: 'Español',
    flag: '../../assets/ecuador.png',
  },
  {
    id: 3,
    continentId: 2,
    name: 'España',
    borders: 'Francia',
    region: 'Europa',
    population: '46 millones',
    currency: 'Euro',
    language: 'Español',
    flag: '../../assets/espania.png',
  },
  {
    id: 4,
    continentId: 2,
    name: 'Alemania',
    borders: 'Holanda, Belgica, Luxemburgo, Francia, Suiza, Austria, Chequia, Polonia, Dinamarca',
    region: 'Europa',
    population: '83 millones',
    currency: 'Euro',
    language: 'Aleman',
    flag: '../../assets/alemania.png',
  },
  {
    id: 5,
    continentId: 3,
    name: 'Egipto',
    borders: 'Sudan, Libia, Israel',
    region: 'Africa',
    population: '98 millones',
    currency: 'Libra Egipcia',
    language: 'Arabe',
    flag: '../../assets/egipto.png',
  },
  {
    id: 6,
    continentId: 3,
    name: 'Nigeria',
    borders: 'Chad, Níger, Gana, Burkina Faso, Ghana',
    region: 'Africa',
    population: '195 millones',
    currency: 'Naira',
    language: 'Yoruba, Lgbo, Hausa e Inglés',
    flag: '../../assets/nigeria.png',
  },
  {
    id: 7,
    continentId: 4,
    name: 'China',
    borders: 'Mongolia, Corea del Norte, Corea del Sur, Laos, Myanmar, Bután, Nepal, Tayikistán, Kirguistán',
    region: 'Asía',
    population: '1393 millones',
    currency: 'Renminbi',
    language: 'Mandarín',
    flag: '../../assets/china.png',
  },
  {
    id: 8,
    continentId: 4,
    name: 'Japón',
    borders: 'Corea del Norte, Corea del Sur',
    region: 'Asía',
    population: '1393 millones',
    currency: 'Yen',
    language: 'Japonés',
    flag: '../../assets/japon.png',
  },
  {
    id: 9,
    continentId: 5,
    name: 'Australia',
    borders: 'Nueva Zelanda, Papúa Nueva Guinea, Indonesia',
    region: 'Oceanía',
    population: '24 millones',
    currency: 'Dollar Australiano',
    language: 'Inglés',
    flag: '../../assets/australia.png',
  },
  {
    id: 10,
    continentId: 5,
    name: 'Nueva Zelanda',
    borders: 'Australia, Papúa Nueva Guinea, Indonesia',
    region: 'Oceanía',
    population: '4,8 millones',
    currency: 'Dollar Neozelandés',
    language: 'Inglés',
    flag: '../../assets/nueva-zelanda.png',
  }

]

  getContinents(): ContinentI[] {
    return this.continents;
  }
  getCountries(): CountryI[] {
    return this.countries;
  }


}
