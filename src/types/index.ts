export interface Sign {
  id: string
  category: 'danger' | 'interdiction' | 'obligation' | 'indication' | 'intersection' | 'chemin_de_fer' | 'fin_interdiction'
  name: string
  description: string
  longDescription: string
  image: string
}

export interface PriorityRule {
  id: string
  title: string
  description: string
  explanation: string
  cases: string[]
  memoryTip: string
  scheme: string // SVG diagramme
}

export interface TheoreticalQuestion {
  id: string
  question: string
  answer: string
  category: string
}