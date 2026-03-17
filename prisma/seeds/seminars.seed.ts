import { PrismaClient } from '../../src/generated/client';

export async function seedSeminars(prisma: PrismaClient) {
  console.log('Seed: Seminars...');

  const seminars = [
    {
      // seminar_6
      title: {
        ru: 'Имплантация в эстетически значимых зонах',
        en: 'Implantation in aesthetically significant areas',
        de: 'Implantation in ästhetisch bedeutsamen Bereichen',
      },
      date: new Date('2026-03-28T10:00:00.000Z'),
      location: {
        ru: 'г. Гродно',
        en: 'Grodno',
        de: 'Grodno',
      },
      link: 'https://www.instagram.com/p/DUDiVTPjE9L/?igsh=MXJ1MHMzY3RrbHhoYg%3D%3D',
      logoLink:
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770051107/straumann_svwfzz.png',
      logoTitle: 'Strauman logotype',
      description: {
        ru: 'Программа посвящена имплантации в эстетически значимых зонах и охватывает диагностику и планирование лечения, а также ключевые факторы, влияющие на сохранение костной ткани и успех имплантации. Рассматриваются биологическая ширина, уровень зенита реставрации, профиль прорезывания, субкрестальная установка имплантатов, характеристики костной и мягкой ткани, принципы позиционирования имплантата с учётом будущей протетики, а также рекомендации по хирургическому протоколу.',
        en: 'The program focuses on implantation in aesthetically significant areas and covers diagnosis and treatment planning, as well as key factors influencing bone preservation and implant success. It covers biological width, restoration zenith level, emergence profile, subcrestal implant placement, bone and soft tissue characteristics, principles of implant positioning considering future prosthetics, and recommendations for surgical protocol.',
        de: 'Das Programm konzentriert sich auf die Implantation in ästhetisch relevanten Bereichen und umfasst Diagnose und Behandlungsplanung sowie Schlüsselfaktoren für den Knochenerhalt und den Implantaterfolg. Es behandelt die biologische Breite, den Zenit der Restauration, das Emergenzprofil, die subkrestale Implantatpositionierung, Knochen- und Weichgewebseigenschaften, die Prinzipien der Implantatpositionierung unter Berücksichtigung der zukünftigen prothetischen Versorgung sowie Empfehlungen für das chirurgische Vorgehen.',
      },
      images: [
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770556252/straum_26_grodno_wzzivo.jpg',
      ],
    },
    {
      // seminar_5
      title: {
        ru: 'Современные протоколы одномоментной имплантации: биология, техника, прогноз.',
        en: 'Modern protocols for single-stage implantation: biology, technique, prognosis.',
        de: 'Moderne Protokolle für die einzeitige Implantation: Biologie, Technik, Prognose.',
      },
      date: new Date('2026-02-21T10:00:00.000Z'),
      location: {
        ru: 'Консультационный центр MEGAGEN BELARUS, г. Минск',
        en: 'Consulting center MEGAGEN BELARUS, Minsk',
        de: 'Beratungszentrum MEGAGEN BELARUS, Minsk',
      },
      link: 'https://www.instagram.com/reel/DTe3hG_jKq0/?igsh=MW9wNXpndGtwYTV2eQ%3D%3D',
      logoLink:
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770051106/megagen_ahd53r.png',
      logoTitle: 'Megagen logotype',
      description: {
        ru: 'Программа мероприятия посвящена одномоментной имплантации и включает разбор показаний, противопоказаний, факторов риска и критериев выбора тактики лечения. Рассматриваются современные хирургические протоколы, методы минимально-травматичного удаления, выбор имплантационной системы и планирование лечения с учётом ортопедического результата, а практическая часть направлена на установку имплантатов MegaGen, формирование биологической ширины и аугментацию мягких тканей.',
        en: 'The event program is dedicated to single-stage implantation and includes an analysis of indications, contraindications, risk factors, and criteria for choosing a treatment strategy. Modern surgical protocols, minimally invasive removal methods, implant system selection, and treatment planning with consideration of orthopedic outcomes are discussed. The practical portion focuses on the placement of MegaGen implants, the formation of biological width, and soft tissue augmentation.',
        de: 'Das Veranstaltungsprogramm widmet sich der einzeitigen Implantation und beinhaltet eine Analyse von Indikationen, Kontraindikationen, Risikofaktoren und Kriterien für die Wahl der Behandlungsstrategie. Moderne Operationsprotokolle, minimalinvasive Entfernungsmethoden, die Auswahl des Implantatsystems und die Behandlungsplanung unter Berücksichtigung orthopädischer Ergebnisse werden erörtert. Der praktische Teil konzentriert sich auf die Platzierung von MegaGen-Implantaten, die Schaffung biologischer Breite und die Weichteilaugmentation.',
      },
      images: [
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770107431/mega_annonce_1_poxscc.jpg',
      ],
    },
    {
      // seminar_4
      title: {
        ru: 'Международный Конгресс EASM (Eurasian Scientific Meeting) MegaGen',
        en: 'International Congress EASM (Eurasian Scientific Meeting) MegaGen',
        de: 'Internationaler Kongress EASM (Eurasian Scientific Meeting) MegaGen',
      },
      date: new Date('2025-10-17T09:00:00.000Z'),
      location: {
        ru: 'кинотеатр Москва, пр-т. Победителей, 13',
        en: 'Moscow Cinema, 13 Pobediteley Ave.',
        de: 'Moskauer Kino, Pobediteley Ave. 13.',
      },
      link: 'https://easm.megagen.by',
      logoLink:
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770051106/megagen_ahd53r.png',
      logoTitle: 'Megagen logotype',
      description: {
        ru: 'В рамках научной программы конгресса рассматривались современные протоколы имплантологического лечения, подходы к работе со сложными клиническими случаями, а также методы повышения долгосрочной стабильности и предсказуемости результатов. Особое внимание было уделено цифровым технологиям в имплантологии, планированию хирургических вмешательств, управлению мягкими и твёрдыми тканями, а также вопросам биомеханики и интеграции имплантологических систем в комплексное стоматологическое лечение.',
        en: "The congress's scientific program covered modern implant treatment protocols, approaches to complex clinical cases, and methods for improving long-term stability and predictability of results. Particular attention was paid to digital technologies in implantology, surgical planning, soft and hard tissue management, biomechanics, and the integration of implant systems into comprehensive dental treatment.",
        de: 'Das wissenschaftliche Programm des Kongresses umfasste moderne Implantatbehandlungsprotokolle, Vorgehensweisen bei komplexen klinischen Fällen sowie Methoden zur Verbesserung der Langzeitstabilität und Vorhersagbarkeit der Ergebnisse. Besonderes Augenmerk lag auf digitalen Technologien in der Implantologie, der chirurgischen Planung, dem Weich- und Hartgewebsmanagement, der Biomechanik und der Integration von Implantatsystemen in die umfassende zahnärztliche Behandlung.',
      },
      images: [
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770101899/photo._633_%D0%B8%D0%B7_872_1_fhcknu.jpg',
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770101899/photo._603_%D0%B8%D0%B7_872_1_tien5t.jpg',
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770101898/photo._601_%D0%B8%D0%B7_872_1_yduouc.jpg',
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770101899/IMG_9034_1_pbollt.jpg',
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770101898/IMG_9055_1_gvlhoi.jpg',
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770101899/photo._95_%D0%B8%D0%B7_872_1_dgnuii.jpg',
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770051275/mega_lection_j3kltm.jpg',
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770101899/photo._616_%D0%B8%D0%B7_872_1_qicqn5.jpg',
      ],
    },
    {
      // seminar_3
      title: {
        ru: 'Имплантация в эстетически значимых зонах',
        en: 'Implantation in aesthetically significant areas',
        de: 'Implantation in ästhetisch bedeutsamen Bereichen',
      },
      date: new Date('2025-12-06T09:00:00.000Z'),
      location: {
        ru: 'г. Минск',
        en: 'Minsk',
        de: 'Minsk',
      },
      link: 'https://www.instagram.com/p/DQou7FbjLgy/?igsh=MXRxZmt3cGtnaGs0aw%3D%3D',
      logoLink:
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770051107/straumann_svwfzz.png',
      logoTitle: 'Strauman logotype',
      description: {
        ru: 'Программа посвящена имплантации в эстетически значимых зонах и охватывает диагностику, планирование и ключевые факторы, влияющие на успешность лечения. Рассматриваются биологическая ширина, уровень зенита реставрации, профиль прорезывания, субкрестальная установка имплантатов, а также качественные и количественные характеристики костной ткани и биотип мягких тканей. Обсуждаются принципы позиционирования имплантата с учётом будущей протетики, основные этапы хирургического протокола, «переключение» платформы, выбор позиции имплантата, использование временных коронок, профилактика и устранение осложнений, а также клинические примеры из практики.',
        en: 'The program focuses on implantation in aesthetically significant areas and covers diagnostics, planning, and key factors influencing treatment success. It examines biological width, restoration zenith level, emergence profile, subcrestal implant placement, as well as the qualitative and quantitative characteristics of bone tissue and soft tissue biotype. It also discusses the principles of implant positioning with consideration of future prosthetics, the main stages of the surgical protocol, platform switching, implant positioning, the use of temporary crowns, the prevention and management of complications, and case studies.',
        de: 'Das Programm konzentriert sich auf die Implantation in ästhetisch relevanten Bereichen und umfasst Diagnostik, Planung und Schlüsselfaktoren für den Behandlungserfolg. Es untersucht die biologische Breite, den Zenit der Restauration, das Emergenzprofil, die subkrestale Implantatpositionierung sowie die qualitativen und quantitativen Eigenschaften des Knochen- und Weichgewebebiotyps. Darüber hinaus werden die Prinzipien der Implantatpositionierung unter Berücksichtigung der zukünftigen Prothetik, die Hauptphasen des chirurgischen Protokolls, der Plattformwechsel, die Verwendung von provisorischen Kronen, die Prävention und das Management von Komplikationen sowie Fallstudien behandelt.',
      },
      images: [
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770114194/IMG_6971_gdz2or.jpg',
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770114194/IMG_6878_yli5z4.jpg',
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770114194/IMG_6962_wms2iu.jpg',
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770114195/IMG_6903_b1mmts.jpg',
      ],
    },
    {
      // seminar_2
      title: {
        ru: 'Имплантация в эстетически значимых зонах',
        en: 'Implantation in aesthetically significant areas',
        de: 'Implantation in ästhetisch bedeutsamen Bereichen',
      },
      date: new Date('2025-11-29T09:00:00.000Z'),
      location: {
        ru: 'г. Минск',
        en: 'Minsk',
        de: 'Minsk',
      },
      link: 'https://www.instagram.com/p/DOvsHAiDD76/?igsh=aWp4amxtMnZwcTM5&img_index=1',
      logoLink:
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770051107/straumann_svwfzz.png',
      logoTitle: 'Strauman logotype',
      description: {
        ru: 'Программа посвящена имплантации в эстетически значимых зонах и охватывает диагностику, планирование и ключевые факторы, влияющие на успешность лечения. Рассматриваются биологическая ширина, уровень зенита реставрации, профиль прорезывания, субкрестальная установка имплантатов, а также качественные и количественные характеристики костной ткани и биотип мягких тканей. Обсуждаются принципы позиционирования имплантата с учётом будущей протетики, основные этапы хирургического протокола, «переключение» платформы, выбор позиции имплантата, использование временных коронок, профилактика и устранение осложнений, а также клинические примеры из практики.',
        en: 'The program focuses on implantation in aesthetically significant areas and covers diagnostics, planning, and key factors influencing treatment success. It examines biological width, restoration zenith level, emergence profile, subcrestal implant placement, as well as the qualitative and quantitative characteristics of bone tissue and soft tissue biotype. It also discusses the principles of implant positioning with consideration of future prosthetics, the main stages of the surgical protocol, platform switching, implant positioning, the use of temporary crowns, the prevention and management of complications, and case studies.',
        de: 'Das Programm konzentriert sich auf die Implantation in ästhetisch relevanten Bereichen und umfasst Diagnostik, Planung und Schlüsselfaktoren für den Behandlungserfolg. Es untersucht die biologische Breite, den Zenit der Restauration, das Emergenzprofil, die subkrestale Implantatpositionierung sowie die qualitativen und quantitativen Eigenschaften des Knochen- und Weichgewebebiotyps. Darüber hinaus werden die Prinzipien der Implantatpositionierung unter Berücksichtigung der zukünftigen Prothetik, die Hauptphasen des chirurgischen Protokolls, der Plattformwechsel, die Verwendung von provisorischen Kronen, die Prävention und das Management von Komplikationen sowie Fallstudien behandelt.',
      },
      images: [
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770556400/straum_25_tvvr1i.jpg',
      ],
    },
    {
      // seminar_1
      title: {
        ru: 'Dental Discussion Club (DDC)',
        en: 'Dental Discussion Club (DDC)',
        de: 'Zahnärztlicher Diskussionsclub (DDC)',
      },
      date: new Date('2025-06-27T10:00:00.000Z'),
      location: {
        ru: 'г. Минск',
        en: 'Minsk',
        de: 'Minsk',
      },
      link: '',
      logoLink:
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770051107/straumann_svwfzz.png',
      logoTitle: 'Strauman logotype',
      description: {
        ru: 'Программа посвящена синус-лифтингу на кровяном сгустке и охватывает диагностику, планирование и ключевые факторы, влияющие на успех процедуры. Рассматриваются анатомические особенности верхнечелюстной пазухи, методы минимально травматичного доступа, подготовка лунки и работа с кровяным сгустком как естественным материалом для аугментации. Обсуждаются принципы стабилизации и интеграции тканей, профилактика осложнений, выбор подходящей тактики в различных клинических ситуациях и разбор практических клинических примеров.',
        en: 'This program focuses on sinus lift surgery using a blood clot and covers diagnosis, planning, and key factors influencing the success of the procedure. It examines the anatomical features of the maxillary sinus, minimally invasive access techniques, socket preparation, and using a blood clot as a natural augmentation material. It also discusses the principles of tissue stabilization and integration, complication prevention, the selection of appropriate strategies in various clinical situations, and provides case studies.',
        de: 'Dieses Programm befasst sich mit der Sinuslift-Operation unter Verwendung eines Blutgerinnsels und behandelt Diagnose, Planung sowie die wichtigsten Erfolgsfaktoren des Eingriffs. Es untersucht die anatomischen Merkmale der Kieferhöhle, minimalinvasive Zugangstechniken, die Alveolenpräparation und die Verwendung eines Blutgerinnsels als natürliches Augmentationsmaterial. Darüber hinaus werden die Prinzipien der Gewebestabilisierung und -integration, die Prävention von Komplikationen, die Auswahl geeigneter Strategien in verschiedenen klinischen Situationen sowie Fallstudien erörtert.',
      },
      images: [
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770116031/IMG_5874_1_rqjgka.jpg',
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770116030/IMG_5827_wpgcyj.jpg',
        'https://res.cloudinary.com/dbzvwnxpw/image/upload/v1770116030/IMG_5824_u1vbge.jpg',
      ],
    },
  ];

  await prisma.seminar.deleteMany();

  for (let i = 0; i < seminars.length; i++) {
    await prisma.seminar.create({
      data: { ...seminars[i], order: i },
    });
  }
}
