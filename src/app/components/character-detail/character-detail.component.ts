import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MortyService } from 'src/app/services/morty.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  public characterDetail : any;
  constructor(
    private route: ActivatedRoute,
    private service : MortyService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.service.getCharacterDetail(id).subscribe((res)=>{
        this.characterDetail = res;
      })
    });
  }

}
