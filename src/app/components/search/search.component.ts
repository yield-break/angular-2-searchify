import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'search',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './search.component.css'
  ],
  templateUrl: './search.component.html'
})
export class SearchComponent {
    countriesData: any;
    countries: Country[];
    matches: Country[];

    ngOnInit() : void {
        this.asyncDataWithWebpack();
    }

    search(searchTerm: string) : void {
        this.matches = this.countries.filter(c => c.code === searchTerm);
    }

    private asyncDataWithWebpack() : void {
        // you can also async load mock data with 'es6-promise-loader'
        // you would do this if you don't want the mock-data bundled
        // remember that 'es6-promise-loader' is a promise
        setTimeout(() => {

        System.import('../../../assets/countries.json')
            .then(json => {
            console.log('async countries', json);
            this.countriesData = json;
            this.countries = json as Country[];
            this.matches = [];
            });

        });
    }

}

export class Country {
    name: string;
    code: string;
}