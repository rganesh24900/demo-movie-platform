import { updateImage } from '../../common';

const Cast = ({ cast = null }) => {
  console.log({ cast });
  return (
    <div className="flex flex-col gap-2">
      <div className='w-24'>
        <img src={updateImage(cast?.profile_path)} alt="Cast Image" />
        <p className="text-white text-xs">{cast?.original_name}</p>
        <p className="text-white text-xs">{cast?.character}</p>
        <p className="text-white text-xs"></p>
      </div>
    </div>
  );
};

export default Cast;
