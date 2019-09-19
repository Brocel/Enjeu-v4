export class Personnage {
  roles: Array<'MDJ'|'JOUEUR'|'MOB'>;
  readonly id: string;
}

class Presentation {
  name: string;
  gender: string;
  race: string;
  mood: string; //role play
  job: string; //classe metier à coder
  title: string; //titre "honorifique"
  avatar: string; //url de l'image
  level: number; // réfléchir au fonctionnement de l'xp
  story: string; // histoire, description (RP)

  constructor(
    name: string,
    gender: string,
    race: string,
    mood: string,
    job: string,
    avatar: string,
    story: string
  )
  {
    this.name = name;
    this.gender = gender;
    this.race = race;
    this.mood = mood;
    this.job = job;
    this.avatar = avatar;
    this.story = story;
    this.title = 'Débutant';
    this.level = 0;
  }
}
