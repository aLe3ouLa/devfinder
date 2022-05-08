import { formatDate } from "../utils/dateUtils";
import {
  FaLocationArrow,
  FaTwitter,
  FaInternetExplorer,
  FaBuilding,
} from "react-icons/fa";
import InfoStats from "./info-stats.component";
import Stats from "./stats.component";

const Card = ({ user }) => {
  const date = new Date(user.created_at) ?? new Date();

  return (
    <div className="flex justify-between px-12 py-12 dark:bg-slate-700 bg-white rounded-lg">
      <div className="w-4/12 sm:w-2/12 mr-4">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="shadow rounded-full max-w-full h-auto align-middle border-none"
        />
      </div>

      <div className="w-9/12">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl text-gray-900 dark:text-white">
              {user.name}
            </h2>
            <p className="text-md text-blue-400">{`@${user.login}`}</p>
          </div>
          <p className="text-sm text-gray-900 dark:text-white">
            Joined on {formatDate(date)}
          </p>
        </div>

        <div className=" mt-2 mb-6">
          {user.bio ? 
          <p className="text-sm text-gray-700 dark:text-white">{user.bio}</p> : 
          <span className="text-sm text-gray-700 dark:text-white">This profile has no bio</span>}
        </div>

        <div className="mb-6 bg-gray-200 dark:bg-gray-800 flex px-4 py-2 rounded-md justify-between">
          {stats(user).map((data) => (
            <Stats
              key={`stats-${data.id}`}
              title={data.title}
              stat={data.text}
            />
          ))}
        </div>

        <div className="columns-2">
          {info(user).map((data) => (
            <InfoStats
              key={`info-${data.id}`}
              icon={data.icon}
              data={data.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

const info = (user) => [
  {
    id: 0,
    icon: FaLocationArrow,
    text: user.location,
  },
  {
    id: 1,
    icon: FaTwitter,
    text: user.twitter_username,
  },
  {
    id: 2,
    icon: FaInternetExplorer,
    text: user.blog,
  },
  {
    id: 3,
    icon: FaBuilding,
    text: user.company,
  },
];


const stats = (user) => [
  {
    id: 0,
    title: "Repos",
    text: user.public_repos,
  },
  {
    id: 1,
    title: "Followers",
    text: user.followers,
  },
  {
    id: 2,
    title: "Following",
    text: user.following,
  },
];