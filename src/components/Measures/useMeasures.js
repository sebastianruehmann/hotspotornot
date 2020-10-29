import { RISK_LEVELS } from '../../constants'
import {
  BarIcon,
  GroupIcon,
  MasksIcon,
  SocialDistancingIcon,
} from '../../icons'
import { useTranslation } from '../../i18n'

export const useMeasures = () => {
  const { t } = useTranslation()

  return [
    {
      title: t('measures.list.masksMedium.title'),
      description: t('measures.list.masksMedium.description'),
      type: RISK_LEVELS.medium,
      Icon: MasksIcon,
    },
    {
      title: t('measures.list.partiesMedium.title'),
      description: t('measures.list.partiesMedium.description'),
      type: RISK_LEVELS.medium,
      Icon: GroupIcon,
    },
    {
      title: t('measures.list.masksHigh.title'),
      description: t('measures.list.masksHigh.description'),
      type: RISK_LEVELS.high,
      Icon: MasksIcon,
    },
    {
      title: t('measures.list.partiesHigh.title'),
      description: t('measures.list.partiesHigh.description'),
      type: RISK_LEVELS.high,
      Icon: GroupIcon,
    },
    {
      title: t('measures.list.curfew.title'),
      description: t('measures.list.curfew.description'),
      type: RISK_LEVELS.high,
      Icon: BarIcon,
    },
    {
      title: t('measures.list.contactRestrictions.title'),
      description: t('measures.list.contactRestrictions.description'),
      type: RISK_LEVELS.high,
      Icon: SocialDistancingIcon,
    },
  ]
}
