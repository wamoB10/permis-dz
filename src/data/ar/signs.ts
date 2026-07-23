import { Sign } from "@/types"

export const signs: Sign[] = [
  {
    id: "danger-1",
    category: "danger",
    name: "خطر",
    description: "خطر غير محدد، كن منتبهاً.",
    longDescription: "تشير هذه الإشارة إلى خطر لا يتم تحديد نوعه. يجب تخفيف السرعة ومراقبة الطريق بعناية والاستعداد للتكيف (فرملة، تفادي).",
    image: "/images/classification/anim-domes.png"
  },
  {
    id: "danger-2",
    category: "danger",
    name: "خطر مؤقت غير محدد",
    description: "خطر مؤقت غير محدد، خفف سرعتك.",
    longDescription: "خطر مؤقت (أشغال، حادث، طريق مشوه). تكيف مع سرعتك وكن مستعداً للتوقف. الإشارة عادة ما تكون صفراء.",
    image: "/images/classification/danger-tempo.png"
  },
  {
    id: "danger-3",
    category: "danger",
    name: "مرور حيوانات أليفة",
    description: "احتمال مرور حيوانات، كن حذراً.",
    longDescription: "خطر مواجهة ماشية، أغنام، ماعز... خفف سرعتك، لا تستعمل المنبه لعدم إخافة الحيوانات.",
    image: "/images/classification/anim-domes.png"
  },
  {
    id: "danger-4",
    category: "danger",
    name: "طريق ذو اتجاهين",
    description: "ستقابل مركبات قادمة من الاتجاه المعاكس.",
    longDescription: "يعلن عن نهاية طريق باتجاه واحد والعودة إلى حركة مرور ثنائية الاتجاه. ابق على يمينك ويسر عملية التقاطع.",
    image: "/images/classification/double-sens-circulation.png"
  },
  {
    id: "danger-5",
    category: "danger",
    name: "منعطف يمين",
    description: "منعطف خطر لليمين، خفف سرعتك.",
    longDescription: "اقترب من هذا المنعطف بتخفيف سرعتك قبل الدخول، حافظ على مسار ثابت ولا تتجاوز.",
    image: "/images/classification/triangle-blanc.png"
  },
  {
    id: "danger-6",
    category: "danger",
    name: "منعطف يسار",
    description: "منعطف خطر لليسار، خفف سرعتك.",
    longDescription: "كما في المنعطف لليمين، خفف سرعتك، تمسك بيمينك وكن منتبهاً للمركبات المقابلة.",
    image: "/images/classification/virage-gauche.png"
  },
  {
    id: "danger-7",
    category: "danger",
    name: "تضيق الطريق من اليسار",
    description: "الطريق تضيق من الجانب الأيسر.",
    longDescription: "المسلك يصبح أضيق من الجانب الأيسر. خفف سرعتك ويسر مرور المستعملين الآخرين.",
    image: "/images/classification/retreci-gauche.png"
  },
  {
    id: "danger-8",
    category: "danger",
    name: "تضيق الطريق من اليمين",
    description: "الطريق تضيق من الجانب الأيمن.",
    longDescription: "التضيق يكون على اليمين. تكيف مع سرعتك وتمسك بيسارك.",
    image: "/images/classification/retreci-droite.png"
  },
  {
    id: "danger-9",
    category: "danger",
    name: "تضيق الطريق",
    description: "الطريق تضيق من كلا الجانبين.",
    longDescription: "الطريق تضيق بشكل متماثل. الحيطة واجبة خاصة عند التقاطع.",
    image: "/images/classification/chausse-retrecissement.png"
  },
  {
    id: "danger-10",
    category: "danger",
    name: "أشغال مؤقتة",
    description: "أشغال مؤقتة على الطريق، خفف سرعتك.",
    longDescription: "تشير هذه الإشارة إلى وجود أشغال. خفف سرعتك، كن منتبهاً للعمال والآلات وإشارات التحويل المؤقتة. احترم التحويلات وتخفيضات السرعة.",
    image: "/images/classification/travaux-tempo.png"
  },
  {
    id: "danger-11",
    category: "danger",
    name: "تضيق الطريق (مؤقت)",
    description: "تضيق مؤقت من الجانبين.",
    longDescription: "كلا جانبي الطريق متقلصان بشكل مؤقت. خفف سرعتك وكن مستعداً لإفساح الطريق.",
    image: "/images/classification/retreci-chausse.png"
  },
  {
    id: "danger-12",
    category: "danger",
    name: "ازدحام مروري مؤقت",
    description: "احتمال ازدحام أو تباطؤ في الحركة.",
    longDescription: "تشير هذه الإشارة إلى منطقة قد تكون حركة المرور فيها بطيئة أو متوقفة. تحلى بالصبر وحافظ على مسافة الأمان.",
    image: "/images/classification/triangle-jaune.png"
  },
  {
    id: "danger-13",
    category: "danger",
    name: "ممر للمشاة",
    description: "ممر للمشاة قريب، كن يقظاً.",
    longDescription: "يعلن عن ممر محمي للمشاة. خفف السرعة وأفسح الطريق للمشاة الذين عبروا أو على وشك العبور.",
    image: "/images/classification/passage-pieton.png"
  },
  {
    id: "danger-14",
    category: "danger",
    name: "ممر للأطفال",
    description: "قد يعبر أطفال، خفف سرعتك.",
    longDescription: "يشير إلى قرب مدرسة أو حديقة أو ملعب. الحيطة واجبة: الأطفال قد يظهرون فجأة.",
    image: "/images/classification/enfants.png"
  },
  {
    id: "danger-15",
    category: "danger",
    name: "منحدر خطر",
    description: "انحدار شديد، تحكم في سرعتك.",
    longDescription: "يعلن عن انحدار قوي. استعمل فرملة المحرك، ارجع إلى سرعة أقل إذا لزم الأمر، ولا تدع المركبة تكتسب سرعة.",
    image: "/images/classification/descente.png"
  },
  {
    id: "danger-16",
    category: "danger",
    name: "خطر السقوط في الماء",
    description: "خطر السقوط في الماء، انتبه.",
    longDescription: "الطريق تنتهي بمجرى مائي أو ميناء أو رصيف بدون حماية. توقف قبل النهاية وتصرف بحذر.",
    image: "/images/classification/quai.png"
  },
  {
    id: "danger-17",
    category: "danger",
    name: "رياح جانبية",
    description: "خطر هبات رياح، امسك مقودك.",
    longDescription: "منطقة معرضة لرياح قوية. الانحراف ممكن. خفف سرعتك، امسك المقود بقوة وكن منتبهاً للمركبات الخفيفة.",
    image: "/images/classification/vent.png"
  },
  {
    id: "danger-18",
    category: "danger",
    name: "جسر متحرك",
    description: "جسر متحرك يمكن رفعه، احتمال التوقف.",
    longDescription: "اقترب بحذر. احترم الإشارات الضوئية والحواجز إذا كان الجسر قيد التشغيل.",
    image: "/images/classification/pont-mobile.png"
  },
  {
    id: "danger-19",
    category: "danger",
    name: "طريق زلقة",
    description: "سطح زلق، تكيف مع سرعتك.",
    longDescription: "خطر فقدان التماسك (مطر، جليد، زيت). تجنب الفرملة المفاجئة والتسارع السريع.",
    image: "/images/classification/chausse-glissante.png"
  },
  {
    id: "danger-20",
    category: "danger",
    name: "طريق زلقة مؤقتة",
    description: "زلاقة مؤقتة (مطر، جليد...).",
    longDescription: "نفس إرشادات الطريق الزلقة الدائمة، لكن الظاهرة هنا عابرة. تضاعف اليقظة.",
    image: "/images/classification/gliss-tempo.png"
  },
  {
    id: "danger-21",
    category: "danger",
    name: "حادث مؤقت",
    description: "حادث مروري، اقترب بحذر.",
    longDescription: "وقع حادث في الأمام. خفف سرعتك، لا تتوقف للنظر واتبع تعليمات الأعوان أو لوحات التحويل.",
    image: "/images/classification/accident.png"
  },
  {
    id: "danger-22",
    category: "danger",
    name: "منطقة خطر جوي",
    description: "طائرات على ارتفاع منخفض، احتمال ضوضاء مفاجئة.",
    longDescription: "أنت بالقرب من مطار. الطائرات تمر على ارتفاع منخفض. لا تنزعج من الضوضاء وحافظ على السيطرة على مركبتك.",
    image: "/images/classification/aerienne.png"
  },
  {
    id: "danger-23",
    category: "danger",
    name: "خطر الفرسان",
    description: "فرسان أو خيول، خفف سرعتك.",
    longDescription: "خطر مواجهة فرسان. خفف سرعتك، لا تستعمل المنبه وتجاوز ببطء شديد تاركاً مسافة أمان كافية.",
    image: "/images/classification/cavaliers.png"
  },
  {
    id: "danger-24",
    category: "danger",
    name: "سلسلة منعطفات أولها لليمين",
    description: "عدة منعطفات متقاربة، أولها لليمين.",
    longDescription: "يعلن عن سلسلة منعطفات. اقترب من الأول لليمين بتخفيف السرعة، حافظ على سرعة معتدلة حتى نهاية السلسلة.",
    image: "/images/classification/premier-virage-droite.png"
  },
  {
    id: "danger-25",
    category: "danger",
    name: "سلسلة منعطفات أولها لليسار",
    description: "عدة منعطفات متقاربة، أولها لليسار.",
    longDescription: "نفس الوضع لكن أول منعطف لليسار. تكيف مع سرعتك قبل سلسلة المنحنيات.",
    image: "/images/classification/premier-virage-gauche.png"
  },
  {
    id: "danger-26",
    category: "danger",
    name: "علامة تحويل لليمين (تضيق مؤقت)",
    description: "تضيق مؤقت للطريق، علامة تحويل لليمين.",
    longDescription: "اقترب بحذر، خفف سرعتك واستعد للانحراف قليلاً لليمين.",
    image: "/images/classification/retrec-tempo.png"
  },
  {
    id: "interdiction-1",
    category: "interdiction",
    name: "مرور ممنوع في الاتجاهين",
    description: "لا يمكن لأي مركبة المرور في كلا الاتجاهين.",
    longDescription: "تمنع هذه الإشارة المرور لجميع المركبات في كلا الاتجاهين. توضع غالباً عند مدخل منطقة مشاة أو طريق خاص.",
    image: "/images/classification/rond-blanc-interdiction.png"
  },
  {
    id: "interdiction-2",
    category: "interdiction",
    name: "اتجاه ممنوع",
    description: "الدخول ممنوع لجميع المركبات من هذا الاتجاه.",
    longDescription: "لا يمكنك الدخول إلى الطريق من هذا الجانب. احترم هذا المنع قطعياً تحت خطر حادث خطير.",
    image: "/images/classification/sens-interdit.png"
  },
  {
    id: "interdiction-3",
    category: "interdiction",
    name: "ممنوع الدوران على شكل حرف U",
    description: "ممنوع الدوران على شكل حرف U من هذه النقطة.",
    longDescription: "هذه المناورة خطيرة في هذا المكان. استمر straight حتى مفترق مناسب.",
    image: "/images/classification/interdit-demi-tour.png"
  },
  {
    id: "interdiction-4",
    category: "interdiction",
    name: "ممنوع التجاوز",
    description: "التجاوز ممنوع لجميع المركبات.",
    longDescription: "لا يجب عليك تجاوز المركبات التي أمامك، حتى لو كانت علامات الطريق تسمح بذلك. انتظر نهاية المنع.",
    image: "/images/classification/interdit-depasser-voiture.png"
  },
  {
    id: "interdiction-5",
    category: "interdiction",
    name: "ممنوع التجاوز للشاحنات",
    description: "ممنوع التجاوز للشاحنات الثقيلة.",
    longDescription: "المركبات التي يزيد وزنها عن 3.5 طن لا يحق لها التجاوز. يهدف هذا الإجراء إلى تسهيل حركة المرور وتجنب المواقف الخطيرة.",
    image: "/images/classification/interdit-depasser-pl.png"
  },
  {
    id: "interdiction-6",
    category: "interdiction",
    name: "جمارك",
    description: "مركز جمارك، توقف إجباري.",
    longDescription: "يجب عليك التوقف عند مركز الجمارك لتقديم وثائقك وربما حمولتك. التوقف إجباري.",
    image: "/images/classification/douane.png"
  },
  {
    id: "interdiction-7",
    category: "interdiction",
    name: "توقف الدرك",
    description: "نقطة تفتيش درك، احتمال التوقف.",
    longDescription: "يمكن للدرك إجراء تفتيش. كن مستعداً للتوقف وتقديم أوراقك إذا طُلب منك.",
    image: "/images/classification/gendarmerie.png"
  },
  {
    id: "interdiction-8",
    category: "interdiction",
    name: "شرطة",
    description: "مركز شرطة، احتمال التوقف.",
    longDescription: "مثل توقف الدرك، لكن لمركز شرطة. توقف إذا طلبت منك قوات الأمن ذلك.",
    image: "/images/classification/police.png"
  },
  {
    id: "interdiction-9",
    category: "interdiction",
    name: "ممنوع دخول مركبات نقل البضائع",
    description: "ممنوع على الشاحنات.",
    longDescription: "لا يمكن للشاحنات وسيارات النقل الخفيف وأي مركبة تنقل بضائع استخدام هذا الطريق.",
    image: "/images/classification/interdit-transport-marchandise.png"
  },
  {
    id: "interdiction-10",
    category: "interdiction",
    name: "ممنوع على الدراجات",
    description: "الدخول ممنوع للدراجات.",
    longDescription: "الدراجات الهوائية والنارية غير مسموح بها في هذا الطريق لأسباب أمنية.",
    image: "/images/classification/acces-interdit-cyclistes.png"
  },
  {
    id: "interdiction-11",
    category: "interdiction",
    name: "ممنوع للمركبات التي يزيد وزنها عن 5.5 طن",
    description: "ممنوع للمركبات التي يتجاوز وزنها الإجمالي 5.5 طن.",
    longDescription: "لا يمكن للشاحنات الثقيلة والمركبات الثقيلة المرور هنا، للحفاظ على الطريق أو لأسباب أمنية.",
    image: "/images/classification/5t.png"
  },
  {
    id: "interdiction-12",
    category: "interdiction",
    name: "ممنوع للمركبات التي تنقل مواد قابلة للاشتعال",
    description: "الدخول ممنوع للمركبات المحملة بمواد قابلة للاشتعال.",
    longDescription: "لأسباب أمنية، الصهاريج والمركبات التي تنقل مواد خطرة (بنزين، غاز...) لا يمكنها المرور.",
    image: "/images/classification/explosives.png"
  },
  {
    id: "interdiction-13",
    category: "interdiction",
    name: "ممنوع الانعطاف لليمين",
    description: "ممنوع الانعطاف لليمين عند المفترق.",
    longDescription: "عند المفترق التالي، لا يجب عليك الانعطاف لليمين. ابحث عن طريق آخر.",
    image: "/images/classification/interdiction-tourner-droite.png"
  },
  {
    id: "interdiction-14",
    category: "interdiction",
    name: "ممنوع على الحافلات",
    description: "الدخول ممنوع للحافلات.",
    longDescription: "حافلات النقل العام لا تمر في هذا الطريق. مخصص للمركبات الأخرى.",
    image: "/images/classification/interdit-bus.png"
  },
  {
    id: "interdiction-15",
    category: "interdiction",
    name: "ممنوع للمركبات التي يزيد طولها عن 10 أمتار",
    description: "ممنوع للمركبات التي يتجاوز طولها 10 أمتار.",
    longDescription: "المركبات الطويلة جداً (شاحنات مفصلية، حافلات طويلة) لا يمكنها استخدام هذا الطريق بسبب المنعطفات الضيقة أو الممرات المحدودة.",
    image: "/images/classification/interdit-camion-10m.png"
  },
  {
    id: "interdiction-16",
    category: "interdiction",
    name: "ممنوع استعمال المنبه الصوتي",
    description: "استعمال المنبه ممنوع.",
    longDescription: "ممنوع استعمال المنبه الصوتي في هذه المنطقة (مستشفى، مدرسة، منطقة سكنية).",
    image: "/images/classification/interdit-klaxon.png"
  },
  {
    id: "interdiction-17",
    category: "interdiction",
    name: "ممنوع على المشاة",
    description: "الدخول ممنوع للمشاة.",
    longDescription: "لا يجب على المشاة المرور في هذا الطريق (طريق سيار، نفق). استعمل الممرات المخصصة.",
    image: "/images/classification/interdit-pieton.png"
  },
  {
    id: "interdiction-18",
    category: "interdiction",
    name: "ممنوع السير بمسافة أقل من 70 متراً",
    description: "مسافة دنيا 70 متراً بين المركبات.",
    longDescription: "يجب عليك الحفاظ على مسافة 70 متراً على الأقل مع المركبة التي أمامك. تنطبق هذه القاعدة غالباً في الأنفاق أو على الجسور.",
    image: "/images/classification/intervalle.png"
  },
  {
    id: "interdiction-19",
    category: "interdiction",
    name: "ممنوع تجاوز 50 كم/س",
    description: "السرعة محددة بـ 50 كم/س.",
    longDescription: "لا تتجاوز سرعة 50 كم/س. قد يكون هذا التحديد مؤقتاً أو دائماً.",
    image: "/images/classification/max-50.png"
  },
  {
    id: "interdiction-20",
    category: "interdiction",
    name: "ممنوع تجاوز 90 كم/س",
    description: "السرعة محددة بـ 90 كم/س.",
    longDescription: "على بعض الطرق السريعة، السرعة محددة بـ 90 كم/س لأسباب تتعلق بالسلامة أو انسيابية المرور.",
    image: "/images/classification/max-90.png"
  },
  {
    id: "interdiction-21",
    category: "interdiction",
    name: "ممنوع للمركبات التي تنقل مواد تلوث الماء",
    description: "الدخول ممنوع للمركبات المحملة بمواد خطرة على الماء.",
    longDescription: "لحماية الموارد المائية، لا يمكن للمركبات التي تنقل مواد كيميائية أو ملوثة المرور هنا.",
    image: "/images/classification/polluer.png"
  },
  {
    id: "interdiction-22",
    category: "interdiction",
    name: "أفسح الطريق للمرور القادم من الاتجاه المعاكس",
    description: "يجب عليك ترك المركبات القادمة من الأمام تمر أولاً.",
    longDescription: "في طريق ضيق، الأولوية للمركبات القادمة من الأمام. توقف إذا لزم الأمر لتركها تمر.",
    image: "/images/classification/sensinverse.png"
  },
  {
    id: "interdiction-23",
    category: "interdiction",
    name: "ممنوع تجاوز 30 كم/س",
    description: "السرعة محددة بـ 30 كم/س.",
    longDescription: "منطقة 30: السرعة مخفضة إلى 30 كم/س لسلامة المشاة والدراجات.",
    image: "/images/classification/vitesse-max-30.png"
  },
  {
    id: "interdiction-24",
    category: "interdiction",
    name: "ممنوع تجاوز 70 كم/س",
    description: "السرعة محددة بـ 70 كم/س.",
    longDescription: "تحديد السرعة بـ 70 كم/س، غالباً على الطرق ذات الأولوية أو في المناطق الحضرية الممتدة.",
    image: "/images/classification/vitesse-max-70.png"
  },
  {
    id: "obligation-1",
    category: "obligation",
    name: "اتجاه إجباري لليمين",
    description: "يجب الانعطاف لليمين قبل الإشارة.",
    longDescription: "عند المفترق التالي، يجب عليك الانعطاف لليمين. تمسك بيمينك واستعمل مؤشر الاتجاه.",
    image: "/images/classification/obligatoire-gauche.png"
  },
  {
    id: "obligation-2.1",
    category: "obligation",
    name: "اتجاه إجباري لليسار",
    description: "يجب الانعطاف لليسار قبل الإشارة.",
    longDescription: "عند المفترق التالي، يجب عليك الانعطاف لليسار. تمسك بيمينك واستعمل مؤشر الاتجاه.",
    image: "/images/classification/obligatoire-droite.png"
  },
  {
    id: "obligation-2.2",
    category: "obligation",
    name: "اتجاه إجباري لليسار",
    description: "اتجاه إجباري عند المفترق التالي.",
    longDescription: "اتجاه إجباري عند المفترق التالي (لليمين أو لليسار).",
    image: "/images/classification/bidirection.png"
  },
  {
    id: "obligation-3",
    category: "obligation",
    name: "اتجاه إجباري straight",
    description: "يجب الاستمرار straight.",
    longDescription: "لا يسمح بأي انعطاف، يجب مواصلة طريقك في خط straight.",
    image: "/images/classification/toutdroit.png"
  },
  {
    id: "obligation-4",
    category: "obligation",
    name: "التفاف إجباري من اليمين",
    description: "يجب تجاوز العائق من اليمين.",
    longDescription: "عائق (مثلث أمان، أشغال) يجبرك على المرور من اليمين. احترم العلامات.",
    image: "/images/classification/contournement-droite.png"
  },
  {
    id: "obligation-5",
    category: "obligation",
    name: "التفاف إجباري من اليسار",
    description: "يجب تجاوز العائق من اليسار.",
    longDescription: "نفس الوضع، لكن الالتفاف يكون من اليسار.",
    image: "/images/classification/contournement-gauche.png"
  },
  {
    id: "obligation-6",
    category: "obligation",
    name: "استعمال السلاسل الثلجية إجباري",
    description: "جهز مركبتك بسلاسل ثلجية للمتابعة.",
    longDescription: "ما بعد هذه الإشارة، الطريق مغطى بالثلوج أو الجليد. السلاسل ضرورية لضمان التماسك.",
    image: "/images/classification/chaine-neige.png"
  },
  {
    id: "obligation-7",
    category: "obligation",
    name: "سرعة دنيا إجبارية",
    description: "يجب السير على الأقل بالسرعة المحددة.",
    longDescription: "على بعض الطرق السريعة، سرعة دنيا مفروضة حتى لا تعيق حركة المرور. لا تنزل عنها.",
    image: "/images/classification/vitesse-minimal.png"
  },
  {
    id: "obligation-8",
    category: "obligation",
    name: "نهاية السرعة الدنيا الإجبارية",
    description: "لم تعد السرعة الدنيا مفروضة.",
    longDescription: "لم تعد ملزماً بسرعة دنيا. تكيف مع سرعتك حسب ظروف المرور.",
    image: "/images/classification/fin-max-30.png"
  },
  {
    id: "obligation-9",
    category: "obligation",
    name: "طريق إجباري للمشاة",
    description: "طريق مخصص للمشاة.",
    longDescription: "هذا الطريق مخصص حصراً للمشاة. الدراجات والمركبات الآلية لا يحق لها استخدامه.",
    image: "/images/classification/obligatoire-pieton.png"
  },
  {
    id: "obligation-10",
    category: "obligation",
    name: "طريق إجباري للدراجات",
    description: "ممر مخصص للدراجات.",
    longDescription: "يجب على الدراجات استخدام هذا الممر. لا يجوز للمستعملين الآخرين المرور أو الوقوف عليه.",
    image: "/images/classification/piste-cyclable-obligatoire.png"
  },
  {
    id: "obligation-11",
    category: "obligation",
    name: "طريق إجباري للحافلات",
    description: "طريق مخصص للحافلات.",
    longDescription: "مسموح فقط لحافلات النقل العام. لا يمكن لسيارات الأجرة والمركبات الأخرى المرور فيه.",
    image: "/images/classification/oblig-bus.png"
  },
  {
    id: "obligation-12",
    category: "obligation",
    name: "نهاية الطريق الإجباري للمشاة",
    description: "الطريق المخصص للمشاة ينتهي.",
    longDescription: "ما بعد هذه الإشارة، الممر الخاص بالمشاة ينتهي. ابق يقظاً كسائق.",
    image: "/images/classification/fin-obligatoire-pieton.png"
  },
  {
    id: "obligation-13",
    category: "obligation",
    name: "نهاية الممر الإجباري للدراجات",
    description: "ممر الدراجات الإجباري ينتهي.",
    longDescription: "يجب على الدراجات العودة إلى الطريق العادي. يجب على السائقين مشاركة الطريق بحذر.",
    image: "/images/classification/fin-voie-reservee.png"
  },
  {
    id: "obligation-14",
    category: "obligation",
    name: "نهاية المسلك المخصص للحافلات",
    description: "المسلك المخصص للحافلات ينتهي.",
    longDescription: "المسلك الخاص بالحافلات يتوقف. يمكن للمركبات الأخرى السير بشكل طبيعي مرة أخرى.",
    image: "/images/classification/fin-obligation.png"
  },
  {
    id: "indication-1",
    category: "indication",
    name: "محطة بنزين",
    description: "محطة تزود بالوقود قريبة.",
    longDescription: "تشير إلى وجود محطة بنزين حيث يمكنك التزود بالوقود وفحص ضغط الإطارات...",
    image: "/images/classification/gazoil.png"
  },
  {
    id: "indication-2",
    category: "indication",
    name: "مطعم",
    description: "مطعم أو نقطة وجبات.",
    longDescription: "يشير إلى مكان يمكنك تناول الطعام فيه. أحياناً يكون مصحوباً بمؤشر المسافة.",
    image: "/images/classification/restaurent.png"
  },
  {
    id: "indication-3",
    category: "indication",
    name: "مخرج طوارئ على اليمين",
    description: "مخرج طوارئ يمكن الوصول إليه من اليمين.",
    longDescription: "في حالة طوارئ (حريق، حادث)، مخرج طوارئ متاح على اليمين. حدد موقعه مسبقاً.",
    image: "/images/classification/detresse-droite.png"
  },
  {
    id: "indication-4",
    category: "indication",
    name: "طريق مسدود",
    description: "طريق مسدود، لا مخرج.",
    longDescription: "الطريق ينتهي بطريق مسدود. لا تتجه إليه إلا إذا كان لديك وجهة محددة فيه.",
    image: "/images/classification/impasse.png"
  },
  {
    id: "indication-5",
    category: "indication",
    name: "محطة سيارات أجرة",
    description: "مكان مخصص لسيارات الأجرة.",
    longDescription: "سيارات الأجرة تنتظر الزبائن في هذا المكان. قد يكون الوقوف ممنوعاً للمركبات الأخرى.",
    image: "/images/classification/station-taxis.png"
  },
  {
    id: "indication-6",
    category: "indication",
    name: "مخصص للمركبات التي يزيد طولها عن 10 م",
    description: "دخول محدود للمركبات التي يزيد طولها عن 10 أمتار.",
    longDescription: "هذا الطريق مجهز خصيصاً للمركبات الطويلة (شاحنات، حافلات). المركبات الأقصر يجب أن تستخدم طريقاً آخر.",
    image: "/images/classification/camions-10m.png"
  },
  {
    id: "indication-7",
    category: "indication",
    name: "لا تتجاوز السرعة المحددة في كلا المسلكين",
    description: "تحديد السرعة في جميع المسالك.",
    longDescription: "السرعة القصوى المسموح بها هي نفسها لجميع مسالك المرور. احترمها أياً كان مسارك.",
    image: "/images/classification/90-70.png"
  },
  {
    id: "indication-8",
    category: "indication",
    name: "موقف سيارات",
    description: "منطقة ركن مسموح بها.",
    longDescription: "يمكنك ركن مركبتك في هذا المكان. تحقق من أي قيود محتملة (المدة، الدفع، القرص).",
    image: "/images/classification/zone-stationnement.png"
  },
  {
    id: "indication-9",
    category: "indication",
    name: "موقف كرفانات",
    description: "ركن مخصص للكرفانات.",
    longDescription: "مكان خاص بالكرفانات والعربات المقطورة. لا يمكن للسيارات فقط التوقف فيه.",
    image: "/images/classification/parking-caravane.png"
  },
  {
    id: "indication-10",
    category: "indication",
    name: "مستشفى",
    description: "مستشفى، إسعافات طبية.",
    longDescription: "يشير إلى اتجاه أو قرب مستشفى. في حالة طوارئ، اتبع هذه الإشارة.",
    image: "/images/classification/hopital.png"
  },
  {
    id: "indication-11",
    category: "indication",
    name: "ممر مشاة",
    description: "طريق أو ممر مخصص للمشاة.",
    longDescription: "ممر مستحسن أو إجباري للمشاة. لا يجب على المركبات المرور فيه.",
    image: "/images/classification/aire-pieton.png"
  },
  {
    id: "indication-12",
    category: "indication",
    name: "طريق للسيارات",
    description: "بداية طريق مخصص للسيارات.",
    longDescription: "مسموح فقط للمركبات الآلية القادرة على الوصول إلى سرعة دنيا. المشاة والدراجات والحيوانات ممنوعة.",
    image: "/images/classification/carre-bleu.png"
  },
  {
    id: "indication-13",
    category: "indication",
    name: "نهاية طريق السيارات",
    description: "نهاية المقطع المخصص للسيارات.",
    longDescription: "الطريق السريع ينتهي. تعود قواعد المرور العادية، يمكن للمشاة والدراجات المرور مرة أخرى.",
    image: "/images/classification/fin-route-automobiles.png"
  },
  {
    id: "indication-14",
    category: "indication",
    name: "معلومات سياحية",
    description: "نقطة معلومات سياحية.",
    longDescription: "يشير إلى مكتب معلومات حيث يمكنك الحصول على إرشادات حول المواقع السياحية والإقامة...",
    image: "/images/classification/touristique.png"
  },
  {
    id: "indication-15",
    category: "indication",
    name: "تنقل محدود",
    description: "تجهيزات للأشخاص ذوي الاحتياجات الخاصة.",
    longDescription: "هذا المكان متاح للأشخاص ذوي الاحتياجات الخاصة (موقف، مرافق، منحدر وصول).",
    image: "/images/classification/mobilite-reduite.png"
  },
  {
    id: "indication-16",
    category: "indication",
    name: "خطر حريق غابة",
    description: "خطر حريق، كن حذراً في الغابة.",
    longDescription: "كن يقظاً بشكل خاص، لا ترم سيجارة وتجنب أي سلوك ينطوي على خطر الحريق.",
    image: "/images/classification/feu-foret.png"
  },
  {
    id: "indication-17",
    category: "indication",
    name: "طريق باتجاه واحد",
    description: "طريق باتجاه واحد.",
    longDescription: "يمكنك السير فقط في الاتجاه المشار إليه بالسهم. لا تتجه في الاتجاه المعاكس.",
    image: "/images/classification/circulation-sensunique.png"
  },
  {
    id: "indication-18",
    category: "indication",
    name: "سرعة مستحبة 70",
    description: "سرعة مستحبة 70 كم/س.",
    longDescription: "لسلامتك، يُستحسن عدم تجاوز 70 كم/س، حتى لو كانت السرعة القصوى المسموح بها أعلى.",
    image: "/images/classification/conseille-70.png"
  },
  {
    id: "indication-19",
    category: "indication",
    name: "محطة ترامواي",
    description: "محطة ترامواي.",
    longDescription: "تشير إلى وجود محطة ترامواي. كن منتبهاً للمسافرين الذين يعبرون.",
    image: "/images/classification/tram.png"
  },
  {
    id: "indication-20",
    category: "indication",
    name: "موقف دراجات",
    description: "ركن للدراجات.",
    longDescription: "مكان مخصص لركن الدراجات. يمكن للدراجين ربط دراجاتهم بأمان.",
    image: "/images/classification/parking-velo.png"
  },
  {
    id: "indication-21",
    category: "indication",
    name: "مطبخ (مخفض سرعة)",
    description: "مخفض سرعة على الطريق.",
    longDescription: "يعلن عن مطب أو مخفض سرعة. خفف سرعتك حتى لا تتلف مركبتك.",
    image: "/images/classification/indication-dodane.png"
  },
  {
    id: "indication-22",
    category: "indication",
    name: "مدخل طريق سيار",
    description: "بداية الطريق السيار.",
    longDescription: "تدخل طريقاً سياراً. احترم القواعد الخاصة: السرعة الدنيا، منع التوقف...",
    image: "/images/classification/Autoroute.png"
  },
  {
    id: "indication-23",
    category: "indication",
    name: "مخرج طريق سيار",
    description: "المخرج التالي من الطريق السيار.",
    longDescription: "استعد لمغادرة الطريق السيار. خفف سرعتك تدريجياً وتمسك بيمينك.",
    image: "/images/classification/fin-autoroute.png"
  },
  {
    id: "indication-24",
    category: "indication",
    name: "محطة حافلات",
    description: "محطة حافلات.",
    longDescription: "يشير إلى محطة حافلات. كن يقظاً: قد يعبر مشاة أمام أو خلف الحافلة.",
    image: "/images/classification/bus.png"
  },
  {
    id: "indication-25",
    category: "indication",
    name: "علامة منعطف حاد لليمين",
    description: "منعطف خطر لليمين، علامة تحذير.",
    longDescription: "هذه العلامة تعزز رؤية المنعطف. خفف سرعتك وتمسك بيمينك جيداً.",
    image: "/images/classification/balise-virage.png"
  },
  {
    id: "indication-26",
    category: "indication",
    name: "مخروط أشغال",
    description: "وجود أشغال، خفف سرعتك.",
    longDescription: "أداة علامات مؤقتة تشير إلى منطقة أشغال. خفف سرعتك واتبع التحويلات.",
    image: "/images/classification/plot-chantier.png"
  },
  {
    id: "indication-27",
    category: "indication",
    name: "حاجز بداية أشغال",
    description: "مدخل منطقة أشغال، حركة مرور منظمة.",
    longDescription: "تدخل منطقة أشغال. احترم الإشارات والسرعة المخفضة وتعليمات العمال.",
    image: "/images/classification/travaux.png"
  },
  {
    id: "indication-28",
    category: "indication",
    name: "طريق غابي",
    description: "علامة تشير إلى طريق غابي (F7).",
    longDescription: "طريق مخصص لحركة المرور الغابية. المركبات الخفيفة مسموح بها لكن بحذر، خطر التقاطع مع آلات غابية.",
    image: "/images/classification/foret7.png"
  },
  {
    id: "intersection-1",
    category: "intersection",
    name: "أفسح الطريق",
    description: "أفسح الطريق للمركبات في الطريق ذي الأولوية.",
    longDescription: "يجب عليك تخفيف السرعة ولا تتجه إلى المفترق إلا إذا كان الطريق خالياً. لست مضطراً للتوقف إذا كان الطريق خالياً.",
    image: "/images/classification/cedezpassage.png"
  },
  {
    id: "intersection-2",
    category: "intersection",
    name: "أفسح الطريق بـ 150 م",
    description: "يعلن عن علامة 'أفسح الطريق' بعد 150 متراً.",
    longDescription: "استعد لإفساح الطريق عند المفترق التالي. خفف سرعتك وكن مستعداً.",
    image: "/images/classification/cedez150.png"
  },
  {
    id: "intersection-3",
    category: "intersection",
    name: "قف بـ 150 م",
    description: "يعلن عن علامة 'قف' بعد 150 متراً.",
    longDescription: "سيكون عليك التوقف تماماً عند المفترق التالي. ابدأ بتخفيف السرعة.",
    image: "/images/classification/stop-150.png"
  },
  {
    id: "intersection-4",
    category: "intersection",
    name: "قف",
    description: "توقف إجباري قبل خط تأثير الإشارة.",
    longDescription: "يجب عليك التوقف تماماً عند الخط الأبيض أو قبل الإشارة. أفسح الطريق لجميع المركبات قبل التوجه.",
    image: "/images/classification/stop.png"
  },
  {
    id: "intersection-5",
    category: "intersection",
    name: "تقاطع نقطي",
    description: "تقاطع تطبق فيه قاعدة الأولوية لليمين.",
    longDescription: "في هذا التقاطع، قاعدة الأولوية لليمين سارية المفعول. أفسح الطريق للمركبات القادمة من اليمين.",
    image: "/images/classification/ponctuelle.png"
  },
  {
    id: "intersection-6",
    category: "intersection",
    name: "تقاطع طريقتين ثانويتين",
    description: "تقاطع طريقتين ثانويتين، الأولوية لليمين.",
    longDescription: "تتقاطع طريقتان ثانويتان. طبق الأولوية لليمين إذا لم تنظمها إشارة غير ذلك.",
    image: "/images/classification/inter-prio-droite.png"
  },
  {
    id: "intersection-7",
    category: "intersection",
    name: "طريق ذو أولوية",
    description: "طريق ذو أولوية: لك الأولوية عند التقاطعات.",
    longDescription: "أنت في طريق ذي أولوية. المركبات القادمة من اليمين أو اليسار يجب أن تفسح لك الطريق.",
    image: "/images/classification/losange-jaune.png"
  },
  {
    id: "intersection-8",
    category: "intersection",
    name: "نهاية طريق الأولوية",
    description: "نهاية الطريق ذي الأولوية.",
    longDescription: "تفقد الأولوية عند التقاطعات. من الآن فصاعداً، تطبق الأولوية لليمين مرة أخرى.",
    image: "/images/classification/fin-prio.png"
  },
  {
    id: "intersection-9",
    category: "intersection",
    name: "دوار",
    description: "مفترق دوار، الأولوية للمركبات داخل الدوار.",
    longDescription: "قبل الدخول، أفسح الطريق للمركبات التي تسير بالفعل في الدوار (القادمة من يسارك).",
    image: "/images/classification/sens-giratoire.png"
  },
  {
    id: "pn-1",
    category: "chemin_de_fer",
    name: "علامة موقع مزلقان بدون حاجز",
    description: "مزلقان بدون حاجز، مسلك واحد.",
    longDescription: "يشير إلى مزلقان بدون حاجز. كن حذراً للغاية، خفف سرعتك وتأكد من عدم قدوم قطار قبل العبور.",
    image: "/images/classification/cheminfernonlum.png"
  },
  {
    id: "pn-2",
    category: "chemin_de_fer",
    name: "مزلقان بدون حاجز مع إشارة آلية",
    description: "مزلقان بدون حاجز، مع إشارة آلية.",
    longDescription: "مثل السابق لكن مزود بإشارة ضوئية آلية. إذا كان الضوء الأحمر يومض، توقف فوراً.",
    image: "/images/classification/cheminferlumineux.png"
  },
  {
    id: "pn-3",
    category: "chemin_de_fer",
    name: "علامة سكة حديد بـ 50,100,150 م",
    description: "علامة تعلن عن مزلقان بـ 50 متراً (خط واحد)، 100 متر (خطان)، 150 متر (ثلاثة خطوط).",
    longDescription: "هذه العلامة (خطوط حمراء وبيضاء) تشير إلى أن المزلقان يبعد 50 متراً.",
    image: "/images/classification/passage-cheminfer.png"
  },
  {
    id: "fin-1",
    category: "fin_interdiction",
    name: "نهاية تحديد السرعة بـ 30 كم/س",
    description: "نهاية المنطقة المحددة بـ 30 كم/س.",
    longDescription: "يمكنك السير مرة أخرى بالسرعة العادية المسموح بها على هذا الطريق.",
    image: "/images/classification/Panneau-fin-de-limitation-30.png"
  },
  {
    id: "fin-2",
    category: "fin_interdiction",
    name: "نهاية تحديد السرعة بـ 50 كم/س",
    description: "نهاية المنطقة المحددة بـ 50 كم/س.",
    longDescription: "تعود السرعة القصوى إلى سرعة الطريق.",
    image: "/images/classification/fin-limit-50.png"
  },
  {
    id: "fin-3",
    category: "fin_interdiction",
    name: "نهاية تحديد السرعة بـ 70 كم/س",
    description: "نهاية المنطقة المحددة بـ 70 كم/س.",
    longDescription: "تعود السرعة القصوى إلى سرعة الطريق.",
    image: "/images/classification/fin-limit-70.png"
  },
  {
    id: "fin-4",
    category: "fin_interdiction",
    name: "نهاية تحديد السرعة بـ 90 كم/س",
    description: "نهاية المنطقة المحددة بـ 90 كم/س.",
    longDescription: "تعود السرعة القصوى إلى سرعة الطريق.",
    image: "/images/classification/fin-limit-90.png"
  },
  {
    id: "fin-5",
    category: "fin_interdiction",
    name: "نهاية تحديد السرعة بـ 110 كم/س",
    description: "نهاية المنطقة المحددة بـ 110 كم/س.",
    longDescription: "تعود السرعة القصوى إلى سرعة الطريق (عادة الطريق السيار).",
    image: "/images/classification/fin-de-limititation-vitesse-110.png"
  },
  {
    id: "fin-6",
    category: "fin_interdiction",
    name: "نهاية جميع المنع السابقة",
    description: "يرفع جميع القيود السابقة.",
    longDescription: "لا تسري أي من المحظورات السابقة (السرعة، التجاوز، الوقوف...) بعد هذه الإشارة.",
    image: "/images/classification/fin-interdiction.png"
  },
  {
    id: "fin-7",
    category: "fin_interdiction",
    name: "نهاية منع التجاوز",
    description: "نهاية منع التجاوز.",
    longDescription: "يمكنك مرة أخرى القيام بالتجاوز إذا سمحت الظروف بذلك.",
    image: "/images/classification/fin-interdiction-passer.png"
  },
  {
    id: "fin-8",
    category: "fin_interdiction",
    name: "نهاية منع التجاوز للشاحنات",
    description: "نهاية منع التجاوز للشاحنات.",
    longDescription: "يمكن للشاحنات الثقيلة التجاوز مرة أخرى، مع احترام قواعد السلامة.",
    image: "/images/classification/fin-interdiction-depasser-pl.png"
  },
  {
    id: "fin-9",
    category: "fin_interdiction",
    name: "نهاية منع استعمال المنبه الصوتي",
    description: "يمكنك استعمال المنبه مرة أخرى إذا لزم الأمر.",
    longDescription: "رفع حظر استعمال المنبه. كن مهذباً ولا تستعمله إلا في حالة الخطر.",
    image: "/images/classification/fin-interdit-usage-sonore.png"
  },

  {
    id: "ts-danger-general",
    category: "danger",
    name: "خطر عام",
    description: "مثلث أحمر مع علامة تعجب: يعلن عن خطر غير محدد.",
    longDescription: "مثلث أحمر مع علامة تعجب: يعلن عن خطر غير محدد.",
    image: "/images/classification/danger-general.png"
  },

  {
    id: "ts-stationnement-interdit",
    category: "interdiction",
    name: "الوقوف ممنوع",
    description: "دائرة زرقاء بحافة حمراء مع خط مائل: الوقوف ممنوع.",
    longDescription: "دائرة زرقاء بحافة حمراء مع خط مائل: الوقوف ممنوع.",
    image: "/images/classification/stationnement-interdit.png"
  },

  {
    id: "ts-direction-obligatoire",
    category: "obligation",
    name: "اتجاه إجباري",
    description: "دائرة زرقاء مع سهم أبيض: إلزام باتباع الاتجاه المشار إليه.",
    longDescription: "دائرة زرقاء مع سهم أبيض: إلزام باتباع الاتجاه المشار إليه.",
    image: "/images/classification/rond-bleu.png"
  },

  {
    id: "ts-zone-arret-stationnement-interdit",
    category: "interdiction",
    name: "منطقة وقوف وتوقف ممنوعين",
    description: "لوحة مربعة بيضاء بحافة حمراء: دخول منطقة ممنوع فيها الوقوف والتوقف.",
    longDescription: "لوحة مربعة بيضاء بحافة حمراء: دخول منطقة ممنوع فيها الوقوف والتوقف.",
    image: "/images/classification/zone-arret-stationnement-interdit.png"
  },

  {
    id: "ts-sortie-interdiction",
    category: "indication",
    name: "خروج من المنع",
    description: "لوحة دائرية بيضاء بخط أسود مائل: خروج من المنع أو نهاية جميع القيود.",
    longDescription: "لوحة دائرية بيضاء بخط أسود مائل: خروج من المنع أو نهاية جميع القيود.",
    image: "/images/classification/sortie-interdiction.png"
  },

  {
    id: "ts-zone-30",
    category: "indication",
    name: "منطقة 30",
    description: "لوحة مربعة بيضاء مكتوب عليها ZONE 30: دخول منطقة محددة بـ 30 كم/س.",
    longDescription: "لوحة مربعة بيضاء مكتوب عليها ZONE 30: دخول منطقة محددة بـ 30 كم/س.",
    image: "/images/classification/zone-30.png"
  },

  {
    id: "ts-balise-musoir",
    category: "indication",
    name: "علامة مثلث أمان",
    description: "علامة حمراء وبيضاء موضوعة على مثلث أمان اتجاهي.",
    longDescription: "علامة حمراء وبيضاء موضوعة على مثلث أمان اتجاهي.",
    image: "/images/classification/balise-musoir.png"
  },

  {
    id: "ts-retrecissement-chaussee-400m",
    category: "indication",
    name: "تضيق الطريق على 400 م",
    description: "مثلث أحمر مع تضيق: يعلن عن تضيق الطريق على بعد 400 متر.",
    longDescription: "مثلث أحمر مع تضيق: يعلن عن تضيق الطريق على بعد 400 متر.",
    image: "/images/classification/retreci-400.png"
  },

  {
    id: "ts-vitesse-recommandee-90",
    category: "indication",
    name: "سرعة مستحبة 90 كم/س",
    description: "لوحة مربعة بخلفية خضراء: سرعة مستحبة 90 كم/س.",
    longDescription: "لوحة مربعة بخلفية خضراء: سرعة مستحبة 90 كم/س.",
    image: "/images/classification/90-voie.jpg"
  },

  {
    id: "ts-doubles-virages-500m",
    category: "indication",
    name: "منعطفان متتاليان على 500 م",
    description: "مثلث أحمر مع منعطفات: يعلن عن منعطفين متتاليين على بعد 500 متر.",
    longDescription: "مثلث أحمر مع منعطفات: يعلن عن منعطفين متتاليين على بعد 500 متر.",
    image: "/images/classification/double-500.png"
  },

  {
    id: "ts-passage-pieton-dodane",
    category: "indication",
    name: "ممر مشاة (دودان)",
    description: "لوحة إرشادية لممر مشاة من نوع دودان.",
    longDescription: "لوحة إرشادية لممر مشاة من نوع دودان.",
    image: "/images/classification/pieton-dodane.jpg"
  },

  {
    id: "ts-stationnement-autorise",
    category: "interdiction",
    name: "ركن مسموح به",
    description: "مربع أزرق مع حرف P: مكان ركن مسموح به.",
    longDescription: "مربع أزرق مع حرف P: مكان ركن مسموح به.",
    image: "/images/classification/stationnement.png"
  },

  {
    id: "ts-verglas-frequent",
    category: "danger",
    name: "جليد متكرر",
    description: "مثلث أحمر مع ندفة ثلج: يعلن عن خطر جليد متكرر.",
    longDescription: "مثلث أحمر مع ندفة ثلج: يعلن عن خطر جليد متكرر.",
    image: "/images/classification/verglas_frequent.png"
  },

  {
    id: "ts-danger-tension-electrique",
    category: "danger",
    name: "خطر تيار كهربائي",
    description: "مثلث أحمر مع صاعقة: خطر متعلق بالتيار الكهربائي.",
    longDescription: "مثلث أحمر مع صاعقة: خطر متعلق بالتيار الكهربائي.",
    image: "/images/classification/tension.png"
  },

  {
    id: "ts-priorite-oran",
    category: "indication",
    name: "لوحة أولوية (وهران)",
    description: "لوحة أولوية لولاية وهران.",
    longDescription: "لوحة أولوية لولاية وهران.",
    image: "/images/classification/prio-oran.png"
  },

  {
    id: "ts-fin-priorite-chlef",
    category: "indication",
    name: "لوحة أولوية (وهران)",
    description: "لوحة أولوية لولاية وهران.",
    longDescription: "لوحة أولوية لولاية وهران.",
    image: "/images/classification/fin-prio-chlef.png"
  },

  {
    id: "ts-direction-tout-droit-2km",
    category: "indication",
    name: "اتجاه مستقيم لـ 2 كم",
    description: "لوحة إرشادية: إلزام بالاستمرار مستقيم لمسافة 2 كم.",
    longDescription: "لوحة إرشادية: إلزام بالاستمرار مستقيم لمسافة 2 كم.",
    image: "/images/classification/droit-2km.png"
  },

  {
    id: "ts-interdiction-tourner-gauche-sauf-bus",
    category: "indication",
    name: "منع الانعطاف لليسار إلا للحافلات",
    description: "دائرة حمراء مع سهم يسار مشطوب: منع الانعطاف لليسار إلا للحافلات.",
    longDescription: "دائرة حمراء مع سهم يسار مشطوب: منع الانعطاف لليسار إلا للحافلات.",
    image: "/images/classification/interdit-gauche-bus.png"
  },

  {
    id: "ts-fin-route-prioritaire-400m",
    category: "indication",
    name: "نهاية الطريق ذي الأولوية على 400 م",
    description: "يعلن عن نهاية الطريق ذي الأولوية على بعد 400 متر.",
    longDescription: "يعلن عن نهاية الطريق ذي الأولوية على بعد 400 متر.",
    image: "/images/classification/fin-prio-400.png"
  },

  {
    id: "ts-direction-obligatoire-gauche",
    category: "obligation",
    name: "اتجاه إجباري لليسار",
    description: "دائرة زرقاء مع سهم أبيض اليسار: إلزام بالانعطاف لليسار.",
    longDescription: "دائرة زرقاء مع سهم أبيض اليسار: إلزام بالانعطاف لليسار.",
    image: "/images/classification/oblig-gauche.png"
  },

  {
    id: "ts-urgences-hospitalieres",
    category: "indication",
    name: "طوارئ مستشفى",
    description: "لوحة إرشادية: قسم الطوارئ.",
    longDescription: "لوحة إرشادية: قسم الطوارئ.",
    image: "/images/classification/urgences.png"
  },

  {
    id: "ts-route-22",
    category: "indication",
    name: "الطريق رقم 22",
    description: "لوحة إرشادية: الطريق رقم 22.",
    longDescription: "لوحة إرشادية: الطريق رقم 22.",
    image: "/images/classification/separation.png"
  },

  {
    id: "ts-route-89",
    category: "indication",
    name: "الطريق رقم 89",
    description: "لوحة إرشادية: الطريق رقم 89.",
    longDescription: "لوحة إرشادية: الطريق رقم 89.",
    image: "/images/classification/route89.png"
  },

  {
    id: "ts-cabine-telephonique",
    category: "indication",
    name: "هاتف عمومي",
    description: "لوحة إرشادية: هاتف عمومي.",
    longDescription: "لوحة إرشادية: هاتف عمومي.",
    image: "/images/classification/cabine-tel.png"
  },

  {
    id: "ts-arret-bus",
    category: "indication",
    name: "محطة حافلات",
    description: "لوحة إرشادية: محطة حافلات.",
    longDescription: "لوحة إرشادية: محطة حافلات.",
    image: "/images/classification/arret.png"
  },

  {
    id: "ts-panneau-evenementiel",
    category: "indication",
    name: "لوحة حدثية مؤقتة",
    description: "لوحة مؤقتة للإشارة إلى حدث.",
    longDescription: "لوحة مؤقتة للإشارة إلى حدث.",
    image: "/images/classification/qtevent.png"
  },

  {
    id: "ts-arret-bus-2",
    category: "indication",
    name: "محطة حافلات",
    description: "لوحة إرشادية: محطة حافلات.",
    longDescription: "لوحة إرشادية: محطة حافلات.",
    image: "/images/classification/arret-1-15.png"
  },

  {
    id: "ts-route-a57",
    category: "indication",
    name: "الطريق A57",
    description: "لوحة إرشادية: الطريق رقم A57.",
    longDescription: "لوحة إرشادية: الطريق رقم A57.",
    image: "/images/classification/a57.png"
  },

  {
    id: "ts-route-22",
    category: "indication",
    name: "الطريق رقم 22",
    description: "لوحة إرشادية: الطريق رقم 22.",
    longDescription: "لوحة إرشادية: الطريق رقم 22.",
    image: "/images/classification/route22.png"
  },

  {
    id: "ts-deviation",
    category: "indication",
    name: "تحويلة",
    description: "لوحة إرشادية: تحويلة.",
    longDescription: "لوحة إرشادية: تحويلة.",
    image: "/images/classification/deviation.png"
  },

  {
    id: "ts-route-7",
    category: "indication",
    name: "الطريق رقم 7",
    description: "لوحة إرشادية: الطريق رقم 7.",
    longDescription: "لوحة إرشادية: الطريق رقم 7.",
    image: "/images/classification/route7.png"
  },

]