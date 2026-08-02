import type { ComponentType } from 'react'
import {
  BarcodeIcon,
  PerformanceChartIcon,
  QualityShieldIcon,
  RobotArmIcon,
} from '../components/icons/FeatureIcons'

export type Feature = {
  id: string
  Icon: ComponentType<{ className?: string }>
  /** Rendered on separate lines to match the pillar cards in the design. */
  title: [string, string]
  tags: [string, string, string]
}

export const FEATURES: Feature[] = [
  {
    id: 'production',
    Icon: RobotArmIcon,
    title: ['Production', 'Management'],
    tags: ['Plan', 'Execute', 'Monitor'],
  },
  {
    id: 'quality',
    Icon: QualityShieldIcon,
    title: ['Quality', 'Management'],
    tags: ['Assure', 'Control', 'Improve'],
  },
  {
    id: 'performance',
    Icon: PerformanceChartIcon,
    title: ['Performance', 'Dashboards'],
    tags: ['Insights', 'Analytics', 'KPI'],
  },
  {
    id: 'traceability',
    Icon: BarcodeIcon,
    title: ['Traceability', '& Reporting'],
    tags: ['Track', 'Trace', 'Report'],
  },
]
