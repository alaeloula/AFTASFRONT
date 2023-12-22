import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Competition } from 'src/app/classes/competition';
import { CompetitionService } from 'src/app/services/competition.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {
  competitions: any[] = [];
  competitionsAll: Competition[] = [];
  pageNumber: number = 0;
  pageSize: number = 10;

  faTimes = faTimes;
  getTime(date: Date): Time {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return { hours, minutes };
  }

  constructor(private competitionService: CompetitionService) { }


  ngOnInit(): void {
    this.loadCompetitions(this.currentPage, this.currentSize);
    // this.competitionService.getCompetition(this.pageNumber, this.pageSize).subscribe((competitions) => {
    //   this.competitions = competitions;

    // })
    // this.competitionsAll = this.competitions;
  }
  loadCompetitions(pageNumber:number, pageSize:number): void {
    this.competitionService.getCompetition(pageNumber, pageSize)
      .subscribe((data:any) => {
        console.log(data)
        this.competitions = data.content;
        this.competitionsAll = data.content; // Mettez à jour this.competitionsAll ici

      });
  }


  addCompetition(competition: Competition) {
    this.competitionService.addCompetition(competition).subscribe((competition) => {
      this.competitions.push(competition)
    })
  }
  // onFilterChange(event: Event): void {
  //   const filterValue = (event.target as HTMLSelectElement)?.value;
  //   const now = new Date();
  //   now.setHours(0, 0, 0, 0);

  //   if (filterValue === 'enCours') {
  //     this.competitions = this.competitions.filter(competition => {
  //       const competitionDate = new Date(competition.date);
  //       return competitionDate.toDateString() === now.toDateString();
  //     });
  //   } else if (filterValue === 'ferme') {
  //     this.competitionService.getCompetitionBeforToday().subscribe((cmp) => {
  //       this.competitions = cmp;
  //     });
  //   } else if (filterValue === "all") {
  //     this.competitionService.getCompetition(this.pageNumber, this.pageSize).subscribe((competitions) => {
  //       this.competitions = competitions;

  //     })
  //   }


  // }
  onFilterChange(event: Event): void {
    const filterValue = (event.target as HTMLSelectElement)?.value;
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    if (filterValue === 'enCours') {
      this.competitions = this.competitionsAll.filter(competition => {
        const competitionDate = new Date(competition.date);
        return competitionDate.toDateString() === now.toDateString();
      });
    } else if (filterValue === 'ferme') {
      this.competitionService.getCompetitionBeforToday().subscribe((cmp) => {
        this.competitions = cmp;
      });
    } else if (filterValue === "all") {
      this.competitions = this.competitionsAll; // Restaurer toutes les compétitions
    }
  }


  currentPage: number=0;
  currentSize: number=2;
  
  totalPages: number=0;
changefiltre(filtre: any) {
    this.currentPage=0;
    //this.currentfiltre=filtre.value;
    this.loadCompetitions(this.currentPage,this.currentSize);
    console.log(this.competitions)
  }

  paginate(page:number):void{
    this.currentPage=page;
    this.loadCompetitions(this.currentPage,this.currentSize);
  }

  nextPage(currentPage:number):void{
    if(currentPage+1==this.totalPages){
      return
    }
    this.currentPage=currentPage+1;
    this.loadCompetitions(this.currentPage,this.currentSize);
  }

  previousPage(currentPage:number){
    if(currentPage==0){
      return
    }
    this.currentPage=currentPage-1;
    this.loadCompetitions(this.currentPage,this.currentSize);
  }



}
