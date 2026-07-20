"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"
import { TheoreticalQuestion } from "@/types"

export default function QuestionCard({ question }: { question: TheoreticalQuestion }) {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <Card>
      <CardContent className="p-4 flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <p className="font-medium">{question.question}</p>
          <Badge variant="secondary" className="ml-2">{question.category}</Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAnswer(!showAnswer)}
            className="gap-2"
          >
            {showAnswer ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showAnswer ? "Masquer la réponse" : "Afficher la réponse"}
          </Button>
        </div>
        {showAnswer && (
          <div className="bg-muted p-3 rounded-md text-sm text-muted-foreground">
            {question.answer}
          </div>
        )}
      </CardContent>
    </Card>
  )
}