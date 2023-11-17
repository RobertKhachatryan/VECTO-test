import * as S from "./styles";
import data from "../../data.json";

export const TrendingNow = ({ setSelectedMovie }) => {
  return (
    <S.Main>
      <S.Title>trending now</S.Title>

      <S.TrendingNowBlock>
        {data.TendingNow.slice(0, 8).map((trendingNowItem) => {
          return (
            <S.TrendingNowItem
              key={Math.random() * Math.random()}
              onClick={() => setSelectedMovie(trendingNowItem)}
            >
              <S.Preview
                src={require(`../../assets/${trendingNowItem.CoverImage}`)}
                alt="teert"
              />
            </S.TrendingNowItem>
          );
        })}
      </S.TrendingNowBlock>
    </S.Main>
  );
};
