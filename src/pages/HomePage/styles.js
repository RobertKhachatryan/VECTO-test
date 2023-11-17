import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  /* background-image: ${(props) => props.bg};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top left;
  background-attachment: fixed; */
  overflow: hidden;
  max-height: 100vh;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BgImage = styled.img`
  z-index: -1;
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  /* background-size: cover;
  background-repeat: no-repeat;
  background-position: top left;
  background-attachment: fixed; */
`;

export const BgVideo = styled.video`
  z-index: -1;
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  overflow-y: scroll;
`;

export const MovieText = styled.p`
  margin: 160px 0px 0px 0px;
  color: #858688;
  text-transform: uppercase;
  font-family: Tajawal;
  letter-spacing: 4.8px;
  font-size: 24px;
  margin-bottom: 10px;
`;
export const BigTitle = styled.h1`
  font-size: 52px;
  color: #f1f1f1;
`;

export const AdditionalInfoBlock = styled.div`
  display: flex;
`;

export const AdditionalInfoText = styled.p`
  color: #f1f1f1;
  margin-right: 12px;
  margin: 0;
  margin: 10px 10px 0px 0px;
  font-size: 30px;
`;

export const Desctiption = styled.p`
  color: #f1f1f1;
  width: 800px;
  font-size: 32px;
  margin: 30px 0px 0px 0px;
`;

export const ButtonsBlock = styled.div`
  margin-top: 40px;
`;

export const Button = styled.button`
  border-radius: 40px;
  border: none;
  outline: none;
  width: 240px;
  height: 72px;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: -0.32px;
  color: #0c0c0c;
  margin-right: 10px;
  cursor: pointer;
  background: ${(p) =>
    p.moreInfo
      ? "transparent linear-gradient(128deg, #2727F5 0%, #001671 100%) 0% 0% no-repeat padding-box"
      : "#f1f1f1"};
  color: ${(p) => (p.moreInfo ? "#F1F1F1" : "#0c0c0c")};
`;

export const PlayIcon = styled.img`
  width: 17px;
  height: 20px;
`;
