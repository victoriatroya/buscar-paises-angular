import { Component } from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Regions} from "../../interfaces/region.interface";
import {Country} from "../../interfaces/pais.interface";

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent {
  paises: Country[] = [];
  hayError: boolean  = false;
  regiones: string[] =
    ['EU', 'EFTA', 'ASEAN', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC' ]
  regionActiva: string = '';

  constructor(private regionServive: PaisService) { }

  activarRegion (region: string) {
    if (region === this.regionActiva) return;
    this.paises = [];
    this.hayError = false;
    this.regionActiva = region;
    this.regionServive.buscarRegiones(this.regionActiva).subscribe(resp => {
      this.paises = resp;
    }, () => {
      this.hayError = true;
      this.paises = []
    });
  }
}
