import styled from 'styled-components';
import { getRandomHexColor } from './Statistics';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StatisticsTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin: 0 auto;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  padding: 0;
`;

export const StatItem = styled.li`
  width: 100px;
  height: 100px;
  border-radius: 5%;
  background-color: ${getRandomHexColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
`;

export const Percentage = styled.span`
  font-size: 24px;
  font-weight: 700;
`;
