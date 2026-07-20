import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RotateCcw, Award } from "lucide-react"

interface Props {
  score: number
  total: number
  onRestart: () => void
}

export default function ScoreScreen({ score, total, onRestart }: Props) {
  const percentage = Math.round((score / total) * 100)
  let message = "Continuez à vous entraîner !"
  if (percentage >= 80) message = "Excellent ! Vous êtes prêt pour l'examen."
  else if (percentage >= 50) message = "Pas mal, mais révisez encore un peu."

  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="flex flex-col items-center p-6 space-y-4">
        <Award className="h-12 w-12 text-primary" />
        <h2 className="text-2xl font-bold">Quiz terminé</h2>
        <p className="text-4xl font-extrabold">
          {score} / {total}
        </p>
        <p className="text-muted-foreground">{message}</p>
        <Button onClick={onRestart} className="gap-2">
          <RotateCcw className="h-4 w-4" /> Recommencer
        </Button>
      </CardContent>
    </Card>
  )
}