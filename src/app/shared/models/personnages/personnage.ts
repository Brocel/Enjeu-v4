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
}
