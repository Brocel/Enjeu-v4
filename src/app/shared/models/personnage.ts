export class Personnage {
  roles: Array<'JOUEUR'|'MOB'>;
  readonly id: string;
  description: Description;
  statistics: Statistics;

  //getters
  get theId() {
    return this.id;
  }

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
    if (!this.id) {
      let raceGenderJob: string = this.description.theRace + this.description.theGender + this.description.theJob;
      this.id = raceGenderJob;
    }
    //mettre un return description et statistics ?
  }
  // Méthodes
}

class Description {
  name: string;
  gender: string;
  race: string;
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
