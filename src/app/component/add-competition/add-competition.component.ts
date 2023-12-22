import { Time } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Competition } from 'src/app/classes/competition';
import { CompetitionService } from 'src/app/services/competition.service';

@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrls: ['./add-competition.component.css']
})
export class AddCompetitionComponent {
  date: Date | undefined;
  startTime: Time | undefined;
  endTime: Time | undefined;
  numberOfParticipation: number = 0;
  location: string = '';
  amount: number = 0;
  faplus = faPlus;
  formShow = false;
  @Output() onAddCompetition:EventEmitter<Competition>=new EventEmitter<Competition>

  toggleForm() {
    this.formShow = !this.formShow;
    console.log(this.formShow)
  }
  constructor(private competitionService: CompetitionService) {}
  onSubmit() {

    const newCompetition = {
      date: this.date as Date,
      startTime: this.startTime as Time,
      endTime: this.endTime as Time,
      numberOfParticipation: this.numberOfParticipation,
      location: this.location,
      amount: this.amount
    };
    //console.log(newCompetition);

    this.onAddCompetition.emit(newCompetition);
    this.date = undefined;
    this.startTime =  undefined;
    this.endTime =  undefined;
    this.location='';
    this.amount= 0;
    this.numberOfParticipation=0;
    this.formShow = !this.formShow;
  }

}
