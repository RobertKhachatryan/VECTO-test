import Genres from "../../assets/icons/GenresIcon.png";
import Search from "../../assets/icons/SearchIcon.png";
import Home from "../../assets/icons/HomeIcon.png";
import Movies from "../../assets/icons/MoviesIcon.png";
import TVshows from "../../assets/icons/TVshowsIcon.png";
import WarchLater from "../../assets/icons/WatchLaterIcon.png";

export const sidebarData = [
  {
    name: "Search",
    icon: Search,
    isSelected: false,
  },
  {
    name: "Home",
    icon: Home,
    isSelected: true,
  },
  {
    name: "TV Shows",
    icon: TVshows,
    isSelected: false,
  },
  {
    name: "Movies",
    icon: Movies,
    isSelected: false,
  },
  {
    name: "Genres",
    icon: Genres,
    isSelected: false,
  },
  {
    name: "Watch Later",
    icon: WarchLater,
    isSelected: false,
  },
];
