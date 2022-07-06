import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { OnInit, Component } from '@angular/core';
import { store_state } from '../../_models/store.model';
import { log_out } from 'src/app/guest/state/login.action';
import { navigation_menu } from '../../_models/navigation.model';
import { is_logged_in } from '../../guest/state/login.selector';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  navigation_menu: Array<navigation_menu> = [];

  constructor(private _router: Router, private _store: Store<store_state>) {}

  ngOnInit(): void {
    this.navigation_menu = [
      {
        anchor_text: 'Home',
        anchor_link: '/logged_in/content',
        selected: true,
        visible: true,
      },
      {
        anchor_text: 'Post',
        anchor_link: '/logged_in/post',
        selected: false,
        visible: true,
      },
      {
        anchor_text: 'Logout',
        anchor_link: '/guest/login',
        selected: false,
        visible: true,
      },
    ];

    this._store.select(is_logged_in).subscribe((data: boolean) => {
      this.navigation_menu = this.navigation_menu.map(
        (menu: navigation_menu) => {
          if (data) {
            return menu.anchor_text.indexOf('Sign in') != -1 ||
              menu.anchor_text.indexOf('Login') != -1
              ? { ...menu, visible: false }
              : { ...menu, visible: true };
          }
          return menu.anchor_text.indexOf('Logout') != -1
            ? { ...menu, visible: false }
            : { ...menu, visible: true };
        }
      );
    });
  }

  select_menu(selected_index: number, event: MouseEvent) {
    event.stopPropagation();
    this.navigation_menu = this.navigation_menu.map(
      (menu: navigation_menu, index: number) => {
        return index == selected_index
          ? { ...menu, selected: true }
          : { ...menu, selected: false };
      }
    );
    if (this.navigation_menu[selected_index].anchor_text == 'Logout')
      this._store.dispatch(log_out());
    else
      this._router.navigateByUrl(
        this.navigation_menu[selected_index]['anchor_link']
      );
  }
}
