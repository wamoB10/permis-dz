"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ScoreScreen from "./score-screen"
import SignImage from "@/components/ui/sign-image"
import { cn } from "@/lib/utils"
import type { Sign } from "@/types"

const QUESTIONS_COUNT = 10

interface Props {
  signs: Sign[]
}

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5)
}

function generateQuestion(allSigns: Sign[]) {
  const correctSign = allSigns[Math.floor(Math.random() * allSigns.length)]
  const others = allSigns.filter((s) => s.id !== correctSign.id)
  const shuffledOthers = shuffleArray(others).slice(0, 3)
  const options = shuffleArray([...shuffledOthers.map((s) => s.name), correctSign.name])
  const correctIndex = options.indexOf(correctSign.name)
  return { sign: correctSign, options, correctIndex }
}

export default function TestPanneaux({ signs }: Props) {
  const t = useTranslations("test")
  const [questions, setQuestions] = useState<ReturnType<typeof generateQuestion>[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (signs.length < 4) return
    const generated = Array.from({ length: QUESTIONS_COUNT }, () => generateQuestion(signs))
    setQuestions(generated)
  }, [signs])

  const current = questions[currentIndex]

  const handleSelect = (index: number) => {
    if (selected !== null) return
    setSelected(index)
    if (index === current.correctIndex) setScore((prev) => prev + 1)
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
    if (signs.length >= 4) {
      setQuestions(Array.from({ length: QUESTIONS_COUNT }, () => generateQuestion(signs)))
    }
  }

  if (finished) {
    return <ScoreScreen score={score} total={QUESTIONS_COUNT} onRestart={restart} />
  }

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
            src={current.sign.image}
            alt={current.sign.name}
            width={160}
            height={160}
            className="rounded-lg border bg-muted p-4 transition-transform duration-300 hover:scale-105"
          />
          <p className="text-lg font-medium text-center">{t("whatSign")}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            {current.options.map((opt, idx) => {
              const isSelected = selected === idx
              const isCorrectOption = idx === current.correctIndex

              return (
                <button
                  key={idx}
                  disabled={selected !== null}
                  onClick={() => handleSelect(idx)}
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
              <p className="font-medium mb-1">{current.sign.name}</p>
              <p className="text-muted-foreground">{current.sign.longDescription}</p>
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
