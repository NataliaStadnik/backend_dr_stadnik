import { PrismaClient } from '../../src/generated/client';

export async function seedArticles(prisma: PrismaClient) {
  console.log('Seed: Articles...');

  const articles = [
    {
      slug: 'implantaciya-zubov-optimalnyj-variant',
      title: {
        ru: 'Имплантация зубов: почему это оптимальный вариант?',
        en: 'Dental Implantation: Why is it the Optimal Choice?',
        de: 'Zahnimplantation: Warum ist es die optimale Wahl?',
      },
      subtitle: {
        ru: 'Разберём основные преимущества имплантации перед другими методами восстановления зубов.',
        en: "Let's break down the main advantages of implantation over other tooth restoration methods.",
        de: 'Lassen Sie uns die wichtigsten Vorteile der Implantation gegenüber anderen Methoden der Zahnrestauration aufschlüsseln.',
      },
      excerpt: {
        ru: 'Имплантация зубов — это современный и наиболее эффективный способ восстановления утраченных зубов. В этой статье мы подробно разберем, почему она считается «золотым стандартом» в стоматологии.',
        en: 'Dental implantation is a modern and most effective way to restore lost teeth. In this article, we will analyze in detail why it is considered the ”gold standard“ in dentistry.',
        de: 'Die Zahnimplantation ist eine moderne und effektivste Methode zur Wiederherstellung verlorener Zähne. In diesem Artikel werden wir im Detail analysieren, warum sie in der Zahnmedizin als „Goldstandard“ gilt.',
      },
      category: 'implantology',
      readTime: '4',
      color: 'bg-zen-sage/20',
      img: 'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770061387/implant-placement_kuoaav.jpg',
      isVisible: true,
      content: [
        {
          type: 'simpleText',
          text: {
            ru: 'Для многих пациентов потеря зуба — это не только эстетическая проблема, но и серьёзное нарушение функций всей зубочелюстной системы. Сегодня стоматология предлагает несколько вариантов решения: мостовидные протезы, съёмные конструкции и имплантацию. Именно последний вариант всё чаще рекомендуют врачи по всему миру.',
            en: 'For many patients, losing a tooth is not only an aesthetic problem but also a serious disruption of the functions of the entire dental system. Today, dentistry offers several options: bridges, removable dentures, and implantation. Doctors worldwide increasingly recommend the latter.',
            de: 'Für viele Patienten ist der Zahnverlust nicht nur ein ästhetisches Problem, sondern auch eine schwerwiegende Störung der Funktionen des gesamten Zahnsystems. Heute bietet die Zahnmedizin verschiedene Möglichkeiten: Brücken, herausnehmbaren Zahnersatz und Implantation. Ärzte weltweit empfehlen zunehmend letzteres.',
          },
        },
        {
          type: 'articleSection',
          title: {
            ru: 'Преимущества имплантации',
            en: 'Advantages of Implantation',
            de: 'Vorteile der Implantation',
          },
          children: [
            {
              type: 'unorderList',
              items: [
                {
                  ru: 'Сохранение соседних зубов: не нужно обтачивать здоровые зубы под коронки.',
                  en: 'Preservation of adjacent teeth: no need to grind down healthy teeth for crowns.',
                  de: 'Erhalt der Nachbarzähne: Gesunde Zähne müssen nicht für Kronen abgeschliffen werden.',
                },
                {
                  ru: 'Долговечность: при правильном уходе импланты служат десятилетиями.',
                  en: 'Durability: with proper care, implants last for decades.',
                  de: 'Langlebigkeit: Bei richtiger Pflege halten Implantate Jahrzehnte.',
                },
                {
                  ru: 'Профилактика убыли костной ткани: имплант передает нагрузку на кость, предотвращая ее атрофию.',
                  en: 'Prevention of bone loss: the implant transfers load to the bone, preventing its atrophy.',
                  de: 'Vermeidung von Knochenabbau: Das Implantat überträgt die Belastung auf den Knochen und verhindert so dessen Atrophie.',
                },
              ],
            },
          ],
        },
        {
          type: 'keyFindingsBlock',
          items: [
            {
              ru: 'Имплантация — единственный метод, полностью восстанавливающий функцию корня зуба.',
              en: 'Implantation is the only method that completely restores the function of the tooth root.',
              de: 'Die Implantation ist die einzige Methode, die die Funktion der Zahnwurzel vollständig wiederherstellt.',
            },
            {
              ru: 'Это инвестиция в здоровье, которая окупается комфортом и качеством жизни.',
              en: 'It is an investment in health that pays off with comfort and quality of life.',
              de: 'Es ist eine Investition in die Gesundheit, die sich mit Komfort und Lebensqualität auszahlt.',
            },
          ],
        },
      ],
    },
    {
      slug: 'kostnaya-plastika-pered-implantaciej',
      title: {
        ru: 'Костная пластика перед имплантацией',
        en: 'Bone Grafting Before Implantation',
        de: 'Knochenaufbau vor der Implantation',
      },
      subtitle: {
        ru: 'Зачем она нужна и как проходит процедура наращивания костной ткани.',
        en: 'Why is it needed and how the bone augmentation procedure works.',
        de: 'Warum sie benötigt wird und wie das Knochenaufbauverfahren abläuft.',
      },
      excerpt: {
        ru: 'Для успешной установки импланта необходим определенный объем костной ткани. Если ее недостаточно, проводится костная пластика.',
        en: 'A certain volume of bone tissue is necessary for successful implant placement. If it is insufficient, bone grafting is performed.',
        de: 'Für eine erfolgreiche Implantatinsertion ist ein bestimmtes Knochenvolumen erforderlich. Wenn dieses nicht ausreicht, wird ein Knochenaufbau durchgeführt.',
      },
      category: 'chirurgy',
      readTime: '5',
      color: 'bg-zen-soft/20',
      img: 'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770061380/artic_kost_plast_ylyhzo.jpg',
      isVisible: true,
      content: [
        {
          type: 'simpleText',
          text: {
            ru: 'Костная пластика (аугментация) — это хирургическая операция по восстановлению или увеличению объема костной ткани.',
            en: 'Bone grafting (augmentation) is a surgical operation to restore or increase the volume of bone tissue.',
            de: 'Knochenaufbau (Augmentation) ist eine chirurgische Operation zur Wiederherstellung oder Vergrößerung des Knochenvolumens.',
          },
        },
      ],
    },
    {
      slug: 'uhod-za-zubami-posle-operacii',
      title: {
        ru: 'Уход за зубами после операции: рекомендации хирурга',
        en: 'Post-operative Dental Care: Surgeon Recommendations',
        de: 'Zahnpflege nach der Operation: Empfehlungen des Chirurgen',
      },
      subtitle: {
        ru: 'Как правильно ухаживать за полостью рта после удаления зуба или имплантации.',
        en: 'How to properly care for your mouth after tooth extraction or implantation.',
        de: 'Wie Sie Ihren Mund nach einer Zahnextraktion oder Implantation richtig pflegen.',
      },
      excerpt: {
        ru: 'Правильный уход в послеоперационный период — залог быстрого заживления и отсутствия осложнений.',
        en: 'Proper care in the postoperative period is the key to fast healing and the absence of complications.',
        de: 'Die richtige Pflege in der postoperativen Phase ist der Schlüssel zu einer schnellen Heilung und dem Ausbleiben von Komplikationen.',
      },
      category: 'different',
      readTime: '4',
      color: 'bg-zen-sky',
      img: 'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770052198/artic_uhod_tooth_d1twei.png',
      isVisible: true,
      content: [
        {
          type: 'simpleText',
          text: {
            ru: 'После любого хирургического вмешательства в полости рта крайне важно соблюдать определенные правила, чтобы процесс заживления прошел максимально комфортно.',
            en: 'After any surgical intervention in the oral cavity, it is extremely important to follow certain rules so that the healing process goes as comfortably as possible.',
            de: 'Nach jedem chirurgischen Eingriff in der Mundhöhle ist es äußerst wichtig, bestimmte Regeln zu befolgen, damit der Heilungsprozess so angenehm wie möglich verläuft.',
          },
        },
      ],
    },
    {
      slug: 'periimplantit-kak-izbezhat-vospaleniya',
      title: {
        ru: 'Периимплантит: как избежать воспаления вокруг импланта?',
        en: 'Peri-implantitis: How to Avoid Inflammation Around the Implant?',
        de: 'Periimplantitis: Wie vermeidet man Entzündungen um das Implantat?',
      },
      subtitle: {
        ru: 'Разберём причины возникновения периимплантита и методы его профилактики.',
        en: 'Let\'s analyze the causes of peri-implantitis and methods for its prevention.',
        de: 'Lassen Sie uns die Ursachen der Periimplantitis und Methoden zu ihrer Vorbeugung analysieren.',
      },
      excerpt: {
        ru: 'Периимплантит — это воспаление тканей вокруг импланта, которое может привести к его потере. Узнайте, как этого избежать.',
        en: 'Peri-implantitis is an inflammation of the tissues around the implant, which can lead to its loss. Find out how to avoid it.',
        de: 'Periimplantitis ist eine Entzündung des Gewebes um das Implantat herum, die zu dessen Verlust führen kann. Finden Sie heraus, wie Sie dies vermeiden können.',
      },
      category: 'implantology',
      readTime: '6',
      color: 'bg-zen-sky',
      img: 'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770061381/artic_periimplantit_galzjx.jpg',
      isVisible: true,
      content: [],
    },
    {
      slug: 'sinus-lifting-pered-implantaciej',
      title: {
        ru: 'Синус-лифтинг перед имплантацией',
        en: 'Sinus Lift Before Implantation',
        de: 'Sinuslift vor der Implantation',
      },
      subtitle: {
        ru: 'Особенности операции по поднятию дна гайморовой пазухи.',
        en: 'Features of the operation to raise the bottom of the maxillary sinus.',
        de: 'Besonderheiten der Operation zur Anhebung des Kieferhöhlenbodens.',
      },
      excerpt: {
        ru: 'Синус-лифтинг позволяет установить импланты верхних боковых зубов даже при дефиците кости.',
        en: 'A sinus lift allows for the placement of upper lateral tooth implants even with a bone deficiency.',
        de: 'Ein Sinuslift ermöglicht das Einsetzen von Implantaten der oberen Seitenzähne auch bei Knochenmangel.',
      },
      category: 'chirurgy',
      readTime: '5',
      color: 'bg-zen-sky',
      img: 'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770061384/artic_sinus_d16tul.jpg',
      isVisible: true,
      content: [],
    },
    {
      slug: 'vremennye-koronki-posle-implantacii',
      title: {
        ru: 'Временные коронки после имплантации',
        en: 'Temporary Crowns After Implantation',
        de: 'Provisorische Kronen nach der Implantation',
      },
      subtitle: {
        ru: 'Зачем нужны временные конструкции и почему нельзя сразу ставить постоянные.',
        en: 'Why temporary structures are needed and why permanent ones cannot be installed immediately.',
        de: 'Warum provisorische Konstruktionen benötigt werden und warum nicht sofort dauerhafte eingesetzt werden können.',
      },
      excerpt: {
        ru: 'Временные коронки — это не только эстетика, но и формирование правильного контура десны.',
        en: 'Temporary crowns are not only about aesthetics but also about forming the correct gum contour.',
        de: 'Provisorische Kronen dienen nicht nur der Ästhetik, sondern auch der Gestaltung der richtigen Zahnfleischkontur.',
      },
      category: 'implantology',
      readTime: '4',
      color: 'bg-zen-sky',
      img: 'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770061378/artic_crown_lsmya1.jpg',
      isVisible: true,
      content: [],
    },
    {
      slug: 'podgotovka-k-stomatologicheskoj-operacii',
      title: {
        ru: 'Подготовка к стоматологической операции',
        en: 'Preparing for Dental Surgery',
        de: 'Vorbereitung auf eine zahnärztliche Operation',
      },
      subtitle: {
        ru: 'Что нужно знать пациенту перед хирургическим вмешательством.',
        en: 'What the patient needs to know before a surgical procedure.',
        de: 'Was der Patient vor einem chirurgischen Eingriff wissen muss.',
      },
      excerpt: {
        ru: 'Правильная подготовка снижает риски и ускоряет процесс восстановления.',
        en: 'Proper preparation reduces risks and speeds up the recovery process.',
        de: 'Eine ordnungsgemäße Vorbereitung verringert Risiken und beschleunigt den Genesungsprozess.',
      },
      category: 'accompany',
      readTime: '4',
      color: 'bg-zen-sage/20',
      img: 'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770052196/artic_recomend_before_p54ilu.png',
      isVisible: true,
      content: [],
    },
    {
      slug: 'rentgen-i-kt-pered-operaciej',
      title: {
        ru: 'Рентген и КТ перед операцией',
        en: 'X-ray and CT Before Surgery',
        de: 'Röntgen und CT vor der Operation',
      },
      subtitle: {
        ru: 'Зачем нужна компьютерная диагностика и как она влияет на результат.',
        en: 'Why computer diagnostics are needed and how they affect the result.',
        de: 'Warum Computerdiagnostik benötigt wird und wie sie das Ergebnis beeinflusst.',
      },
      excerpt: {
        ru: 'Точная 3D-диагностика — основа безопасного и предсказуемого лечения.',
        en: 'Accurate 3D diagnostics are the basis of safe and predictable treatment.',
        de: 'Eine präzise 3D-Diagnostik ist die Grundlage für eine sichere und vorhersehbare Behandlung.',
      },
      category: 'accompany',
      readTime: '3',
      color: 'bg-zen-soft/20',
      img: 'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770061379/artic_klkt_ofdcmu.jpg',
      isVisible: true,
      content: [],
    },
    {
      slug: 'plastika-desny-estetika-i-zdorove',
      title: {
        ru: 'Пластика десны: эстетика и здоровье',
        en: 'Gum Plastic Surgery: Aesthetics and Health',
        de: 'Zahnfleischplastik: Ästhetik und Gesundheit',
      },
      subtitle: {
        ru: 'Когда необходима коррекция мягких тканей в области зубов и имплантов.',
        en: 'When soft tissue correction is necessary in the area of teeth and implants.',
        de: 'Wann eine Weichgewebekorrektur im Bereich von Zähnen und Implantaten notwendig ist.',
      },
      excerpt: {
        ru: 'Пластика десны помогает создать красивый контур улыбки и защитить зубы от оголения.',
        en: 'Gum plastic surgery helps to create a beautiful smile contour and protect teeth from exposure.',
        de: 'Zahnfleischplastik hilft, eine schöne Lächelnkontur zu schaffen und die Zähne vor dem Freilegen zu schützen.',
      },
      category: 'chirurgy',
      readTime: '5',
      color: 'bg-zen-sage/20',
      img: 'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770061382/artic_plastic_desny_sfkjdr.jpg',
      isVisible: true,
      content: [],
    },
    {
      slug: 'udalenie-zubov-mudrosti-u-vzroslyh',
      title: {
        ru: 'Удаление зубов мудрости у взрослых',
        en: 'Wisdom Tooth Removal in Adults',
        de: 'Weisheitszahnentfernung bei Erwachsenen',
      },
      subtitle: {
        ru: 'Показания к удалению «восьмерок» и особенности реабилитации.',
        en: 'Indications for the removal of ”eights“ and characteristics of rehabilitation.',
        de: 'Indikationen für die Entfernung von „Achtern“ und Besonderheiten der Rehabilitation.',
      },
      excerpt: {
        ru: 'Зубы мудрости часто доставляют дискомфорт и влияют на положение других зубов.',
        en: 'Wisdom teeth often cause discomfort and affect the position of other teeth.',
        de: 'Weisheitszähne verursachen oft Unbehagen und beeinflussen die Position anderer Zähne.',
      },
      category: 'chirurgy',
      readTime: '4',
      color: 'bg-zen-soft/20',
      img: 'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770061391/tooth_extraction_xrq3jm.jpg',
      isVisible: true,
      content: [],
    },
    {
      slug: 'stomatologicheskie-operacii-u-beremennyh',
      title: {
        ru: 'Стоматологические операции у беременных',
        en: 'Dental Surgery in Pregnant Women',
        de: 'Zahnärztliche Eingriffe bei Schwangeren',
      },
      subtitle: {
        ru: 'Что нужно учитывать при лечении зубов в этот особый период.',
        en: 'What should be considered when treating teeth during this special period.',
        de: 'Was bei der Behandlung der Zähne in dieser besonderen Zeit zu beachten ist.',
      },
      excerpt: {
        ru: 'Беременность — не повод отказываться от необходимого лечения, но важно соблюдать меры предосторожности.',
        en: 'Pregnancy is no reason to give up necessary treatment, but it is important to take precautions.',
        de: 'Eine Schwangerschaft ist kein Grund, auf eine notwendige Behandlung zu verzichten, aber es ist wichtig, Vorsichtsmaßnahmen zu treffen.',
      },
      category: 'different',
      readTime: '5',
      color: 'bg-zen-sage/20',
      img: 'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770052199/artic_before_operation_iqicls.png',
      isVisible: true,
      content: [],
    },
    {
      slug: 'anesteziya-v-stomatologii-varianty',
      title: {
        ru: 'Анестезия в стоматологии: современные варианты',
        en: 'Anesthesia in Dentistry: Modern Options',
        de: 'Anästhesie in der Zahnmedizin: moderne Möglichkeiten',
      },
      subtitle: {
        ru: 'Разберём виды обезболивания, которые подходят взрослым пациентам.',
        en: 'Let\'s analyze the types of pain relief suitable for adult patients.',
        de: 'Lassen Sie uns die Arten der Schmerzlinderung analysieren, die für erwachsene Patienten geeignet sind.',
      },
      excerpt: {
        ru: 'Современная анестезия позволяет лечить зубы абсолютно безболезненно и без стресса.',
        en: 'Modern anesthesia allows for dental treatment that is completely painless and stress-free.',
        de: 'Moderne Anästhesie ermöglicht eine Zahnbehandlung, die völlig schmerzfrei und stressfrei ist.',
      },
      category: 'different',
      readTime: '4',
      color: 'bg-zen-soft/20',
      img: 'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770051268/me_surgery_pxsmvc.jpg',
      isVisible: true,
      content: [],
    },
  ];

  await prisma.article.deleteMany();

  for (let i = 0; i < articles.length; i++) {
    await prisma.article.create({
      data: { ...articles[i], order: i } as any,
    });
  }
}
