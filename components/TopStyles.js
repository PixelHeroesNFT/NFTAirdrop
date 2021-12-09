import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  .wallet-selector-title {
    margin-top: 15px;
  }
  @media (max-width: 768px) {
    height: 100%;
    padding-bottom: 50px;
  }
`;

export const Button = styled.button`
  width: 304px;
  min-height: 48px;
  border-radius: 10px;
  background-color: #fff;
  border: none;
  outline: none;
  border: 1px solid #444045;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  color: #444045;
  cursor: pointer;
  opacity: 0.9;
  :hover {
    opacity: 1;
  }
  @media (max-width: 768px) {
    width: 48%;
    opacity: 1;
  }
`;
export const SpaceButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 630px;
  @media (max-width: 768px) {
    width: calc(100% - 40px);
  }
`;
export const MainButton = styled.button`
  cursor: pointer;
  width: 304px;
  min-height: 48px;
  border-radius: 10px;
  background-color: #444045;
  border: none;
  outline: none;

  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  color: #ffffff;
  opacity: 0.9;
  :hover {
    opacity: 1;
  }
  @media (max-width: 768px) {
    width: 48%;
    opacity: 1;
  }
`;
export const TradingButton = styled.button`
  width: 304px;
  min-height: 48px;
  border-radius: 10px;
  background-color: #333;
  border: none;
  outline: none;

  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  color: #ffffff;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.6;
  text-align: center;
  color: #eaeaea;
  margin-top: 14px;
  margin-bottom: 14px;

  @media (max-width: 768px) {
    width: calc(100% - 30px);
    font-size: 30px;
    line-height: 1.5;
  }
`;

export const FeatureText = styled.span`
  color: #ffd400;
`;

export const Description = styled.p`
  width: 579px;
  font-size: 14px;
  line-height: 1.71;
  text-align: center;
  color: #fff;
  margin-bottom: 38px;

  @media (max-width: 768px) {
    width: 330px;
    margin-bottom: 30px;
  }
`;

export const ModernDesc = styled.p`
  width: 360px;
  font-size: 14px;
  line-height: 1.71;
  text-align: left;
  color: #fff;
  margin-bottom: 38px;

  @media (max-width: 768px) {
    width: 330px;
    margin-bottom: 30px;
    font-size: 12px;
  }
`;
export const ModernBold = styled.span`
  color: #ffd400;
  font-weight: bold;
`;

export const Coin = styled.img`
  width: 208px;
  margin-top: 40px;
  border: none;
  @media (max-width: 768px) {
    width: 150px;
    margin-top: 0px;
  }
`;
export const DeskTopGap = styled.div`
  width: 30px;
  @media (max-width: 768px) {
    width: 0;
  }
`;
export const Br = styled.br`
  display: ${(props) => (props.for === "desktop" ? "block" : "none")};

  @media (max-width: 768px) {
    display: ${(props) => (props.for === "mobile" ? "block" : "none")};
  }
`;

export const Header = styled.header`
  width: 90%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding-top: 32px;
  padding-bottom: 32px;
  @media (max-width: 768px) {
    width: calc(100% - 40px);
    padding-top: 4px;
    padding-bottom: 4px;
    height: 80px;
    align-items: center;
  }
`;

export const AvatarContainer = styled.div`
  min-width: 165px;
  height: 48px;
  padding-left: 8px;
  padding-right: 15px;
  border-radius: 22.5px;
  background-color: #444045;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    min-width: unset;
    padding-right: 0px;
    padding-left: 0px;
    justify-content: center;
    width: 48px;
    height: 48px;
  }
`;

export const Avatar = styled.div`
  border-radius: 100%;
  width: 32px;
  height: 32px;
  background-position: center;
  background-size: auto 110%;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    margin-left: unset;
  }
`;

export const UserName = styled.p`
  margin-left: 16px;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: #ffffff;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Message = styled.span`
  font-size: 16px;
  margin-top: 20px;

  &.success {
    color: white;
  }

  &.error {
    text-align: center;
    color: antiquewhite;
  }

  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const Error = styled.h2`
  color: antiquewhite;
  font-size: 14px;
`;

export const FooterWrap = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-top: 30px;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 768px) {
    padding-right: 0px;
    padding-left: 0;
  }
`;
export const DeskLinkList = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SpaceBetween = styled.div`
  width: ${(props) => props.width};
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: auto;
  }
`;
export const LinkItem = styled.li`
  margin-right: 20px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  :hover {
    color: #ffd400;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Icon = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const LegalText = styled.code`
  margin-top: 100px;
  width: 700px;
  color: #fff;
  @media (max-width: 768px) {
    width: calc(100% - 40px);
  }
`;

export const Balance = styled.span`
  padding-left: 10px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  :hover {
    color: #ffd400;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
