import { Game } from "../hooks/useGames";
import { FaXbox } from "@react-icons/all-files/fa/FaXbox";
import { FaPlaystation } from "@react-icons/all-files/fa/FaPlaystation";
import { HiOutlineDesktopComputer } from "@react-icons/all-files/hi/HiOutlineDesktopComputer";
import { AiFillAndroid } from "@react-icons/all-files/ai/AiFillAndroid";
import { AiFillApple } from "@react-icons/all-files/ai/AiFillApple";
import { MdPhoneIphone } from "@react-icons/all-files/md/MdPhoneIphone";
import { IoIosGlobe } from "@react-icons/all-files/io/IoIosGlobe";
import { FaLinux } from "@react-icons/all-files/fa/FaLinux";
import { SiNintendoswitch } from "@react-icons/all-files/si/SiNintendoswitch";
import RatingEmoji from "./RatingEmoji";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameBox = ({ game }: Props) => {
  const platforms = game.parent_platforms.map((platform) => platform.platform);

  const iconMap: { [key: string]: any } = {
    pc: <HiOutlineDesktopComputer />,
    xbox: <FaXbox />,
    playstation: <FaPlaystation />,
    android: <AiFillAndroid />,
    mac: <AiFillApple />,
    linux: <FaLinux />,
    nintendo: <SiNintendoswitch />,
    ios: <MdPhoneIphone />,
    web: <IoIosGlobe />,
  };

  return (
    <div className=" bg-custom-light-black rounded-xl w-[350px]">
      <img
        src={getCroppedImageUrl(game.background_image)}
        className="rounded-xl"
      />
      <div className="pl-4 pt-4">
        <div className="flex justify-between">
          <div className="flex gap-2 text-gray-400">
            {platforms.map((platform) => (
              <p key={platform.id}>{iconMap[platform.slug]}</p>
            ))}
          </div>
          <p>score</p>
        </div>
        <h2 className="text-white font-semibold">{game.name}</h2>
        <RatingEmoji rating={game.rating_top} />
      </div>
    </div>
  );
};

export default GameBox;
