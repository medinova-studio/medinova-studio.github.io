import type { Lang } from "./i18n";

export type LegalSection = {
  title: string;
  body: string;
};

export type LegalDoc = {
  eyebrow: string;
  title: string;
  updatedLabel: string;
  contactTitle: string;
  contactIntro: string;
  sections: LegalSection[];
};

export const LEGAL_DATE_LOCALE: Record<Lang, string> = {
  en: "en-US",
  fr: "fr-FR",
  ar: "ar-MA",
};

export function getLegalDate(lang: Lang): string {
  return new Date().toLocaleDateString(LEGAL_DATE_LOCALE[lang], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const privacyDocs: Record<Lang, LegalDoc> = {
  en: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    updatedLabel: "Last updated:",
    contactTitle: "Contact Us",
    contactIntro: "For any privacy question or request, reach us at",
    sections: [
      {
        title: "Information We Collect",
        body: "We collect only the personal information you choose to share with us: details submitted through our contact forms (name, email address, company, project information) and the content of direct exchanges by email or WhatsApp. We also gather anonymous usage and performance data that helps us understand how visitors use this site. We never sell personal data.",
      },
      {
        title: "How We Use Your Information",
        body: "Your information is used solely to respond to enquiries, prepare quotations, deliver the services you have engaged us to provide — game development, growth-agency mandates, or Medinova Academy programmes — and to keep you informed of their progress. We may contact you by email or WhatsApp regarding your project or enrolment.",
      },
      {
        title: "Analytics & Advertising",
        body: "We use Google Analytics 4 and Vercel Analytics to measure traffic, engagement and website performance, and Core Web Vitals through Vercel Speed Insights. The Meta Pixel helps us measure and optimise our Facebook advertising campaigns. These tools collect aggregated, anonymised data such as pages visited, device type, approximate location and conversion events (for example, clicking a WhatsApp link or submitting a form). To support measurement and advertising, these providers may place cookies on your device. You may opt out of Google Analytics via Google's browser add-on and manage advertising cookies through your browser settings.",
      },
      {
        title: "Data Storage & Third Parties",
        body: "Form submissions are delivered through Resend, our email service provider, to contact@medinovastudio.com. Analytics data is processed by Google LLC and Vercel Inc.; Facebook advertising data is processed by Meta Platforms; WhatsApp conversations are handled over Meta's WhatsApp platform. We keep correspondence only as long as necessary to provide our services or as required by applicable Moroccan law.",
      },
      {
        title: "Local Storage & Preferences",
        body: "We store your preferred language in your browser using local storage and a first-party cookie (medinova-lang). This preference stays on your device and is never transmitted elsewhere; you can clear it at any time from your browser settings.",
      },
      {
        title: "Children's Privacy",
        body: "Medinova Academy welcomes learners of all ages, including children. Parental or guardian consent is required before any child's information is submitted. We collect only the minimum data needed to manage enrolment and communicate with parents.",
      },
      {
        title: "Your Rights & Moroccan Law",
        body: "You may request access to, correction of, or deletion of your personal data at any time by writing to contact@medinovastudio.com; we respond to every request within 30 days. Personal data processed by Medinova Studio is handled in accordance with Moroccan law no. 09-08 on the protection of individuals with regard to the processing of personal data.",
      },
    ],
  },
  fr: {
    eyebrow: "Informations légales",
    title: "Politique de confidentialité",
    updatedLabel: "Dernière mise à jour :",
    contactTitle: "Nous contacter",
    contactIntro:
      "Pour toute question ou demande relative aux données personnelles, écrivez-nous à",
    sections: [
      {
        title: "Informations collectées",
        body: "Nous recueillons uniquement les informations personnelles que vous choisissez de nous communiquer : les données transmises via nos formulaires de contact (nom, adresse e-mail, société, détails du projet) et le contenu de nos échanges directs par e-mail ou WhatsApp. Nous collectons également des données d'utilisation et de performance anonymes qui nous aident à comprendre comment les visiteurs utilisent ce site. Nous ne vendons jamais de données personnelles.",
      },
      {
        title: "Utilisation de vos informations",
        body: "Vos données sont utilisées exclusivement pour répondre à vos demandes, établir des devis, assurer les prestations dont vous nous avez confié la réalisation — développement de jeux vidéo, missions de croissance ou programmes de Medinova Academy — et vous tenir informé de leur avancement. Nous pouvons vous contacter par e-mail ou WhatsApp au sujet de votre projet ou de votre inscription.",
      },
      {
        title: "Mesure d'audience et publicité",
        body: "Nous utilisons Google Analytics 4 et Vercel Analytics pour mesurer le trafic, l'engagement et les performances du site, ainsi que les Core Web Vitals via Vercel Speed Insights. Le Meta Pixel nous permet d'évaluer et d'optimiser nos campagnes publicitaires sur Facebook. Ces outils collectent des données agrégées et anonymisées : pages consultées, type d'appareil, localisation approximative et événements de conversion (clic sur un lien WhatsApp, envoi d'un formulaire, etc.). Pour soutenir ces mesures, ces prestataires peuvent déposer des cookies sur votre appareil. Vous pouvez désactiver Google Analytics via le module complémentaire proposé par Google et gérer les cookies publicitaires depuis les réglages de votre navigateur.",
      },
      {
        title: "Conservation des données et tiers",
        body: "Les envois de formulaires sont transmis via Resend, notre prestataire de messagerie, à l'adresse contact@medinovastudio.com. Les données analytiques sont traitées par Google LLC et Vercel Inc. ; les données publicitaires de Facebook par Meta Platforms ; les conversations WhatsApp transitent par la plateforme WhatsApp de cette même société. Nous ne conservons les correspondances que le temps nécessaire à la fourniture de nos services ou conformément à la loi marocaine applicable.",
      },
      {
        title: "Stockage local et préférences",
        body: "Votre langue préférée est mémorisée dans votre navigateur au moyen du stockage local et d'un cookie interne (medinova-lang). Cette préférence demeure sur votre appareil et n'est jamais transmise ailleurs ; vous pouvez la supprimer à tout moment depuis les réglages de votre navigateur.",
      },
      {
        title: "Protection des mineurs",
        body: "Medinova Academy s'adresse à des apprenants de tous âges, y compris des enfants. Le consentement d'un parent ou d'un tuteur légal est requis avant toute transmission de données concernant un mineur. Nous ne collectons que les données strictement nécessaires à la gestion des inscriptions et à la communication avec les familles.",
      },
      {
        title: "Vos droits et cadre légal marocain",
        body: "Vous pouvez demander à tout moment l'accès à vos données personnelles, leur rectification ou leur suppression en écrivant à contact@medinovastudio.com ; chaque demande reçoit une réponse sous 30 jours. Les données personnelles traitées par Medinova Studio le sont conformément à la loi marocaine n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel.",
      },
    ],
  },
  ar: {
    eyebrow: "معلومات قانونية",
    title: "سياسة الخصوصية",
    updatedLabel: "آخر تحديث:",
    contactTitle: "تواصلوا معنا",
    contactIntro: "لأي سؤال أو طلب يتعلق بالمعطيات الشخصية، راسلونا على",
    sections: [
      {
        title: "المعلومات التي نجمعها",
        body: "لا نجمع إلا المعلومات الشخصية التي تختارون مشاركتها معنا: ما يُرسَل عبر نماذج التواصل (الاسم، البريد الإلكتروني، الجهة التي تمثلونها، تفاصيل المشروع)، وما يردنا من مراسلات مباشرة عبر البريد الإلكتروني أو واتساب. كما نجمع بيانات استعمال وأداء مجهولة الهوية تساعدنا على فهم طريقة استعمال الزوار للموقع. ولا نبيع المعطيات الشخصية لأي جهة على الإطلاق.",
      },
      {
        title: "كيف نستعمل معلوماتكم",
        body: "نستعمل معلوماتكم في غاية واحدة هي: الرد على استفساراتكم، وإعداد عروض الأثمان، وتنفيذ الخدمات التي كلَّفتمونا بها — تطوير الألعاب، أو مهام وكالة النمو، أو برامج أكاديمية Medinova — وإطلاعكم على مستجدات سير العمل. وقد نتواصل معكم عبر البريد الإلكتروني أو واتساب بشأن مشروعكم أو تسجيلكم في دوراتنا.",
      },
      {
        title: "قياس الزيارات والإعلانات",
        body: "نعتمد على Google Analytics 4 وVercel Analytics لقياس حركة الزيارات والتفاعل وأداء الموقع، وعلى Vercel Speed Insights لمؤشرات Core Web Vitals، فيما يساعدنا Meta Pixel على قياس حملاتنا الإعلانية على فيسبوك وتحسينها. تجمع هذه الأدوات بيانات مجمعة ومجهولة الهوية كالصفحات المزارة ونوع الجهاز والموقع التقريبي وأحداث التحويل (كالنقر على رابط واتساب أو إرسال نموذج). ولأغراض هذه القياسات، قد تُخزِّن الجهات المذكورة ملفات تعريف ارتباط (Cookies) على جهازكم. يمكنكم تعطيل Google Analytics بواسطة الإضافة التي توفرها جوجل، وإدارة ملفات الارتباط الإعلانية من إعدادات المتصفح.",
      },
      {
        title: "تخزين البيانات والأطراف الثالثة",
        body: "تُرسَل رسائل النماذج عبر خدمة Resend، مزود البريد الإلكتروني لدينا، إلى العنوان contact@medinovastudio.com. وتتولى شركة Google LLC وVercel Inc. معالجة البيانات التحليلية، وتتولى Meta Platforms معالجة بيانات إعلانات فيسبوك، فيما تمرّ محادثات واتساب عبر منصة واتساب التابعة للشركة ذاتها. ولا نحتفظ بالمراسلات إلا للمدة اللازمة لتقديم خدماتنا أو وفقاً لما يفرضه القانون المغربي الجاري به العمل.",
      },
      {
        title: "التفضيلات المخزنة على جهازكم",
        body: "نحفظ لغة التصفح المفضلة لديكم داخل المتصفح عبر مساحة التخزين المحلية وملف تعريف ارتباط خاص بالموقع (medinova-lang). ويبقى هذا الاختيار على جهازكم ولا يُرسَل إلى أي جهة أخرى، ويمكنكم محوه متى شئتم من إعدادات المتصفح.",
      },
      {
        title: "خصوصية الأطفال",
        body: "ترحب أكاديمية Medinova بمتعلمين من مختلف الأعمار، ومن بينهم الأطفال. ولا يُقبل أي تدوين يخص طفل إلا بعد موافقة أحد الوالدين أو الولي القانوني، ونكتفي في جمع المعطيات بالحد الأدنى الضروري لإدارة التسجيل والتواصل مع أولياء الأمور.",
      },
      {
        title: "حقوقكم والإطار القانوني المغربي",
        body: "لكم أن تطلبوا في أي وقت الاطلاع على معطياتكم الشخصية أو تصحيحها أو حذفها بمراسلتنا على contact@medinovastudio.com، ونلتزم بالرد على كل طلب في أجل أقصاه ثلاثون يوماً. وتُعالَج المعطيات الشخصية لدى Medinova Studio وفقاً للقانون المغربي رقم 09.08 المتعلق بحماية الأشخاص الذاتيين تجاه معالجة المعطيات ذات الطابع الشخصي.",
      },
    ],
  },
};

export const termsDocs: Record<Lang, LegalDoc> = {
  en: {
    eyebrow: "Legal",
    title: "Terms of Service",
    updatedLabel: "Last updated:",
    contactTitle: "Contact Us",
    contactIntro: "Questions about these terms? Email us at",
    sections: [
      {
        title: "Acceptance of Terms",
        body: "By browsing this website, engaging Medinova Studio for services, or enrolling in Medinova Academy, you accept these Terms of Service. If you do not agree with them, please refrain from using our services.",
      },
      {
        title: "Our Services",
        body: "Medinova Studio operates three complementary divisions: custom game development and interactive technology; a B2B growth agency covering websites, paid media and AI automation; and Medinova Academy, our online coding and game-development courses. Each engagement is governed by its own written agreement or its enrolment terms.",
      },
      {
        title: "Pricing, Billing & Taxes",
        body: "All prices are quoted exclusive of tax (Hors Taxes / HT). Value Added Tax (TVA) of 20% applies in accordance with Moroccan regulations in force. Setup fees are invoiced at the start of the engagement; monthly retainers require an initial three-month commitment. Advertising budgets and third-party API fees remain the client's responsibility.",
      },
      {
        title: "Intellectual Property",
        body: "Upon full payment, clients acquire the rights to the deliverables defined in their agreement. Medinova Studio retains ownership of its internal tools, frameworks and pre-existing assets. Learners keep full ownership of the projects they build during Medinova Academy courses.",
      },
      {
        title: "Acceptable Use",
        body: "You agree not to misuse this website, attempt unauthorised access, or put our services to unlawful use. Academy learners are expected to follow our community guidelines and help maintain a respectful, moderated environment.",
      },
      {
        title: "Limitation of Liability",
        body: "Medinova Studio's liability is limited to the amounts paid for the service giving rise to the claim. We cannot be held liable for indirect damages, lost profits, or interruptions caused by third-party platforms such as ad networks, WhatsApp or hosting providers.",
      },
      {
        title: "Governing Law",
        body: "These terms are governed by the laws of the Kingdom of Morocco. Any dispute falls under the exclusive jurisdiction of the courts of Kenitra, Morocco.",
      },
    ],
  },
  fr: {
    eyebrow: "Informations légales",
    title: "Conditions Générales de Service",
    updatedLabel: "Dernière mise à jour :",
    contactTitle: "Nous contacter",
    contactIntro:
      "Une question relative aux présentes conditions ? Écrivez-nous à",
    sections: [
      {
        title: "Acceptation des conditions",
        body: "En naviguant sur ce site, en confiant une mission à Medinova Studio ou en inscrivant un apprenant à Medinova Academy, vous acceptez les présentes Conditions Générales de Service. Si vous ne les acceptez pas, nous vous invitons à renoncer à l'utilisation de nos services.",
      },
      {
        title: "Nos services",
        body: "Medinova Studio exerce à travers trois pôles complémentaires : le développement de jeux sur mesure et les technologies interactives ; une agence de croissance B2B couvrant les sites web, les médias payants et l'automatisation par l'IA ; et Medinova Academy, nos cours en ligne de programmation et de développement de jeux. Chaque mission est régie par sa propre convention écrite ou par ses conditions d'inscription.",
      },
      {
        title: "Tarifs, facturation et taxes",
        body: "Tous les tarifs s'entendent hors taxes (HT). La taxe sur la valeur ajoutée (TVA) de 20 % s'applique conformément à la réglementation marocaine en vigueur. Les frais de mise en place sont facturés au démarrage de la mission ; les forfaits mensuels impliquent un engagement initial de trois mois. Les budgets publicitaires et les frais d'API tiers restent à la charge du client.",
      },
      {
        title: "Propriété intellectuelle",
        body: "Dès paiement intégral, le client acquiert les droits sur les livrables définis dans sa convention. Medinova Studio conserve la propriété de ses outils internes, de ses frameworks et de ses actifs préexistants. Les apprenants conservent l'entière propriété des projets réalisés dans le cadre des cours de Medinova Academy.",
      },
      {
        title: "Utilisation acceptable",
        body: "Vous vous engagez à ne pas détourner ce site de sa vocation, à ne pas tenter d'accès non autorisé et à ne pas utiliser nos services à des fins illicites. Les apprenants de l'Académie s'engagent à respecter la charte de la communauté et à contribuer à un environnement bienveillant et modéré.",
      },
      {
        title: "Limitation de responsabilité",
        body: "La responsabilité de Medinova Studio est limitée aux sommes versées au titre de la prestation concernée. Nous ne saurions être tenus pour responsables des dommages indirects, des pertes de chiffre d'affaires ni des interruptions imputables à des plateformes tierces telles que les régies publicitaires, WhatsApp ou les hébergeurs.",
      },
      {
        title: "Droit applicable",
        body: "Les présentes conditions sont soumises au droit du Royaume du Maroc. Tout litige relève de la compétence exclusive des tribunaux de Kénitra, au Maroc.",
      },
    ],
  },
  ar: {
    eyebrow: "معلومات قانونية",
    title: "الشروط العامة للخدمة",
    updatedLabel: "آخر تحديث:",
    contactTitle: "تواصلوا معنا",
    contactIntro: "لأي سؤال حول هذه الشروط، راسلونا على",
    sections: [
      {
        title: "قبول الشروط",
        body: "يعتبر تصفُّحكم لهذا الموقع، أو تكليف Medinova Studio بمهمة، أو التسجيل في أكاديمية Medinova، موافقةً على الشروط العامة للخدمة الواردة أدناه. فإن لم تكونوا موافقين عليها، فنرجو الامتناع عن الاستفادة من خدماتنا.",
      },
      {
        title: "خدماتنا",
        body: "يمارس Medinova Studio نشاطه عبر ثلاثة أقطاب متكاملة: تطوير الألعاب حسب الطلب والتقنيات التفاعلية؛ ووكالة نمو للأعمال (B2B) تشمل المواقع الإلكترونية والإعلانات المدفوعة والأتمتة بالذكاء الاصطناعي؛ وأكاديمية Medinova لدورات البرمجة وتطوير الألعاب عن بُعد. وتخضع كل مهمة لاتفاقية مكتوبة خاصة بها أو لشروط التسجيل المنطبقة عليها.",
      },
      {
        title: "الأسعار والفوترة والضرائب",
        body: "جميع الأسعار المعلنة صافية دون احتساب الضريبة (HT)، وتُضاف ضريبة القيمة المضافة بنسبة 20٪ عملاً بالتدابير التنظيمية المغربية الجاري بها العمل. تُفوتر مصاريف الانطلاق عند بداية المهمة، بينما تتطلب الاشتراكات الشهرية التزاماً أولياً بثلاثة أشهر. وتبقى ميزانيات الإعلانات ورسوم واجهات البرمجة الخارجية على عاتق العميل.",
      },
      {
        title: "الملكية الفكرية",
        body: "بعد سداد كامل المستحقات، يحوز العميل الحقوق المتعلقة بالمخرجات المحددة في اتفاقه معنا. وتحتفظ Medinova Studio بملكية أدواتها الداخلية وأطر عملها وموجوداتها السابقة. أما المتعلمون فيحوزون ملكية كاملة للمشاريع التي ينجزونها ضمن دورات أكاديمية Medinova.",
      },
      {
        title: "الاستخدام المقبول",
        body: "يتعيّن عليكم عدم إساءة استعمال هذا الموقع أو محاولة الوصول غير المصرح به إليه أو توظيف خدماتنا في أغراض تخالف القانون. ويُنتظر من متعلمي الأكاديمية احترام ميثاق المجتمع والمساهمة في بيئة محترمة وخاضعة للإشراف.",
      },
      {
        title: "حدود المسؤولية",
        body: "تقتصر مسؤولية Medinova Studio على المبالغ المدفوعة عن الخدمة التي ينشأ عنها النزاع، ولا يمكن مساءلتها عن الأضرار غير المباشرة أو الأرباح الفائتة أو حالات التعطل الناجمة عن منصات خارجية كشبكات الإعلانات أو واتساب أو مزودي الاستضافة.",
      },
      {
        title: "القانون الواجب التطبيق",
        body: "تخضع هذه الشروط لقانون المملكة المغربية، وتختص محاكم مدينة القنيطرة بالمغرب، باحتكرٍ تام، بالنظر في أي نزاع ينشأ عنها.",
      },
    ],
  },
};
