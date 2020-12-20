import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  constructor(private http: HttpClient) { }

  getFolder(parentId: number): Observable<any> {
    return this.http.get(`CorporateWebAPI/Folder/GetFolders?parentId=${parentId}`);
  }

  getFiles(folderId: number): Observable<any> {
    return this.http.get(`CorporateWebAPI/File/GetFiles?folderId=${folderId}&sortBy=1`);
  }
}
