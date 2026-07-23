import { PrioritySeries } from "@/data/priority-series"

export const prioritySeriesList: PrioritySeries[] = [
  {
    id: 1,
    title: "السلسلة 1",
    items: [
      { id: "1", title: "دوار وأفسح الطريق", description: "أفسح الطريق للمركبات الموجودة بالفعل في الدوار. المركبة الحمراء تمر ثم الصفراء.", scheme: "/images/priorities/prio1.png" },
      { id: "2", title: "توقف قف", description: "توقف إجباري قبل الخط. المركبتان الصفراء والزرقاء تمران ثم الحمراء.", scheme: "/images/priorities/prio2.png" },
      { id: "3", title: "تقاطع طرق ثانوية", description: "الأولوية لليمين. المركبة الزرقاء تمر ثم الصفراء ثم الحمراء.", scheme: "/images/priorities/prio3.png" },
      { id: "4", title: "ضوء أحمر", description: "الضوء الأحمر يفرض التوقف. أولوية للمشاة والمركبة الصفراء. ثم المركبة الزرقاء ثم الحمراء عند الضوء الأخضر.", scheme: "/images/priorities/prio4.png" },
      { id: "5", title: "طريق ذو أولوية", description: "طريق ذو أولوية. المركبتان الزرقاء والحمراء تسيران معاً ثم الصفراء.", scheme: "/images/priorities/prio5.png" },
      { id: "6", title: "مفترق بإشارات ضوئية", description: "المركبة الحمراء تمر عند الضوء الأخضر. عندما يصبح الضوء أخضر، المركبتان الصفراء والزرقاء تمران معاً.", scheme: "/images/priorities/prio6.png" },
      { id: "7", title: "غياب الإشارات (أولوية لليمين)", description: "في غياب الإشارات، الأولوية لليمين. المركبة الصفراء تمر ثم الحمراء ثم الزرقاء.", scheme: "/images/priorities/prio7.png" },
      { id: "8", title: "تجاوز مسموح أو ممنوع", description: "المركبة الخضراء يمكنها التجاوز، لكن ليس الصفراء (خط متصل أو خطر).", scheme: "/images/priorities/prio8.png" }
    ]
  },
  {
    id: 2,
    title: "السلسلة 2",
    items: [
      { id: "1", title: "دوار", description: "في الدوار، الأولوية للمركبات الموجودة داخله. المركبة الزرقاء تمر ثم البيضاء.", scheme: "/images/priorities/prio9.png" },
      { id: "2", title: "دوار وأفسح الطريق", description: "أفسح الطريق للمركبات الموجودة بالفعل في الدوار. المركبتان الخضراء والصفراء تمران معاً ثم الحمراء.", scheme: "/images/priorities/prio10.png" },
      { id: "3", title: "طريق ذو أولوية", description: "طريق ذو أولوية. المركبتان الزرقاء والصفراء تمران معاً ثم الحمراء.", scheme: "/images/priorities/prio11.png" },
      { id: "4", title: "أفسح الطريق", description: "أفسح الطريق. المركبتان الصفراء والزرقاء تمران ثم الحمراء.", scheme: "/images/priorities/prio12.png" },
      { id: "5", title: "نهاية طريق ذو أولوية", description: "نهاية طريق ذو أولوية. تعود الأولوية لليمين. المركبة الزرقاء تمر ثم الصفراء ثم الحمراء.", scheme: "/images/priorities/prio14.png" },
      { id: "6", title: "مفترق بإشارات ضوئية", description: "المركبة الصفراء تمر عند الضوء الأخضر. عندما يصبح الضوء أخضر، المركبتان الحمراء والزرقاء تمران معاً.", scheme: "/images/priorities/prio15.png" },
      { id: "7", title: "خط متصل – ممنوع التجاوز", description: "خط متصل، المركبة الزرقاء لا يمكنها التجاوز.", scheme: "/images/priorities/prio16.png" },
    ]
  },
  {
    id: 3,
    title: "السلسلة 3",
    items: [
      { id: "1", title: "أولوية لليمين", description: "أولوية لليمين كلاسيكية. المركبة الزرقاء تمر ثم الحمراء.", scheme: "/images/priorities/prio17.png" },
      { id: "2", title: "طريق رئيسي", description: "طريق رئيسي (أولوية نقطية). المركبتان الزرقاء والحمراء تمران معاً ثم الصفراء.", scheme: "/images/priorities/prio18.png" },
      { id: "3", title: "أفسح الطريق", description: "أفسح الطريق. المركبة الصفراء تمر ثم الزرقاء ثم الحمراء.", scheme: "/images/priorities/prio19.png" },
      { id: "4", title: "علامة ناقصة: قف بـ 150 م", description: "العلامة الناقصة هي 'قف بـ 150 م'، تعلن عن توقف إجباري.", scheme: "/images/priorities/prio20.png" },
      { id: "5", title: "تقاطع طرق ثانوية", description: "أولوية لليمين. المركبة الصفراء تمر ثم الحمراء ثم الزرقاء.", scheme: "/images/priorities/prio21.png" },
      { id: "6", title: "مفترق بإشارات ضوئية", description: "المركبة الحمراء تمر عند الضوء الأخضر. عند الأخضر التالي، المركبتان الزرقاء والصفراء تمران معاً.", scheme: "/images/priorities/prio22.png" },
      { id: "7", title: "غياب الإشارات (أولوية لليمين)", description: "في غياب الإشارات، أولوية لليمين. المركبة الحمراء تتقدم، تحرر يمين الصفراء التي تمر، ثم الزرقاء ثم الحمراء.", scheme: "/images/priorities/prio23.png" },
      { id: "8", title: "توقف قف", description: "توقف قف. المركبة الزرقاء تمر ثم الصفراء ثم الحمراء.", scheme: "/images/priorities/prio24.png" }
    ]
  },
  {
    id: 4,
    title: "السلسلة 4",
    items: [
      { id: "1", title: "طريق رئيسي", description: "طريق ذو أولوية. المركبتان الحمراء والزرقاء تمران معاً ثم الصفراء.", scheme: "/images/priorities/prio5.png" },
      { id: "2", title: "إشارات ضوئية وطريق ذو أولوية", description: "بوجود إشارات ضوئية وطريق ذي أولوية، المركبتان الصفراء والزرقاء تمران معاً ثم الحمراء عند الضوء الأخضر.", scheme: "/images/priorities/prio26.png" },
      { id: "3", title: "علامة ناقصة: قف", description: "العلامة الناقصة هي علامة 'قف'.", scheme: "/images/priorities/prio27.png" },
      { id: "4", title: "دوار", description: "في الدوار، الأولوية للمركبات الموجودة داخله. المركبة الحمراء تمر ثم الصفراء.", scheme: "/images/priorities/prio28.png" },
      { id: "5", title: "غياب الإشارات (أولوية لليمين)", description: "في غياب الإشارات، أولوية لليمين. المركبة الزرقاء تمر ثم الصفراء ثم الحمراء.", scheme: "/images/priorities/prio29.png" },
      { id: "6", title: "ضوء أحمر وممر مشاة", description: "الضوء الأحمر يفرض التوقف. أولوية للمشاة والمركبة الصفراء، ثم الزرقاء (عند خلو الطريق)، ثم الحمراء عند الضوء الأخضر.", scheme: "/images/priorities/prio30.png" },
      { id: "7", title: "إشارات ضوئية", description: "المركبة الزرقاء تمر، المركبتان الصفراء والخضراء تنتظران الضوء الأخضر.", scheme: "/images/priorities/prio31.png" },
      { id: "8", title: "إشارات ضوئية", description: "المركبتان الزرقاء والخضراء تمران، المركبتان الصفراء والحمراء تنتظران الضوء الأخضر.", scheme: "/images/priorities/prio32.png" }
    ]
  },
  {
    id: 5,
    title: "السلسلة 5",
    items: [
      { id: "1", title: "أولوية لليمين", description: "أولوية لليمين. المركبة الحمراء تمر، ثم الزرقاء والحمراء، ثم الصفراء.", scheme: "/images/priorities/prio33.png" },
      { id: "2", title: "طريق رئيسي", description: "طريق رئيسي. المركبتان الصفراء والزرقاء تمران معاً، ثم الحمراوان.", scheme: "/images/priorities/prio34.png" },
      { id: "3", title: "علامة ناقصة: أفسح الطريق بـ 150 م", description: "العلامة الناقصة هي 'أفسح الطريق بـ 150 م'.", scheme: "/images/priorities/prio35.png" },
      { id: "4", title: "إشارات ضوئية", description: "المركبتان الحمراء والصفراء تمران معاً، المركبتان الزرقاء والبيضاء تنتظران الضوء الأخضر.", scheme: "/images/priorities/prio36.png" },
      { id: "5", title: "غياب الإشارات (أولوية لليمين)", description: "بدون إشارات، أولوية لليمين. المركبة الصفراء تمر، ثم الأزرقان، ثم الحمراء.", scheme: "/images/priorities/prio37.png" },
      { id: "6", title: "طريق رئيسي وأفسح الطريق", description: "طريق رئيسي. المركبتان الحمراء والزرقاء تمران معاً ثم الصفراء.", scheme: "/images/priorities/prio38.png" },
      { id: "7", title: "طريق ذو أولوية", description: "طريق ذو أولوية. المركبتان الحمراء والصفراء تمران معاً، ثم الأزرق والأبيض معاً.", scheme: "/images/priorities/prio39.png" },
      { id: "8", title: "توقف قف", description: "توقف قف. المركبتان الحمراء والصفراء تمران معاً ثم الزرقاء.", scheme: "/images/priorities/prio40.png" }
    ]
  },
  {
    id: 6,
    title: "السلسلة 6",
    items: [
      { id: "1", title: "طريق ذو أولوية", description: "طريق ذو أولوية. المركبتان الحمراء والصفراء تمران معاً ثم الزرقاء.", scheme: "/images/priorities/prio41.png" },
      { id: "2", title: "إشارات ضوئية وطريق ذو أولوية", description: "المركبتان الصفراء والزرقاء تمران معاً ثم الحمراء عند الضوء الأخضر.", scheme: "/images/priorities/prio42.png" },
      { id: "3", title: "نهاية أولوية وأفسح الطريق", description: "نهاية طريق ذي أولوية يتبعها أفسح الطريق. المركبة الحمراء تمر أولاً.", scheme: "/images/priorities/prio43.png" },
      { id: "4", title: "علامة ناقصة: طريق ذو أولوية", description: "العلامة الناقصة هي طريق ذو أولوية (أولوية نقطية).", scheme: "/images/priorities/prio44.png" },
      { id: "5", title: "ضوء برتقالي", description: "عند الضوء البرتقالي، تطبق قواعد الإشارات. المركبة الحمراء تمر ثم الزرقاء ثم الخضراء.", scheme: "/images/priorities/prio45.png" },
      { id: "6", title: "دوار وأفسح الطريق", description: "أفسح الطريق للمركبات الموجودة بالفعل في الدوار. المركبة الحمراء تمر ثم الصفراء.", scheme: "/images/priorities/prio1.png" },
      { id: "7", title: "نهاية خط متصل", description: "نهاية خط متصل، التجاوز مسموح.", scheme: "/images/priorities/prio47.png" },
      { id: "8", title: "شرطي مرور", description: "الشرطي ينظم المرور. المركبتان الصفراء والخضراء تمران، البقية تنتظر الإشارة.", scheme: "/images/priorities/prio48.png" }
    ]
  },
  {
    id: 7,
    title: "السلسلة 7",
    items: [
      { id: "1", title: "أولوية لليمين", description: "أولوية لليمين. المركبة الحمراء تمر ثم الصفراء.", scheme: "/images/priorities/prio49.png" },
      { id: "2", title: "طريق ذو أولوية", description: "طريق ذو أولوية. المركبتان الصفراء والخضراء تمران معاً، ثم الأزرق والحمراء معاً.", scheme: "/images/priorities/prio50.png" },
      { id: "3", title: "تقاطع طرق ثانوية", description: "أولوية لليمين. الشاحنة والمركبة الخضراء تمران معاً، ثم الدراجة النارية، ثم السيارة الحمراء.", scheme: "/images/priorities/prio51.png" },
      { id: "4", title: "دوار", description: "في الدوار، الأولوية للمركبات الموجودة داخله. الأصفر والأبيض يمران، ثم الأزرق، ثم الأحمر عند الضوء الأخضر.", scheme: "/images/priorities/prio52.png" },
      { id: "5", title: "نهاية أولوية وأفسح الطريق", description: "نهاية طريق ذي أولوية يتبعها أفسح الطريق. المركبة الحمراء تمر أولاً.", scheme: "/images/priorities/prio53.png" },
      { id: "6", title: "دوار وأفسح الطريق", description: "أفسح الطريق للمركبات الموجودة بالفعل. المركبة الحمراء تمر ثم الصفراء.", scheme: "/images/priorities/prio1.png" },
      { id: "7", title: "شرطي مرور", description: "المركبتان الزرقاء والخضراء تمران معاً، الصفراء والحمراء تنتظران إشارة الشرطي.", scheme: "/images/priorities/prio55.png" },
      { id: "8", title: "نهاية خط متصل", description: "نهاية خط متصل، التجاوز مسموح.", scheme: "/images/priorities/prio64.png" }
    ]
  },
  {
    id: 8,
    title: "السلسلة 8",
    items: [
      { id: "1", title: "أولوية وإشارات ضوئية", description: "المركبة الزرقاء تمر، المركبتان الحمراء والصفراء تنتظران الضوء الأخضر.", scheme: "/images/priorities/prio57.png" },
      { id: "2", title: "غياب الإشارات (أولوية لليمين)", description: "بدون إشارات، أولوية لليمين. المركبتان الحمراء والزرقاء تمران معاً، ثم الصفراء، ثم الخضراء.", scheme: "/images/priorities/prio58.png" },
      { id: "3", title: "طريق ذو أولوية", description: "طريق ذو أولوية. المركبة الزرقاء تمر ثم الصفراء.", scheme: "/images/priorities/prio59.png" },
      { id: "4", title: "غياب الإشارات (أولوية لليمين)", description: "بدون إشارات، أولوية لليمين. المركبات الثلاث العليا تمر معاً، ثم الزرقاء، ثم الحمراء.", scheme: "/images/priorities/prio60.png" },
      { id: "5", title: "طريق ذو أولوية", description: "طريق ذو أولوية. المركبة الزرقاء تمر ثم الحمراء.", scheme: "/images/priorities/prio61.png" },
      { id: "6", title: "طريق رئيسي", description: "طريق رئيسي. المركبة الحمراء تمر ثم الصفراء.", scheme: "/images/priorities/prio62.png" },
      { id: "7", title: "نهاية أولوية وقف", description: "نهاية طريق ذي أولوية يتبعها قف. المركبتان الحمراء والزرقاء تمران معاً ثم الصفراء.", scheme: "/images/priorities/prio63.png" },
      { id: "8", title: "نهاية خط متصل", description: "نهاية خط متصل، التجاوز مسموح.", scheme: "/images/priorities/prio64.png" }
    ]
  },
  {
    id: 9,
    title: "السلسلة 9",
    items: [
      { id: "1", title: "طريق ذو أولوية وقف", description: "طريق ذو أولوية مع قف. المركبة الزرقاء تمر ثم الصفراء.", scheme: "/images/priorities/prio65.png" },
      { id: "2", title: "مركبة نازلة", description: "المركبة التي تجر مقطورة يجب أن تتوقف (الأكبر حجماً أو النازلة).", scheme: "/images/priorities/prio66.png" },
      { id: "3", title: "علامة ناقصة: طريق رئيسي", description: "العلامة الناقصة هي 'طريق رئيسي' (أولوية نقطية).", scheme: "/images/priorities/prio67.png" },
      { id: "4", title: "نهاية خط متصل", description: "نهاية خط متصل، التجاوز مسموح.", scheme: "/images/priorities/prio68.png" },
      { id: "5", title: "وضعية الانعطاف لليسار", description: "المركبة الصفراء ليست في وضعية صحيحة للانعطاف لليسار.", scheme: "/images/priorities/prio69.png" },
      { id: "6", title: "المركبة الأكبر حجماً", description: "المركبة الأكبر حجماً (الصفراء) يجب أن تتوقف.", scheme: "/images/priorities/prio70.png" },
      { id: "7", title: "وضعية الانعطاف لليسار", description: "المركبة الحمراء في وضعية صحيحة للانعطاف لليسار.", scheme: "/images/priorities/prio71.png" },
      { id: "8", title: "مركبة نازلة", description: "الحافلة، مركبة نازلة، يجب أن تتوقف.", scheme: "/images/priorities/prio72.png" }
    ]
  },
  {
    id: 10,
    title: "السلسلة 10",
    items: [
      { id: "1", title: "علامة ناقصة: تقاطع طرق ثانوية", description: "العلامة الناقصة هي 'تقاطع طرق ثانوية' (أولوية لليمين).", scheme: "/images/priorities/prio73.png" },
      { id: "2", title: "دوار وأفسح الطريق", description: "أفسح الطريق للمركبات الموجودة. المركبة الحمراء تمر ثم الصفراء.", scheme: "/images/priorities/prio1.png" },
      { id: "3", title: "ضوء برتقالي", description: "المركبة الزرقاء تواصل أو تتوقف حسب المسافة، البقية تنتظر الضوء الأخضر.", scheme: "/images/priorities/prio75.png" },
      { id: "4", title: "تقاطع طرق ثانوية", description: "أولوية لليمين. المركبة الصفراء تمر ثم الحمراء ثم الزرقاء.", scheme: "/images/priorities/prio76.png" },
      { id: "5", title: "طريق ذو أولوية", description: "طريق ذو أولوية. المركبة الزرقاء تمر ثم الصفراء.", scheme: "/images/priorities/prio77.png" },
      { id: "6", title: "مركبة نازلة", description: "الحافلة، مركبة نازلة، يجب أن تتوقف.", scheme: "/images/priorities/prio78.png" },
      { id: "7", title: "تجاوز مسموح", description: "التجاوز مسموح (لا يوجد خط متصل).", scheme: "/images/priorities/prio79.png" },
      { id: "8", title: "شرطي مرور", description: "المركبتان الخضراء والصفراء تمران معاً، الحمراء والزرقاء تنتظران أمر الشرطي.", scheme: "/images/priorities/prio80.png" }
    ]
  },
  {
    id: 11,
    title: "السلسلة 11",
    items: [
      { id: "1", title: "علامة ناقصة: تقاطع طرق ثانوية", description: "العلامة الناقصة هي 'تقاطع طرق ثانوية' (أولوية لليمين).", scheme: "/images/priorities/prio73.png" },
      { id: "2", title: "أفسح الطريق", description: "أفسح الطريق. المركبتان الزرقاء والصفراء تمران معاً ثم الحمراء.", scheme: "/images/priorities/prio82.png" },
      { id: "3", title: "ضوء برتقالي", description: "المركبة الزرقاء تواصل أو تتوقف حسب المسافة، البقية تنتظر الضوء الأخضر.", scheme: "/images/priorities/prio83.png" },
      { id: "4", title: "أولوية لليمين", description: "أولوية لليمين. المركبة الصفراء تمر ثم الحمراء ثم الزرقاء.", scheme: "/images/priorities/prio84.png" },
      { id: "5", title: "طريق رئيسي", description: "طريق رئيسي. المركبتان الحمراء والبيضاء تمران معاً ثم الصفراء.", scheme: "/images/priorities/prio85.png" },
      { id: "6", title: "علامة ناقصة: قف", description: "العلامة الناقصة هي علامة 'قف'.", scheme: "/images/priorities/prio86.png" },
      { id: "7", title: "طريق ذو أولوية", description: "طريق ذو أولوية. المركبة الصفراء تمر ثم الحمراء والزرقاء معاً.", scheme: "/images/priorities/prio87.png" },
      { id: "8", title: "مركبة نازلة", description: "المركبة التي تجر مقطورة، الأكبر حجماً والنازلة، يجب أن تتوقف.", scheme: "/images/priorities/prio88.png" }
    ]
  },
  {
    id: 12,
    title: "السلسلة 12",
    items: [
      { id: "1", title: "أولوية لليمين", description: "أولوية لليمين. المركبة الحمراء تمر ثم الزرقاء ثم الصفراء.", scheme: "/images/priorities/prio89.png" },
      { id: "2", title: "تجاوز مسموح", description: "التجاوز مسموح (لا يوجد خط متصل).", scheme: "/images/priorities/prio90.png" },
      { id: "3", title: "ضوء برتقالي وطريق ذو أولوية", description: "عند الضوء البرتقالي، أولوية حسب الإشارات. المركبتان الزرقاء والخضراء تمران معاً ثم الحمراء.", scheme: "/images/priorities/prio91.png" },
      { id: "4", title: "المركبة الأكبر حجماً", description: "المركبة التي تجر مقطورة، الأكبر حجماً، يجب أن تتوقف.", scheme: "/images/priorities/prio92.png" },
      { id: "5", title: "طريق رئيسي", description: "طريق رئيسي. المركبتان الصفراء والخضراء تمران معاً، ثم الزرقاء والحمراء.", scheme: "/images/priorities/prio93.png" },
      { id: "6", title: "طريق ذو أولوية", description: "طريق ذو أولوية. المركبة الصفراء تمر ثم الحمراء والزرقاء معاً.", scheme: "/images/priorities/prio94.png" },
      { id: "7", title: "شرطي مرور", description: "المركبتان الخضراء والصفراء تمران معاً، الحمراء والزرقاء تنتظران إشارة الشرطي.", scheme: "/images/priorities/prio95.png" },
      { id: "8", title: "أفسح الطريق", description: "أفسح الطريق. المركبة الحمراء تمر ثم الصفراء.", scheme: "/images/priorities/prio96.png" }
    ]
  },
  {
    id: 13,
    title: "السلسلة 13",
    items: [
      { id: "1", title: "توقف قف", description: "توقف قف. المركبة الحمراء تمر ثم الصفراء.", scheme: "/images/priorities/prio97.png" },
      { id: "2", title: "توقف قف", description: "توقف قف. المركبتان الحمراء والزرقاء تمران معاً ثم الصفراء.", scheme: "/images/priorities/prio98.png" },
      { id: "3", title: "دوار", description: "في الدوار، الأولوية للمركبات الموجودة داخله.", scheme: "/images/priorities/prio99.png" },
      { id: "4", title: "تجاوز ممنوع", description: "لا يمكنك التجاوز لأن مركبة أخرى تتجاوزك بالفعل.", scheme: "/images/priorities/prio100.png" },
      { id: "5", title: "تجاوز مسموح", description: "التجاوز مسموح (لا يوجد خط متصل).", scheme: "/images/priorities/prio101.png" },
      { id: "6", title: "ضوء برتقالي وطريق ذو أولوية", description: "عند الضوء البرتقالي، أولوية حسب الإشارات. المركبة الزرقاء تمر ثم الخضراء ثم الحمراء.", scheme: "/images/priorities/prio102.png" },
      { id: "7", title: "تجاوز مسموح", description: "التجاوز مسموح (لا يوجد خط متصل).", scheme: "/images/priorities/prio103.png" },
      { id: "8", title: "خط متقطع قبل خط متصل", description: "التجاوز مسموح لأن الخط المتقطع يسبق الخط المتصل.", scheme: "/images/priorities/prio104.png" }
    ]
  },
  {
    id: 14,
    title: "السلسلة 14",
    items: [
      { id: "1", title: "دوار وأفسح الطريق", description: "أفسح الطريق للمركبات الموجودة بالفعل في الدوار. المركبة الحمراء تمر ثم الصفراء.", scheme: "/images/priorities/prio1.png" },
      { id: "2", title: "أولوية لليمين", description: "أولوية لليمين. المركبة الحمراء تمر ثم الزرقاء ثم الصفراء.", scheme: "/images/priorities/prio106.png" },
      { id: "3", title: "أفسح الطريق", description: "تفقد الأولوية وتوجد علامة 'أفسح الطريق' أمامك. المركبة الحمراء تمر أولاً.", scheme: "/images/priorities/prio107.png" },
      { id: "4", title: "ضوء برتقالي (أولوية لليمين)", description: "عند الضوء البرتقالي، في غياب الإشارات، الأولوية لليمين. المركبة الزرقاء تمر ثم الصفراء.", scheme: "/images/priorities/prio108.png" },
      { id: "5", title: "توقف قف", description: "توقف قف. المركبة الحمراء تمر ثم الزرقاء ثم الصفراء.", scheme: "/images/priorities/prio109.png" },
      { id: "6", title: "تجاوز مسموح", description: "التجاوز مسموح (لا يوجد خط متصل أو نهاية خط متصل).", scheme: "/images/priorities/prio110.png" },
      { id: "7", title: "تجاوز ممنوع (مركبة تتجاوز)", description: "لا يمكنك التجاوز لأن مركبة خلفك تتجاوز بالفعل.", scheme: "/images/priorities/prio111.png" },
      { id: "8", title: "أفسح الطريق وطريق ذو أولوية", description: "أفسح الطريق يتبعه طريق ذو أولوية. المركبة الصفراء تمر، ثم الحمراء والزرقاء معاً.", scheme: "/images/priorities/prio112.png" }
    ]
  },
  {
    id: 15,
    title: "السلسلة 15",
    items: [
      { id: "1", title: "أفسح الطريق وممر دراجات", description: "أفسح الطريق للدراجين. الدراج يمر أولاً، ثم المركبة الصفراء، ثم الحمراء.", scheme: "/images/priorities/prio113.png" },
      { id: "2", title: "توقف مسموح (اتجاه واحد)", description: "التوقف مسموح في كلا الموقعين لأن المرور باتجاه واحد.", scheme: "/images/priorities/prio114.png" },
      { id: "3", title: "وضعية خاطئة للانعطاف (اتجاه واحد)", description: "في شارع باتجاه واحد، المركبة الزرقاء ليست في الوضعية المسموح بها للانعطاف.", scheme: "/images/priorities/prio115.png" },
      { id: "4", title: "تجاوز مسموح", description: "التجاوز مسموح (خط متقطع).", scheme: "/images/priorities/prio116.png" },
      { id: "5", title: "علامة ناقصة: أفسح الطريق بـ 150 م", description: "العلامة الناقصة هي 'أفسح الطريق بـ 150 م'.", scheme: "/images/priorities/prio117.png" },
      { id: "6", title: "توقف ممنوع", description: "التوقف غير مسموح من كلا الجانبين (حافة غير منتظمة وخط متصل).", scheme: "/images/priorities/prio118.png" },
      { id: "7", title: "شرطي مرور", description: "المركبتان الخضراء والزرقاء تمران معاً، الحمراء والصفراء تنتظران إشارة الشرطي.", scheme: "/images/priorities/prio119.png" },
      { id: "8", title: "طريق رئيسي وتوقف قف", description: "طريق رئيسي مع قف. المركبتان الحمراء والزرقاء تمران معاً ثم الصفراء.", scheme: "/images/priorities/prio120.png" }
    ]
  },
  {
    id: 16,
    title: "السلسلة 16",
    items: [
      { id: "1", title: "ضوء برتقالي وطريق ذو أولوية", description: "عند الضوء البرتقالي، أولوية حسب الإشارات. المركبة الزرقاء تمر (يمين خالٍ)، ثم الخضراء، ثم الحمراء.", scheme: "/images/priorities/prio121.png" },
      { id: "2", title: "مركبة نازلة أو أكبر حجماً", description: "المركبة التي تجر مقطورة، الأكبر حجماً أو النازلة، يجب أن تتوقف.", scheme: "/images/priorities/prio122.png" },
      { id: "3", title: "غياب الإشارات", description: "في غياب الإشارات، الأولوية لليمين. المركبة الزرقاء تمر ثم الحمراء.", scheme: "/images/priorities/prio123.png" },
      { id: "4", title: "أفسح الطريق (مركبات تنعطف)", description: "أفسح الطريق. المركبتان الحمراء والصفراء تمران معاً (أثناء الانعطاف)، ثم الزرقاء.", scheme: "/images/priorities/prio124.png" },
      { id: "5", title: "مفترق بإشارات ضوئية", description: "مفترق بإشارات ضوئية. المركبة الحمراء تمر، المركبتان الصفراوان تنتظران الضوء الأخضر.", scheme: "/images/priorities/prio125.png" },
      { id: "6", title: "دوار", description: "في الدوار، الأولوية للمركبات الموجودة داخله.", scheme: "/images/priorities/prio99.png" },
      { id: "7", title: "علامة ناقصة: أفسح الطريق بـ 150 م", description: "العلامة الناقصة هي 'أفسح الطريق بـ 150 م'.", scheme: "/images/priorities/prio117.png" },
      { id: "8", title: "تجاوز مسموح", description: "التجاوز مسموح لأن الخط المتقطع يسبق الخط المتصل.", scheme: "/images/priorities/prio110.png" }
    ]
  },
  {
    id: 17,
    title: "السلسلة 17",
    items: [
      { id: "1", title: "طريق ذو أولوية", description: "طريق ذو أولوية. المركبتان الزرقاء والصفراء تمران معاً ثم الحمراء.", scheme: "/images/priorities/prio127.png" },
      { id: "2", title: "أفسح الطريق", description: "أفسح الطريق. المركبتان الصفراء والزرقاء تمران ثم الحمراء.", scheme: "/images/priorities/prio128.png" },
      { id: "3", title: "مفترق بإشارات ضوئية", description: "مفترق بإشارات ضوئية. المركبة الصفراء تمر عند الضوء الأخضر. عندما يصبح أخضر للبقية، الحمراء والزرقاء تمران معاً.", scheme: "/images/priorities/prio129.png" },
      { id: "4", title: "خط متصل – ممنوع التجاوز", description: "خط متصل، المركبة الزرقاء لا يمكنها التجاوز.", scheme: "/images/priorities/prio130.png" },
      { id: "5", title: "تقاطع طرق ثانوية", description: "أولوية لليمين. المركبة الصفراء تمر ثم الحمراء ثم الزرقاء.", scheme: "/images/priorities/prio131.png" },
      { id: "6", title: "المركبة الأكبر حجماً", description: "المركبة الأكبر حجماً (الصفراء) يجب أن تتوقف.", scheme: "/images/priorities/prio132.png" },
      { id: "7", title: "أفسح الطريق", description: "أفسح الطريق. المركبة الزرقاء تمر ثم الحمراء ثم الصفراء.", scheme: "/images/priorities/prio133.png" },
      { id: "8", title: "مركبة نازلة", description: "الحافلة، مركبة نازلة، يجب أن تتوقف.", scheme: "/images/priorities/prio134.png" }
    ]
  },
  {
    id: 18,
    title: "السلسلة 18",
    items: [
      { id: "1", title: "أولوية لليمين", description: "أولوية لليمين. المركبة الحمراء تمر ثم الصفراء.", scheme: "/images/priorities/prio49.png" },
      { id: "2", title: "طريق ذو أولوية", description: "طريق ذو أولوية. المركبتان الصفراء والخضراء تمران معاً، ثم الأزرق والحمراء معاً.", scheme: "/images/priorities/prio50.png" },
      { id: "3", title: "أفسح الطريق", description: "تفقد الأولوية وتوجد علامة 'أفسح الطريق' أمامك. المركبة الحمراء تمر أولاً.", scheme: "/images/priorities/prio107.png" },
      { id: "4", title: "إشارات ضوئية وعلامات", description: "المركبة الزرقاء تمر، المركبتان الحمراء والصفراء تنتظران الضوء الأخضر.", scheme: "/images/priorities/prio138.png" },
      { id: "5", title: "غياب الإشارات (أولوية لليمين)", description: "بدون إشارات، أولوية لليمين. المركبة الصفراء تمر، ثم الأزرقان، ثم الحمراء.", scheme: "/images/priorities/prio139.png" },
      { id: "6", title: "طريق رئيسي وقف", description: "طريق رئيسي مع قف. المركبتان الحمراء والزرقاء تمران معاً ثم الصفراء.", scheme: "/images/priorities/prio140.png" },
      { id: "7", title: "طريق ذو أولوية وقف", description: "طريق ذو أولوية مع قف. المركبتان الحمراء والصفراء تمران معاً، ثم الأزرق والأبيض معاً.", scheme: "/images/priorities/prio141.png" },
      { id: "8", title: "توقف قف", description: "توقف قف. المركبتان الحمراء والصفراء تمران معاً ثم الزرقاء.", scheme: "/images/priorities/prio142.png" }
    ]
  },
  {
    id: 19,
    title: "السلسلة 19",
    items: [
      { id: "1", title: "دوار", description: "في الدوار، الأولوية للمركبات الموجودة داخله. المركبة الزرقاء تمر ثم البيضاء.", scheme: "/images/priorities/prio9.png" },
      { id: "2", title: "دوار وأفسح الطريق", description: "أفسح الطريق للمركبات الموجودة بالفعل في الدوار. المركبتان الخضراء والصفراء تمران معاً ثم الحمراء.", scheme: "/images/priorities/prio10.png" },
      { id: "3", title: "طريق ذو أولوية", description: "طريق ذو أولوية. المركبتان الصفراء والزرقاء تمران معاً ثم الحمراء.", scheme: "/images/priorities/prio145.png" },
      { id: "4", title: "أفسح الطريق", description: "أفسح الطريق. المركبتان الصفراء والزرقاء تمران معاً ثم الحمراء.", scheme: "/images/priorities/prio146.png" },
      { id: "5", title: "ضوء برتقالي وعلامات", description: "عند الضوء البرتقالي، أولوية حسب الإشارات. المركبة الحمراء تمر ثم الزرقاء ثم الخضراء.", scheme: "/images/priorities/prio147.png" },
      { id: "6", title: "ضوء برتقالي وعلامات", description: "عند الضوء البرتقالي، أولوية حسب الإشارات. المركبة الزرقاء تمر ثم الخضراء ثم الحمراء.", scheme: "/images/priorities/prio148.png" },
      { id: "7", title: "شرطي مرور", description: "المركبتان الصفراء والخضراء تمران معاً، المركبتان الزرقاء والحمراء تنتظران إشارة الشرطي.", scheme: "/images/priorities/prio149.png" },
      { id: "8", title: "شرطي مرور", description: "المركبتان الزرقاء والخضراء تمران معاً، المركبتان الصفراء والحمراء تنتظران إشارة الشرطي.", scheme: "/images/priorities/prio150.png" }
    ]
  },
  {
    id: 20,
    title: "السلسلة 20",
    items: [
      { id: "1", title: "دوار وأفسح الطريق", description: "أفسح الطريق للمركبات الموجودة بالفعل في الدوار. المركبة الحمراء تمر ثم الصفراء.", scheme: "/images/priorities/prio1.png" },
      { id: "2", title: "أولوية لليمين", description: "أولوية لليمين. المركبة الحمراء تمر ثم الزرقاء ثم الصفراء.", scheme: "/images/priorities/prio106.png" },
      { id: "3", title: "أفسح الطريق", description: "تفقد الأولوية وتوجد علامة 'أفسح الطريق' أمامك. المركبة الحمراء تمر أولاً.", scheme: "/images/priorities/prio107.png" },
      { id: "4", title: "ضوء برتقالي (أولوية لليمين)", description: "عند الضوء البرتقالي، في غياب الإشارات، الأولوية لليمين. المركبة الزرقاء تمر ثم الصفراء.", scheme: "/images/priorities/prio108.png" },
      { id: "5", title: "توقف قف", description: "توقف قف. المركبة الحمراء تمر ثم الزرقاء ثم الصفراء.", scheme: "/images/priorities/prio109.png" },
      { id: "6", title: "تجاوز مسموح", description: "التجاوز مسموح (لا يوجد خط متصل).", scheme: "/images/priorities/prio110.png" },
      { id: "7", title: "تجاوز ممنوع (مركبة تتجاوز)", description: "لا يمكنك التجاوز لأن مركبة خلفك تتجاوز بالفعل.", scheme: "/images/priorities/prio111.png" },
      { id: "8", title: "أفسح الطريق وطريق ذو أولوية", description: "أفسح الطريق يتبعه طريق ذو أولوية. المركبة الصفراء تمر، ثم الحمراء والزرقاء معاً.", scheme: "/images/priorities/prio112.png" }
    ]
  }
]
