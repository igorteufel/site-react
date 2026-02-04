import styled from 'styled-components';

export const Section = styled.footer`
  position: relative;
  width: 100%;
  min-height: 400px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 80px 0 0;
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  box-sizing: border-box;
`;

export const Title = styled.p`
  font-size: clamp(20px, 2vw, 32px);
  font-weight: bold;
  margin: 0;
  text-align: center;
  color: white;
`;

export const Subtitle = styled.p`
  font-size: clamp(16px, 2vw, 20px);
  color: white;
  text-align: center;
  margin: 0;
  max-width: 600px;
  font-weight: 400;
  line-height: 1.4;
  opacity: 0.85;
`;

export const Joia = styled.img`
  display: block;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  width: clamp(200px, 30vw, 400px);
  height: auto;
`;
