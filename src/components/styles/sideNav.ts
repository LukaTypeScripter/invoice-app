import styled from "styled-components";

export const SideNavCont = styled.div`
  align-items: center;
  background: #373b53;
  border-radius: 0 20px 20px 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 0;
  max-width: 103px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  @media only screen and (max-width: 1024px) {
    border-radius: 0;
    flex-direction: row;
    gap: 36px;
    max-width: 100%;
    position: relative;
  }
`;
export const SideNavLogo = styled.img`
  height: 103px;
  object-fit: cover;
  object-position: center;
  width: 103px;
`;

export const ThemeWrap = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  max-width: 144px;
  padding-bottom: 24px;
  width: 100%;
  @media only screen and (max-width: 1024px) {
    flex-direction: row;
    gap: 36px;
    padding-bottom: 0;
  }
`;
export const Seperetion = styled.div`
  background: #494e6e;
  height: 1px;
  width: 100%;
  @media only screen and (max-width: 1024px) {
    width: 1px;
    height: 90px;
    
  }
`;
export const Theme = styled.img`
  height: 20px;
  object-fit: cover;
  object-position: center;
  width: 20px;
`;
export const Avatar = styled.img`
  border-radius: 50%;
  height: 40px;
  object-fit: cover;
  object-position: center;
  width: 40px;
`;
