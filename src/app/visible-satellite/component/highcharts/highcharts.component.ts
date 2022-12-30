import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Position } from '../../repository/dto/satellite/position';
import { Satellite } from '../../repository/dto/satellite/satellite';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css'],
  providers: []
})
export class HighchartsComponent implements OnInit {

  @Input() satellitesVisibles: Satellite[] = [];
  @Input() eventUpdateSatellitesVisibles: Observable<Satellite[]> = new Observable<Satellite[]>();

  public currentChartOptions = new Chart();
  public chartsOptions = [];
  public graphicChoises = ['barre', 'skyplot'];
  public favoritChoise!: string;


  constructor(public datepipe: DatePipe) {
    this.affichageNombreSatelliteVisibleDansLeTemps();
  }

  ngOnInit() {
    this.eventUpdateSatellitesVisibles.subscribe((satellitesVisibles: Satellite[]) => {
      this.satellitesVisibles = satellitesVisibles;
      this.affichageNombreSatelliteVisibleDansLeTemps();
    });
  }

  public displayGraphe(value: string): void {

  }

  public affichageNombreSatelliteVisibleDansLeTemps() {
    this.currentChartOptions = new Chart({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Visibility'
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: this.formatDateToHighChartsCategories(this.getGraphiqueBarreCategories(this.satellitesVisibles)), // Times
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of satelites'
        }
      },
      series: [{
        name: 'Satelite(s)',
        type: 'column',
        data: this.getGraphiqueBarreSeries(this.satellitesVisibles)
      }], credits: {
        enabled: false
      }
    });
  }


  private getGraphiqueBarreCategories(satellitesVisibles: Satellite[]): Date[] {
    return satellitesVisibles
      .flatMap(visibleSat => [...visibleSat.getPositionsByTime().keys()])
      .filter((date, i, self) =>
        self.findIndex(d => d.getTime() === date.getTime()) === i
      );
  }

  private getGraphiqueBarreSeries(satellitesVisibles: Satellite[]): number[] { // TODO refacto avec la meme méthode que getCategories()
    const extractPositionsOfAllSatellites: Map<Date, Position>[] = satellitesVisibles.flatMap(visibleSat => visibleSat.getPositionsByTime());
    const series: number[] = [];
    for (let currentDate of this.getGraphiqueBarreCategories(satellitesVisibles)) {
      let accumulateur: number = 0;
      for (let positionsOfOneSatellite of extractPositionsOfAllSatellites) {
        for (let [key, value] of positionsOfOneSatellite) {
          if (key.getTime() === currentDate.getTime()) {
            accumulateur = accumulateur + 1;
          }
        }
      }
      series.push(accumulateur);
    }

    return series;
  }

  private formatDateToHighChartsCategories(categoriesDate: Date[]): string[] {
    let dateAuFormatString: string[] = [];

    for (let categorieDate of categoriesDate) {
      dateAuFormatString.push("" + this.datepipe.transform(categorieDate, 'yyyy/MM/dd HH:mm'));
    }

    return dateAuFormatString;
  }

}
