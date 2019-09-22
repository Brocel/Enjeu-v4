import { Race } from './race';
import { Job } from './job';
import { Specialty } from './specialty';

export class Description {
  name: string;
  gender: 'FEMME'|'HOMME'|'HERMAPHRODITE';
  mood: string;
  avatar: string;
  story: string;
  race: Race;
  job: Job;
  specialty: Specialty;

  //getters
  get name() {
    return this.name;
  }
  get gender() {
    return this.gender;
  }
  get mood() {
    return this.mood;
  }
  get avatar() {
    return this.avatar;
  }
  get story() {
    return this.story;
  }

  constructor(
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
    this.name = name || 'PINIOUF';
    this.gender = gender || 'FEMME';
    this.mood = mood || 'FLEMMARD';
    this.avatar = avatar;
    this.story = story || 'Rédiger une histoire';
    this.race = new Race(race);
    this.job = new Job(job);
    this.specialty = new Job(specialty);

  }

}
