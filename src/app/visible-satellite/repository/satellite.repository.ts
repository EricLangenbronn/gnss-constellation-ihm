import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Satellite } from './dto/satellite/satellite';
import { VisibleSatelliteRequest } from './dto/request/visible-satellite-request';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class SatelliteRepository {
  /*
    private defaultQuestion = '"latitude":"38.889139","longitude":"-77.049","altitude":"130.049","startDateOfMeasure":"1387666800","endDateOfMeasure":"1387753199","elevationMask":"15.0"';
    */

  private baseUrl = `${environment.urlServer}`;

  constructor(private _httpClient: HttpClient) { }

  public getSateliteVisibleBySatellite(parameters: VisibleSatelliteRequest): Observable<Satellite[]> {

    return this._httpClient.get<Satellite[]>("http://localhost:8080/api/visibleSat", { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), params: this.convertToHttpParams(parameters) })
      .pipe(
        map(visibleSatellitesResponse => {
          return visibleSatellitesResponse
            .map(item => { return new Satellite(item["satelliteId"], item["positionsByTime"]) });
        })
      );
  }

  private convertToHttpParams(parameters: VisibleSatelliteRequest): HttpParams {
    return new HttpParams({
      fromObject: {
        'startDateOfMeasure': parameters.getStartDateOfMeasure(),
        'endDateOfMeasure': parameters.getEndDateOfMeasure(),
        'elevationMask': parameters.getElevationMask(),
        'longitude': parameters.getLongitude(),
        'latitude': parameters.getLatitude(),
        'altitude': parameters.getAltitude()
      }
    })
  }
}
