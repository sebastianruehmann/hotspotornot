import {RISK_LEVELS} from '../constants';

export const hasHigherRiskLevel = (riskLevel, neededRiskLevel) => {
  const weightedRiskLevels = Object.values(RISK_LEVELS)
  return weightedRiskLevels.indexOf(riskLevel) >= weightedRiskLevels.indexOf(neededRiskLevel)
}

export const mapRiskLevel = (cases7Per100k) => {
  if (cases7Per100k < 35) return RISK_LEVELS.low;
  if (cases7Per100k <= 50) return RISK_LEVELS.medium;
  return RISK_LEVELS.high;
}
