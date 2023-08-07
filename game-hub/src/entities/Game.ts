import { Platform } from "./Platform";
import { Genre } from "./Genre";
import { Publisher } from "./Publisher";

export interface Game {
  background_image: string;
  name: string;
  slug: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
  metacritic: number;
  genres: Genre[];
  publishers: Publisher[];
}
