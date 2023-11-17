import { Sidebar } from "../../components/Sidebar/Sidebar";
import * as S from "./styles";
import BigTitle from "../../assets/FeaturedTitleImage.png";
import PlayIcon from "../../assets/icons/playButtonIcon.png";
import data from "../../data.json";
import { TrendingNow } from "../../components/TrendingNow/TrendingNow";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [selectedMovie, setSelectedMovie] = useState(data.Featured);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    let timeoutid;
    if (selectedMovie.VideoUrl) {
      timeoutid = setTimeout(() => {
        setShowVideo(true);
      }, [2000]);
    }
    return () => {
      clearTimeout(timeoutid);
      setShowVideo(false);
    };
  }, [selectedMovie]);

  return (
    <S.Main>
      {!showVideo ? (
        <S.BgImage src={require(`../../assets/${data.Featured.CoverImage}`)} />
      ) : (
        <S.BgVideo autoPlay key={selectedMovie.Id}>
          <source src={selectedMovie?.VideoUrl} />
        </S.BgVideo>
      )}
      <Sidebar />
      <S.Wrapper>
        <S.MovieText>{selectedMovie.Category}</S.MovieText>
        <S.BigTitle src={BigTitle} />
        <S.BigTitle>{selectedMovie.Title}</S.BigTitle>
        <S.AdditionalInfoBlock>
          <S.AdditionalInfoText>
            {selectedMovie.ReleaseYear}
          </S.AdditionalInfoText>
          <S.AdditionalInfoText>{selectedMovie.MpaRating}</S.AdditionalInfoText>
          <S.AdditionalInfoText>1h 48m</S.AdditionalInfoText>
        </S.AdditionalInfoBlock>
        <S.Desctiption>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </S.Desctiption>
        <S.ButtonsBlock>
          <S.Button>
            <S.PlayIcon src={PlayIcon} /> Play
          </S.Button>
          <S.Button moreInfo={true}>More Info</S.Button>
        </S.ButtonsBlock>
        <TrendingNow setSelectedMovie={setSelectedMovie} />
      </S.Wrapper>
    </S.Main>
  );
};
