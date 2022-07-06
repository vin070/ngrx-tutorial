import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { post } from 'src/app/_models/post.model';
import { edit_post } from '../store/posts.action';
import { post_by_id } from '../store/posts.selector';
import { store_state } from 'src/app/_models/store.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormControlErrorHandlerService } from '../../../_services/form_control_error_handler/form-control-error-handler.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html'
})
export class EditPostComponent {
  edit_form: FormGroup = new FormGroup({});

  constructor(
    private _store: Store<store_state>,
    private _router: Router,
    private _form_builder: FormBuilder,
    public _form_error_handler: FormControlErrorHandlerService
  ) {
    this._store.select(post_by_id).subscribe((data: post) => {
      if (data) {
        this.edit_form = this._form_builder.group({
          id: [data.id, [Validators.pattern(/\d+/)]],
          title: [
            data.title,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.pattern(
                this._form_error_handler.formcontrol_regex.only_letters_1
              ),
            ],
          ],
          description: [
            data.description,
            [
              Validators.required,
              Validators.minLength(10),
              Validators.pattern(
                this._form_error_handler.formcontrol_regex.only_letters_10
              ),
            ],
          ],
        });
      }
    });
  }

  /**
   * Returns the edit form controls
   */
  get edit_form_control() {
    return this.edit_form.controls;
  }

  handle_edit_post() {
    if (this.edit_form.invalid) return;

    const posts: post = {
      id: this.edit_form.value.id,
      title: this.edit_form.value.title,
      description: this.edit_form.value.description,
    };
    this._store.dispatch(edit_post({ posts }));
    this.edit_form.reset();
    this._router.navigateByUrl('/logged_in/post');
  }
}
