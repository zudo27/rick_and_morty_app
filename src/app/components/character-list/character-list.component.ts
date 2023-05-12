import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MortyService } from 'src/app/services/morty.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  public characterList : any;
  constructor( 
    private service : MortyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getCharacterList()
        .subscribe((response: any) => {
          this.characterList = response['results'];
    });
  }

  viewCharacterDetail(character_id : any){
    let url: string = "/character-detail/" + character_id
         this.router.navigateByUrl(url);
      }
}
