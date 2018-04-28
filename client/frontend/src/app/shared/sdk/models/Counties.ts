/* tslint:disable */
import {
  City
} from '../index';

declare var Object: any;
export interface CountiesInterface {
  "name": string;
  "seat": string;
  "population": string;
  "numberOfDistrict": number;
  "Area": number;
  "numberOfMunicipalities": number;
  "id"?: any;
  cities?: City[];
}

export class Counties implements CountiesInterface {
  "name": string;
  "seat": string;
  "population": string;
  "numberOfDistrict": number;
  "Area": number;
  "numberOfMunicipalities": number;
  "id": any;
  cities: City[];
  constructor(data?: CountiesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Counties`.
   */
  public static getModelName() {
    return "Counties";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Counties for dynamic purposes.
  **/
  public static factory(data: CountiesInterface): Counties{
    return new Counties(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Counties',
      plural: 'Counties',
      path: 'Counties',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "seat": {
          name: 'seat',
          type: 'string'
        },
        "population": {
          name: 'population',
          type: 'string'
        },
        "numberOfDistrict": {
          name: 'numberOfDistrict',
          type: 'number'
        },
        "Area": {
          name: 'Area',
          type: 'number'
        },
        "numberOfMunicipalities": {
          name: 'numberOfMunicipalities',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        cities: {
          name: 'cities',
          type: 'City[]',
          model: 'City',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'county_id'
        },
      }
    }
  }
}
