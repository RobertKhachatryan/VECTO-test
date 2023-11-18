import styled from "styled-components";

export const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(p) => (p.isOpen ? "312px" : "82px")};
  padding: ${(p) => (p.isOpen ? "10px 20px" : "")};
  margin: ${(p) => (p.isOpen ? "" : "160px 34px 0px 34px")};
  justify-content: ${(p) => (p.isOpen ? "space-around" : "")};
  transition: 0.7s;
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

export const UserBlock = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-left: 30px;
`;

export const Avatar = styled.div`
  height: 82px;
  width: 82px;
  border-radius: 50%;
  background-color: aqua;
`;
export const UserName = styled.p`
  letter-spacing: -0.32px;
  color: #f1f1f1;
  font-size: 30px;
  margin-left: 20px;
`;

export const SidebarItemName = styled.p`
  color: #f1f1f1;
  font-size: 34px;
  text-align: left;
  margin-left: 50px;
  width: 100%;
`;

export const SidebarBottomBlock = styled.div`
  width: 100%;
`;

export const SidebarBottomItem = styled.p`
  letter-spacing: 4.8px;
  color: #858688;
  text-transform: uppercase;
  font-size: 24px;
  text-align: left;
  margin-left: 24px;
  cursor: pointer;
`;
