import { Game } from "../hooks/useGames";
import DefinitionItem from "./DefinitionItem";
import ScoreNumber from "./ScoreNumber";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <DefinitionItem header="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <p key={platform.id}>{platform.name}</p>
        ))}
      </DefinitionItem>
      <DefinitionItem header="Metascore">
        <ScoreNumber score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem header="Genres">
        {game.genres?.map((genre) => (
          <p key={genre.id}>{genre.name}</p>
        ))}
      </DefinitionItem>

      <DefinitionItem header="Publishers">
        {game.publishers?.map((publisher) => (
          <p key={publisher.id}>{publisher.name}</p>
        ))}
      </DefinitionItem>
    </div>
  );
};

export default GameAttributes;
