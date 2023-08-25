export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p>Good: {good} &#x1F601; </p>
      <p>Neutral: {neutral} &#x1F916;</p>
      <p>Bad: {bad} &#x1F632; </p>
      <p>Total Feedback: {total}</p>
      <p>Positive Feedback Percentage: {positivePercentage}%</p>
    </div>
  );
};
