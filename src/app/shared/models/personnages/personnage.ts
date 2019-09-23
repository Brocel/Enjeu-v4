import { Description } from './description';
import { Statistics } from './statistics';

export class Personnage {
  role: 'JOUEUR'|'MOB';
  description: Description;
  statistics: Statistics;

  //getters
  get theRole() {
      return this.role;
  }

  constructor(
    role: 'JOUEUR'|'MOB',
    //description
    name: string,
    gender: 'FEMME'|'HOMME'|'HERMAPHRODITE',
    mood: string,
    avatar: string,
    story: string,
    race: 'HUMAIN'|'ELFE'|'NAIN'|'ORC'|'GOBELIN',
    job: 'GUERRIER'|'SAGE'|'ASSASSIN',
    specialty:'COMBAT'|'ARC'|'SPITITUALITE'|'ALCHIMIE'|'VOL'|'POISON'
    )
  {
    this.role = role || 'JOUEUR';
    this.description = new Description(name, gender, mood, avatar, story, race, job, specialty);
    this.statistics = new Statistics(race, job, specialty);
    //mettre un return description et statistics ?
  }
  // Méthodes
  function describeSelf() {
    let role: string = this.theRole;
    let name: string = this.description.theName;
    let gender: string = this.description.theGender;
    let mood: string = this.description.theMood;
    let story: string = this.description.theStory;
    let race: string = this.description.race.theRaceName;
    let job: string = this.description.job.theJobName;
    let specialty: string = this.description.specialty.theSpecName;
    let ability: string = this.description.specialty.theAbility;

    return console.log('Je suis un '+role+' '+gender+' '+race+' assez '+mood+' répondant au nom de '+name+'. Je suis un '+job+' spécialisé dans :'+specialty+'. Compétence particulière : "'+ability+'".');
  }
}
