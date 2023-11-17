import * as S from "./styles";
import { sidebarData } from "./SidebarData";
import { useState } from "react";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Main onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
      {sidebarData.map((sidebarItem) => {
        return (
          <S.SidebarItem
            isOpen={isOpen}
            selected={sidebarItem.isSelected}
            key={Math.random() * Math.random()}
          >
            <S.SIdebarIcon src={sidebarItem.icon} alt="Icon" isOpen={isOpen} />
            {isOpen && (
              <S.SidebarItemName>{sidebarItem.name}</S.SidebarItemName>
            )}{" "}
          </S.SidebarItem>
        );
      })}
    </S.Main>
  );
};
