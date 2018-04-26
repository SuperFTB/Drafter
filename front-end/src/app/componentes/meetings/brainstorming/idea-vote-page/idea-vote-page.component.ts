import { LoginService } from './../../../services/login.service';
import { Participant } from './../../../models/participant.model';
import { UserService } from './../../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { Idea } from '../../../models/idea.model';
import { Vote } from '../../../models/vote.model';
import { VoteService } from '../../../services/vote.service';
import { RealTimeService } from '../../../../services/real-time.service';
import { IdeaService } from '../../../services/idea.service';


@Component({
  selector: 'idea-vote-page',
  templateUrl: './idea-vote-page.component.html',
  styleUrls: ['./idea-vote-page.component.scss']
})
export class IdeaVotePageComponent implements OnInit {

  public ideas: Array<Idea>;
  public hasVoted: boolean = false;
  public participant: Participant;
  @Input()
  public meetingId: number;
  @Output()
  public finishMeeting: EventEmitter<number> = new EventEmitter<number>();

  public votes: Array<Vote>;

  constructor(private voteService: VoteService, private activeRoute: ActivatedRoute, private router: Router, private realTimeService: RealTimeService, private ideaService: IdeaService, private userService: UserService, private loginService: LoginService) { }

  ngOnInit() {
    this.ideas = new Array<Idea>();
    this.userService.getParticipant(this.meetingId).subscribe(participant => {
      this.participant = participant;
    });
    this.ideaService.getIdeasByMeeting(this.meetingId).subscribe(idea => {
      this.ideas = idea;
    });
    this.votes = new Array<Vote>();
    this.realTimeService.connect(this.meetingId, () => {
      var i = 1;
      for (var ide of this.ideas) {
        this.realTimeService.register('votes' + i, ide.votes);
        this.votes.push({ id: 0, ideaId: ide.id, participantId: this.participant.id, value: 1 });
        i++;
      }
      this.realTimeService.subscribe();
    });
  }

  save() {
    this.voteService.saveVote(this.votes).subscribe(res => {
    });
    this.hasVoted=true;
  }
  finish() {
    this.finishMeeting.emit(this.meetingId);
  }

}
