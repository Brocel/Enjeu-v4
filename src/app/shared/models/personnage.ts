export class Personnage {
  roles: Array<'JOUEUR'|'MOB'>;
  readonly id: string;
  description: Description;
  statistics: Statistics;

  constructor(
    roles: Array<'JOUEUR'|'MOB'>,
    //description
    name: string,
    gender: string,
    race: string,
    mood: string,
    job: string,
    avatar: string,
    story: string,
    //statistics
    taille: number,
    mass: number,
    age: number
  )
  {
    this.roles = roles || ['JOUEUR'];
    this.description = new Description(name, gender, race, mood, job, avatar, story);
    this.statistics = new Statistics(taille, mass, age);
    //mettre un return descrition et statistics ?
  }
  // Méthodes
  fullDescription() {
    return console.log("Bonjour ! Je m'appelle " + this.description.name + ", " + this.description.race + " " + this.description.job + " " + this.description.gender + " " + this.description.title + " de niveau " + this.description.level + ". En général, je suis d'humeur " + this.description.mood + ". Les amis, voici mon histoire : " + this.description.story );
  }
}

class Description {
  _name: string;
  _gender: string;
  _race: string;
  _mood: string; //role play
  _job: string; //classe metier à coder
  _title: string; //titre "honorifique"
  _avatar: string; //url de l'image
  _level: number; // réfléchir au fonctionnement de l'xp
  _story: string; // histoire, description (RP)

  //getters
  get name() {
    return this._name;
  }
  get gender() {
    return this._gender;
  }
  get race() {
    return this._race;
  }
  get mood() {
    return this._mood;
  }
  get job() {
    return this._job;
  }
  get avatar() {
    return this._avatar;
  }
  get story() {
    return this._story;
  }
  get title() {
    return this._title;
  }
  get level() {
    return this._level;
  }

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
    this._name = name;
    this._gender = gender;
    this._race = race;
    this._mood = mood;
    this._job = job;
    this._avatar = avatar;
    this._story = story;
    this._title = 'Débutant';
    this._level = 0;
  }
}

class Statistics {
  _taille: number; // en m
  _mass: number; // en kg
  _age: number; // en années
  _for: number; // force physique
  _def: number; // résistance physique et endurance
  _int: number; // force mentale et charisme

  constructor(
    taille: number,
    mass: number,
    age: number
  )
  {
    this._taille = taille;
    this._mass = mass;
    this._age = age;
    this._for = 10;
    this._def = 10;
    this._int = 10;
  }
}
