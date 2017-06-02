import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 11, name: "David M" },
      { id: 12, name: "Guillaume Dufloux" },
      { id: 13, name: "Clément Driollet" },
      { id: 14, name: "Théo Pauliat" },
      { id: 15, name: "Stephen Vinouze" },
      { id: 16, name: "Alexis Ardouin" },
      { id: 17, name: "Maxime de Chalendar" },
      { id: 18, name: "Bastien Gillet" },
      { id: 19, name: "Antony Body" },
      { id: 20, name: "Pierre le Poulain" }
    ];
    return {heroes};
  }
}
