import PropTypes from 'prop-types';
import {
  Section,
  StatisticsTitle,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

export function getRandomHexColor() {
  return `${'#' + Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <StatisticsTitle>{title}</StatisticsTitle>

      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
