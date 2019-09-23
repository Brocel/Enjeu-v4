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
    this.statistics = new Statistics();
    //mettre un return description et statistics ?
  }
  // Méthodes
}

class Description {
  name: string;
  gender: Array<'FEMME'|'HOMME'|'HERMAPHRODITE'>;
  race: Array<'HUMAIN'|'ELFE'|'NAIN'|'ORC'|'GOBELIN'>;
  mood: string; //role play
  job: string; //classe metier à coder
  title: string; //titre "honorifique"
  avatar: string; //url de l'image
  level: number; // réfléchir au fonctionnement de l'xp
  story: string; // histoire, description (RP)

  //getters
  get theName() {
    return this.name;
  }
  get theGender() {
    return this.gender;
  }
  get theRace() {
    return this.race;
  }
  get theMood() {
    return this.mood;
  }
  get theJob() {
    return this.job;
  }
  get theAvatar() {
    return this.avatar;
  }
  get theStory() {
    return this.story;
  }
  get theTitle() {
    return this.title;
  }
  get theLevel() {
    return this.level;
  }

  constructor(
    name: string,
    gender: Array<'FEMME'|'HOMME'|'HERMAPHRODITE'>,
    race: Array<'HUMAIN'|'ELFE'|'NAIN'|'ORC'|'GOBELIN'>,
    mood: string,
    job: string,
    avatar: string,
    story: string
  )
  {
    this.name = name;
    this.gender = gender || ['FEMME'];
    this.race = race || ['HUMAIN'];
    this.mood = mood;
    this.job = job;
    this.avatar = avatar;
    this.story = story;
    this.title = 'Débutant';
    this.level = 0;
  }
  // Méthodes
  fullDescription() {
    return console.log("Bonjour ! Je m'appelle " + this.theName + ", " + this.theRace + " " + this.theJob + " " + this.theGender + " " + this.theTitle + " de niveau " + this.theLevel + ". En général, je suis d'humeur " + this.theMood + ". Les amis, voici mon histoire : " + this.theStory );
  }
}

class Statistics {
  taille: number; // en m
  mass: number; // en kg
  age: number; // en années
  for: number; // force physique
  def: number; // résistance physique et endurance
  int: number; // force mentale et charisme

  constructor(
    taille: number,
    mass: number,
    age: number
  )
  {
    this.taille = taille;
    this.mass = mass;
    this.age = age;
    this.for = 10;
    this.def = 10;
    this.int = 10;
  }
}
