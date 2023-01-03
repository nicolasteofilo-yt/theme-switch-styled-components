import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 400px;
  box-shadow: 10px 10px 50px rgba(0, 0, 0, 1);
  border-radius: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(5px);
  transform-style: preserve-3d;
`;

export const Picture = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-top: 20px;
`;

export const Infos = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  small {
    margin-top: 5px;
  }

  svg {
    color: #fff;
    fill: #fff;
  }

  .details {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;
      margin-top: 8px;

      p {
        padding-left: 10px;
        font-size: 14px;
      }
    }
  }
`;

export const ButtonToProfile = styled.button`
  margin-top: 40px;
  width: 250px;
  height: 40px;
  background-color: #22212C;
  border: none;
  border-radius: 4px;

  a {
    text-decoration: none;
    color: #E6E6E6;
  }

  &:hover {
    filter: brightness(110%);
  }
`;