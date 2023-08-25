import { ButtonStyled, BtnDiv } from './Feedback.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnDiv>
      {options.map(option => (
        <ButtonStyled key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </ButtonStyled>
      ))}
    </BtnDiv>
  );
};
