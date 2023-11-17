import styled from "styled-components";

export const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(p) => (p.isOpen ? "312px" : "82px")};
  margin: 160px 34px 0px 34px;
`;
export const SIdebarIcon = styled.img`
  margin-left: ${(p) => (p.isOpen ? "24px" : "")};
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  height: 82px;
  cursor: pointer;
  justify-content: ${(p) => (p.isOpen ? "space-around" : "center")};
  width: 100%;
  width: ${(p) => (p.isOpen ? "100%" : "82px")};
  border-radius: ${(p) => (p.isOpen ? "12px" : "50%")};
  background-color: ${(p) => (p.selected ? "#3B486D" : "transparent")};
  font-weight: ${(p) => (p.selected ? "bold" : "")};
`;

export const SidebarItemName = styled.p`
  color: #f1f1f1;
  font-size: 36px;
  text-align: left;
  margin-left: 50px;
  width: 100%;
`;
