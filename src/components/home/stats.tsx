import { signs } from "@/data/signs"
import { priorityRules } from "@/data/priorities"
import { theoreticalQuestions } from "@/data/theoretical-questions"

export default function Stats() {
  const quizCount = 2 // panneaux + priorités
  return (
    <section className="container py-12 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
          <span className="text-3xl font-bold text-primary">{signs.length}</span>
          <span className="text-sm text-muted-foreground">Panneaux</span>
        </div>
        <div className="flex flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
          <span className="text-3xl font-bold text-primary">{priorityRules.length}</span>
          <span className="text-sm text-muted-foreground">Règles de priorité</span>
        </div>
        <div className="flex flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
          <span className="text-3xl font-bold text-primary">{theoreticalQuestions.length}</span>
          <span className="text-sm text-muted-foreground">Questions théoriques</span>
        </div>
        <div className="flex flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
          <span className="text-3xl font-bold text-primary">{quizCount}</span>
          <span className="text-sm text-muted-foreground">Quiz interactifs</span>
        </div>
      </div>
    </section>
  )
}