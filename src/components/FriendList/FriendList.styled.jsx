import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding-top: 20px;
  padding-bottom: 20px;
  gap: 10px;
`;

export const FriendItem = styled.li`
  padding-left: 40px;
  width: 500px;
  height: 100px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 30px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ stat }) => {
    return stat ? '#008000' : '#ff0000';
  }};
`;

export const Avatar = styled.img`
  width: 65px;
  height: auto;
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
