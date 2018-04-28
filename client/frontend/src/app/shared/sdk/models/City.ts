/* tslint:disable */

declare var Object: any;
export interface CityInterface {
  "name": string;
  "population"?: number;
  "id"?: any;
  "county_id"?: any;
}

export class City implements CityInterface {
  "name": string;
  "population": number;
  "id": any;
  "county_id": any;
  constructor(data?: CityInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `City`.
   */
  public static getModelName() {
    return "City";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of City for dynamic purposes.
  **/
  public static factory(data: CityInterface): City{
    return new City(data);
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
      name: 'City',
      plural: 'Cities',
      path: 'Cities',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "population": {
          name: 'population',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "county_id": {
          name: 'county_id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
