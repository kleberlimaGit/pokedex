import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { RouterModule } from '@angular/router';
import { ContentListLoaderComponent } from './content-list-loader/content-list-loader.component';
import { ContentLoaderComponent } from './content-loader/content-loader.component';
 import { ContentLoaderModule } from '@ngneat/content-loader';




@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    ContentListLoaderComponent,
    ContentLoaderComponent, 
  ],
  exports: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    PaginatorModule,
    RouterModule,
    ContentLoaderModule
  ]
})
export class SharedModule { }
