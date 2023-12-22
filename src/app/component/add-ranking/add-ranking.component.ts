import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Competition } from 'src/app/classes/competition';
import { Fish } from 'src/app/classes/fish';
import { Member } from 'src/app/classes/member.';
import { ranking } from 'src/app/classes/ranking';
import { CompetitionService } from 'src/app/services/competition.service';
import { HuntingService } from 'src/app/services/hunting.service';
import { MemberService } from 'src/app/services/member.service';
import { RankingService } from 'src/app/services/ranking.service';
@Component({
  selector: 'app-add-ranking',
  templateUrl: './add-ranking.component.html',
  styleUrls: ['./add-ranking.component.css']
})
export class AddRankingComponent implements OnInit {
  visible: boolean = false;
  pd: boolean = false;
  today:boolean=false;
  addMember:boolean=true;
  competition: Competition[] = [];
  members: Member[] = [];
  memberElu: number[] = [];
  rankings: ranking[] = [];
  podium: ranking[] = [];
  fish: Fish[] = [];
  fishId: string = "";
  memberId: number = 0;
  nombreFish: number = 0;
  competition_id: string = "";
  rank: number = 0;
  score: number = 0;
  showPopup: boolean = false;
  constructor(private competitionService: CompetitionService, private memberService: MemberService, private rankingService: RankingService, private huntingService: HuntingService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.competition_id = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => {
      this.competition_id = params['id'];
    });
    this.competitionService.findCompetitionById(this.competition_id).subscribe(competition => {
      this.competition.push(competition);
      this.todayDate();
      console.log(this.today);
      
    })
    this.memberService.getMembers().subscribe((members) => {
      this.members = members
    })
    this.rankingService.getByCompetition(this.competition_id).subscribe(callback => {
      this.rankings = callback;
    })
    this.rankingService.getFish().subscribe(callback => {
      this.fish = callback;
    })
    this.rankingService.getPodiume(this.competition_id).subscribe((callback)=>{
      this.podium=callback
      
    })
    

    console.log(this.today)
     
  }
  todayDate(){
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    const competitionDate = new Date(this.competition[0].date);
    competitionDate.setHours(0, 0, 0, 0);
    console.log(competitionDate.getTime());
    console.log(now.getTime());
    
    
    if(competitionDate.getTime() == now.getTime()) {
        this.today= true;
    }
    if(competitionDate.getTime() <= now.getTime())
    {
      this.addMember= false;
    }
}



  showpoduim() {
     this.pd = !this.pd;
    this.rankingService.getPodiume(this.route.snapshot.params['id']).subscribe((callback)=>{
      this.podium=callback
    })
  }
  showDialog(memberId: number) {
    if (memberId !== undefined) {
      this.memberId = memberId;
      this.visible = true;
    }
   
  }
  onAddMemberClick() {
    this.showPopup = !this.showPopup;
    
  }
  toggleSelection(member: Member) {
    if (member.num !== undefined) { 
      const index = this.memberElu.indexOf(member.num);
      if (index > -1) {
        this.memberElu.splice(index, 1); 
      } else {
        this.memberElu.push(member.num); 
      }
    }
  }

  isMemberSelected(member: Member): boolean {
    return member.num !== undefined && this.memberElu.includes(member.num);
  }

  onSubmit() {
    this.memberElu.forEach(Element => {
      const newRanking = {
        memberId: Element,
        competitionId: this.competition_id,
        rank: this.rank,
        score: this.score
      }
      this.rankingService.addRanking(newRanking).subscribe(callback => {
        this.rankings.push(callback);
      })
    })
  }

  submitHunt() {
    const newHunt =
    {
      numberOfFish: this.nombreFish,
      membre_id: this.memberId,
      competition_id: this.competition_id,
      fish_id: this.fishId
    }
    this.huntingService.addHunting(newHunt).subscribe(cmp=> { this.rankingService.calculateScore(this.competition_id).subscribe(callback => {
      this.rankings = callback;
      
    })
  });


    
    this.nombreFish = 0;
    this.visible = false;

  }


}
