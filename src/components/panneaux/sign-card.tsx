"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import SignImage from "@/components/ui/sign-image"
import { Sign } from "@/types"

export default function SignCard({ sign }: { sign: Sign }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card
        className="cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => setOpen(true)}
      >
        <CardContent className="p-4 flex flex-col items-center text-center space-y-3">
          <SignImage
            src={sign.image}
            alt={sign.name}
            width={96}
            height={96}
            className="rounded-lg bg-muted p-2"
          />
          <div>
            <h3 className="font-semibold text-sm">{sign.name}</h3>
            <p className="text-xs text-muted-foreground line-clamp-2">
              {sign.description}
            </p>
          </div>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{sign.name}</DialogTitle>
            <DialogDescription>{sign.category}</DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <SignImage
              src={sign.image}
              alt={sign.name}
              width={128}
              height={128}
            />
          </div>
          <p className="text-sm text-muted-foreground">{sign.longDescription}</p>
        </DialogContent>
      </Dialog>
    </>
  )
}
