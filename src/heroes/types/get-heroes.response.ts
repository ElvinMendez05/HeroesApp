import type { Hero } from "./hero.interface.response";

export interface HeroesResponse {
    total:  number;
    pages:  number;
    heroes: Hero[];
}
