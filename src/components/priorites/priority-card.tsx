import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SignImage from "@/components/ui/sign-image"
import { PriorityRule } from "@/types"
import { Lightbulb } from "lucide-react"

export default function PriorityCard({ rule }: { rule: PriorityRule }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-muted/50">
        <CardTitle className="text-xl">{rule.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <SignImage
          src={rule.scheme}
          alt={rule.title}
          width={320}
          height={240}
          className="w-48 mx-auto h-auto object-contain"
        />
        <p>{rule.description}</p>
        <div className="bg-muted p-3 rounded-md">
          <p className="font-medium text-sm">Explication :</p>
          <p className="text-sm text-muted-foreground">{rule.explanation}</p>
        </div>
        <div>
          <p className="font-medium text-sm">Cas pratiques :</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground">
            {rule.cases.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-start gap-2 text-primary">
          <Lightbulb className="h-5 w-5 mt-0.5" />
          <p className="text-sm font-medium">{rule.memoryTip}</p>
        </div>
      </CardContent>
    </Card>
  )
}
