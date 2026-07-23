"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ScoreScreen from "./score-screen"
import SignImage from "@/components/ui/sign-image"
import { cn } from "@/lib/utils"
import type { PriorityRule } from "@/types"

const QUESTIONS_COUNT = 6

interface Props {
  priorityRules: PriorityRule[]
}

const correctAnswers: Record<string, string> = {
  "priorite-droite": "Vehicule de droite",
  "stop": "Vehicule sur la voie prioritaire",
  "cedez-le-passage": "Vehicule sur la voie prioritaire",
  "rond-point": "Vehicule deja engage dans le rond-point",
  "route-prioritaire": "Vous etes prioritaire",
}

function generateQuestion(rules: PriorityRule[], t: (key: string) => string) {
  const rule = rules[Math.floor(Math.random() * rules.length)]
  const correct = correctAnswers[rule.id] || "Vehicule de droite"
  const fakeAnswers = [
    "Vehicule de gauche",
    "Aucun vehicule",
    "Vehicule le plus rapide",
    "Vehicule de droite",
  ]
  const options = [...new Set([correct, ...fakeAnswers])]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
  if (!options.includes(correct)) options[0] = correct
  return {
    rule,
    question: t("whatVehicle"),
    options,
    correct,
  }
}

export default function TestPriorites({ priorityRules }: Props) {
  const t = useTranslations("test")
  const [questions, setQuestions] = useState<ReturnType<typeof generateQuestion>[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (priorityRules.length === 0) return
    const gen = () => generateQuestion(priorityRules, t)
    const generated = Array.from({ length: QUESTIONS_COUNT }, gen)
    setQuestions(generated)
  }, [priorityRules, t])

  const current = questions[currentIndex]

  const handleSelect = (answer: string, idx: number) => {
    if (selected !== null) return
    setSelected(idx)
    if (answer === current.correct) setScore((prev) => prev + 1)
    setShowExplanation(true)
  }

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setSelected(null)
      setShowExplanation(false)
    } else {
      setFinished(true)
    }
  }

  const restart = () => {
    setCurrentIndex(0)
    setSelected(null)
    setScore(0)
    setShowExplanation(false)
    setFinished(false)
    if (priorityRules.length > 0) {
      setQuestions(Array.from({ length: QUESTIONS_COUNT }, () => generateQuestion(priorityRules, t)))
    }
  }

  if (finished) return <ScoreScreen score={score} total={QUESTIONS_COUNT} onRestart={restart} />
  if (!current) return <div className="text-center py-20">{t("loading")}</div>

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{t("questionLabel", { current: currentIndex + 1, total: QUESTIONS_COUNT })}</span>
        <span>{t("scoreLabel", { score })}</span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full">
        <div
          className="h-2 bg-primary rounded-full transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / QUESTIONS_COUNT) * 100}%` }}
        />
      </div>
      <Card>
        <CardContent className="p-6 flex flex-col items-center space-y-6">
          <SignImage
            src={current.rule.scheme}
            alt={current.rule.title}
            width={192}
            height={192}
            className="transition-transform duration-300 hover:scale-105"
          />
          <p className="text-lg font-medium">{current.question}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            {current.options.map((opt, idx) => {
              const isSelected = selected === idx
              const isCorrectOption = opt === current.correct

              return (
                <button
                  key={idx}
                  disabled={selected !== null}
                  onClick={() => handleSelect(opt, idx)}
                  className={cn(
                    "h-auto py-3 px-4 justify-start rounded-xl border text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    selected === null &&
                      "border-input bg-background hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] hover:shadow-sm",
                    selected !== null && isCorrectOption &&
                      "bg-emerald-500 text-white border-emerald-500 shadow-md scale-[1.02]",
                    selected !== null && isSelected && !isCorrectOption &&
                      "bg-rose-500 text-white border-rose-500 shadow-md",
                    selected !== null && !isSelected && !isCorrectOption &&
                      "opacity-50 border-muted bg-muted text-muted-foreground"
                  )}
                >
                  {opt}
                </button>
              )
            })}
          </div>
          {showExplanation && (
            <div className="w-full bg-muted p-4 rounded-md text-sm animate-in fade-in slide-in-from-top-4 duration-300">
              <p className="font-medium">{current.rule.title}</p>
              <p>{current.rule.explanation}</p>
              <Button className="mt-3" onClick={nextQuestion}>
                {currentIndex < QUESTIONS_COUNT - 1 ? t("nextQuestion") : t("viewScore")}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
