import { Notific, NotificDiv } from './Feedback.styled';
export const Notification = ({ message }) => {
  return (
    <NotificDiv>
      <Notific>{message}</Notific>
    </NotificDiv>
  );
};
