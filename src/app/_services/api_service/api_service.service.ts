import { 
  from,
  Observable 
} from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { 
  login_post,
  login_success_res 
} from '../../_models/login.model';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { post } from '../../_models/post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  posts_collection: AngularFirestoreCollection<post>;
  constructor(private _http: HttpClient, private _db: AngularFirestore) {
    this.posts_collection = this._db.collection<post>('posts');
  }

  login(params: login_post): Observable<login_success_res> {
    return this._http
      .post<any>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase_config.apiKey}`,
        {
          ...params,
          returnSecureToken: true,
        }
      )
      .pipe(
        map((data: any) => {
          let {
            email,
            registered,
            idToken: id_token,
            refreshToken: refresh_token,
            expiresIn: expires_in,
            localId: local_id,
          } = data;
          return {
            email,
            registered,
            id_token,
            refresh_token,
            expires_in,
            local_id,
          };
        })
      );
  }

  signup(params: login_post): Observable<login_success_res> {
    return this._http
      .post<any>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase_config.apiKey}`,
        {
          ...params,
          returnSecureToken: true,
        }
      )
      .pipe(
        map((data: any) => {
          let {
            email,
            registered = false,
            idToken: id_token,
            refreshToken: refresh_token,
            expiresIn: expires_in,
            localId: local_id,
          } = data;
          return {
            email,
            registered,
            id_token,
            refresh_token,
            expires_in,
            local_id,
          };
        })
      );
  }

  get_posts(): Observable<any> {
    return this.posts_collection.valueChanges({ idField: 'id' });
  }

  add_post(post: post): Observable<any> {
    const { title, description } = post;
    return from(this.posts_collection.add({ title, description }));
  }

  delete_post(id: string): Observable<any> {
    return from(this.posts_collection.doc(id).delete());
  }

  update_post(id: string, payload: post): Observable<any> {
    return from(this.posts_collection.doc(id).update(payload));
  }
}