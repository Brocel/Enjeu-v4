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
  describeSelf() {
    let role = this.theRole;
    let name = this.description.theName;
    let gender = this.description.theGender;
    let mood = this.description.theMood;
    let story = this.description.theStory;
    let race = this.description.race.theRaceName;
    let job = this.description.job.theJobName;
    let specialty = this.description.specialty.theSpecName;
    let ability = this.description.specialty.theAbility;

    return console.log('Je suis un '+role+' '+gender+' '+race+' assez '+mood+' répondant au nom de '+name+'. Je suis un '+job+' spécialisé dans : '+specialty+'. Compétence particulière : '+ability+'. Voici mon histoire : '+story);
  }

  showPhysicalStats() {
    let taille = this.statistics.theTaille;
    let mass = this.statistics.theMass;
    let age = this.statistics.theAge;

    return console.log('Je mesure : '+taille+' mètres (m), ma masse vaut : '+mass+' kilogrammes (kg) et je suis âgé de : '+age+' années (1 an = 365.25 jours).');
  }

  showInGameStats() {
    let force = this.statistics.theFor;
    let defense = this.statistics.theDef;
    let intel = this.statistics.theInt;

    return console.log('Je possède une force physique de : '+force+' UF (Unité de Force) , une résistance physique de : '+defense+' UD (Unité de Défense) et une intelligence de : '+intel+' UFM (Unité de Force Mentale).');
  }
}
