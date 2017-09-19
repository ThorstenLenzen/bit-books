import { BookStoreService } from './shared/book-store.service';
import { rootReducer } from './reducers/rootReducer';
import { IAppState } from './reducers/types';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Book Rating';
  deploymentArea = '';

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTools: DevToolsExtension,
    private bs: BookStoreService) {

    this.ngRedux.configureStore(
      rootReducer,
      {} as IAppState,
      [], // middlewares
      devTools.isEnabled() ? [devTools.enhancer()] : []
    );
  }

  ngOnInit(): void {
    this.bs
      .getDeploymentArea()
      .subscribe(da => this.deploymentArea = ` - ${da}`);
  }
}
