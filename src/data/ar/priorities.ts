import { PriorityRule } from "@/types"

export const priorityRules: PriorityRule[] = [
  {
    id: "priorite-droite",
    title: "الأولوية لليمين",
    description: "القاعدة الأساسية: أفسح الطريق للمركبة القادمة من اليمين.",
    explanation: "في تقاطع بدون إشارات، يجب عليك ترك أي مركبة قادمة من يمينك تمر أولاً. تنطبق هذه القاعدة حتى لو كنت في طريق رئيسي غير محدد.",
    cases: ["تقاطع شارعين سكنيين", "عند غياب الإشارات"],
    memoryTip: "تذكير: 'اليمين = أولوية'",
    scheme: "/images/priorities/priorite-droite.png",
  },
  {
    id: "stop",
    title: "قف",
    description: "توقف إجباري قبل إفساح الطريق.",
    explanation: "يجب عليك التوقف تماماً عند خط التوقف (أو قبل الإشارة). ثم أفسح الطريق لجميع المركبات قبل التوجه.",
    cases: ["تقاطع بشكل T", "مفترق مع رؤية محدودة"],
    memoryTip: "قف = توقف كلي، ثم أفسح الطريق",
    scheme: "/images/priorities/stop.png",
  },
  {
    id: "cedez-le-passage",
    title: "أفسح الطريق",
    description: "خفف سرعتك وأفسح الطريق للمركبات ذات الأولوية.",
    explanation: "يجب عليك تخفيف السرعة ولا تتجه إلا إذا كان الطريق خالياً. لست مضطراً للتوقف إذا لم تكن هناك سيارة قادمة.",
    cases: ["الدخول إلى طريق رئيسي", "مفترق مع علامة 'أفسح الطريق'"],
    memoryTip: "مثلث أبيض بحافة حمراء = أفسح الطريق",
    scheme: "/images/priorities/cedezpassage.png",
  },
  {
    id: "rond-point",
    title: "الدوار",
    description: "الأولوية للمركبات الموجودة بالفعل في الدوار.",
    explanation: "قبل الدخول إلى الدوار، يجب عليك إفساح الطريق للمركبات التي تسير داخله (القادمة من يسارك).",
    cases: ["دوار كلاسيكي", "دوار حضري"],
    memoryTip: "انظر لليسار، أفسح الطريق للمركبات داخل الدوار",
    scheme: "/images/priorities/rond-point.png",
  },
  {
    id: "route-prioritaire",
    title: "طريق ذو أولوية",
    description: "لك الأولوية على الطرق الثانوية.",
    explanation: "في طريق ذي أولوية (علامة معين)، لك الأولوية في جميع التقاطعات حتى نهاية الأولوية (معين مشطوب).",
    cases: ["الطرق الوطنية", "الشوارع ذات علامات المعين"],
    memoryTip: "معين أصفر = أنت صاحب الأولوية",
    scheme: "/images/priorities/route-prioritaire.png",
  },
]
