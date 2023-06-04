import PropTypes from 'prop-types';
import {
  List,
  FriendItem,
  Status,
  Avatar,
  FriendName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, avatar, isOnline, name }) => (
        <FriendItem key={id}>
          <Status stat={isOnline}>{isOnline}</Status>
          <Avatar src={avatar} alt="User avatar" />
          <FriendName>{name}</FriendName>
        </FriendItem>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
