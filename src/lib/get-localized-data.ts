import { signs as signsFr } from "@/data/signs"
import { signs as signsAr } from "@/data/ar/signs"
import { priorityRules as priorityRulesFr } from "@/data/priorities"
import { priorityRules as priorityRulesAr } from "@/data/ar/priorities"
import { theoreticalQuestions as questionsFr } from "@/data/theoretical-questions"
import { theoreticalQuestions as questionsAr } from "@/data/ar/theoretical-questions"
import { testSeriesList as testSeriesFr } from "@/data/test-series"
import { testSeriesList as testSeriesAr } from "@/data/ar/test-series"
import { prioritySeriesList as prioritySeriesFr } from "@/data/priority-series"
import { prioritySeriesList as prioritySeriesAr } from "@/data/ar/priority-series"
import type { Sign, PriorityRule, TheoreticalQuestion } from "@/types"
import type { TestSeries } from "@/data/test-series"

export function getLocalizedSigns(locale: string): Sign[] {
  return locale === "ar" ? signsAr : signsFr
}

export function getLocalizedPriorityRules(locale: string): PriorityRule[] {
  return locale === "ar" ? priorityRulesAr : priorityRulesFr
}

export function getLocalizedQuestions(locale: string): TheoreticalQuestion[] {
  return locale === "ar" ? questionsAr : questionsFr
}

export function getLocalizedTestSeries(locale: string): TestSeries[] {
  if (locale === "ar") {
    return testSeriesAr.map((series, idx) => ({
      ...series,
      items: (testSeriesFr[idx]?.items || []).map((item) => {
        const arSign = signsAr.find((s) => s.image === item.image)
        return {
          ...item,
          name: arSign?.name || item.name,
          description: arSign?.description || item.description,
        }
      }),
    }))
  }
  return testSeriesFr
}

export function getLocalizedPrioritySeries(locale: string) {
  return locale === "ar" ? prioritySeriesAr : prioritySeriesFr
}
