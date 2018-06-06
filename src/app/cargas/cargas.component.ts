import { Component, OnInit } from '@angular/core';
import { ThfTableColumn } from '@totvs/thf-ui/components/thf-table';
import { CargasService } from '../providers/cargas.service';

@Component({
  selector: 'app-cargas',
  templateUrl: './cargas.component.html',
  styleUrls: ['./cargas.component.css']
})
export class CargasComponent implements OnInit {

  columns: Array<ThfTableColumn>;
  cargas: any;

  constructor(private _cargasService: CargasService) {
    this.columns = [
      { column: 'id', label: 'Numero', width: '5%' },
      { column: 'destino', label: 'Descrição', width: '5%' },
      { column: 'data', label: 'Data', width: '5%' },
    ];
   }

  ngOnInit() {
    this._cargasService.getCargas().subscribe(response => this.cargas = response);
  }

}
