import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GameBoxSkeleton = () => {
  return (
    <>
      <div className=" bg-custom-light-black rounded-xl w-[420px] pb-4 h-[420px] mb-6">
        <SkeletonTheme baseColor="#737373" highlightColor="#a6a6a6">
          <Skeleton
            height={278}
            width={420}
            className="absolute rounded-t-xl rounded-b-none"
          />
          <div className="relative top-[250px]">
            <Skeleton width={360} className="mt-4" />
            <Skeleton width={360} />
            <Skeleton width={300} />
          </div>
        </SkeletonTheme>
      </div>
    </>
  );
};

export default GameBoxSkeleton;
