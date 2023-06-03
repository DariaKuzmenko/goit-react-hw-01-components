import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px auto;
  width: 300px;
  height: 400px;
  border-radius: 3%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: 20px;
  background-color: #edc1c1;
`;

export const UserName = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-size: 26px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-size: 20px;
  color: #a49d9d;
`;

export const Location = styled.p`
  margin: 0;
  font-size: 20px;
  color: #a49d9d;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding-right: 5px;
`;

export const Label = styled.span`
  font-size: 20px;
  color: #a49d9d;
`;
export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #0c0c0c;
`;
