import { PrismaClient } from '../../src/generated/client';

export async function seedReviews(prisma: PrismaClient) {
  console.log('Seed: Reviews...');

  const testimonials = [
    {
      quote: {
        ru: 'Я очень благодарна хирургу Стаднику Николаю Ивановичу за квалифицированную помощь и добросовестный труд проделанный по удалению 3 зубов и установке двух имплантов! Действительно такие люди как этот доктор достойны похвалы,это действительно Доктор с большой буквы! Спасибо огромное!!!',
        en: 'I am very grateful to the surgeon Stadnik Nikolai Ivanovich for qualified assistance and conscientious work done on the removal of 3 teeth and the installation of two implants! Indeed, people like this doctor deserve praise, he is truly a Doctor with a capital letter! Thank you very much!!!',
        de: 'Ich bin dem Chirurgen Nikolai Ivanovich Stadnik für seine fachkundige Hilfe und seine gewissenhafte Arbeit bei der Entfernung meiner drei Zähne und dem Einsetzen der beiden Implantate sehr dankbar! Ärzte wie er verdienen wirklich Lob; er ist ein Arzt mit großem D! Vielen herzlichen Dank!!!',
      },
      author: { ru: 'Дарья', en: 'Daria', de: 'Daria' },
      rating: 5,
      source: '14gsp.by',
      link: 'https://14gsp.by/о-нас/отзывы',
      isVisible: true,
    },
    {
      quote: {
        ru: 'Обращалась в стоматологию для удаления зуба мудрости. Не пожалела. Внимательный персонал, обалденный хирург. Сделал все безболезненно, смягчая весь процесс приятной беседой. Дали ряд рекомендаций. После посещения остались только положительные эмоции.',
        en: "I went to the dentist to have my wisdom tooth removed. I didn't regret it. Attentive staff, awesome surgeon. He did everything painlessly, making the whole process easier with a pleasant conversation. He gave me a number of recommendations. After the visit, I only had positive emotions.",
        de: 'Ich war beim Zahnarzt, um mir die Weisheitszähne ziehen zu lassen. Ich bereue es nicht. Das Personal war sehr aufmerksam und der Chirurg einfach großartig. Er hat alles schmerzfrei gestaltet und die ganze Prozedur durch ein angenehmes Gespräch noch angenehmer gemacht. Er hat mir außerdem einige Empfehlungen gegeben. Ich bin rundum zufrieden.',
      },
      author: { ru: 'Диана', en: 'Diana', de: 'Diana' },
      rating: 4,
      source: 'slivki.by',
      link: 'https://www.slivki.by/lechenie-kariesa-minsk-skidka-stolichnayastomatologiya?page=3',
      isVisible: true,
    },
    {
      quote: {
        ru: 'Прекрасная клиника и персонал! Все на высочайшем уровне. У меня был целый комплекс — и лечение, и чистка, и установка виниров. Был у разных докторов, весь персонал доброжелательный, отзывчивый и чуткий! Особо хочу отметить докторов, без которых ничего бы не вышло — это Шевчук Алексей Алексеевич и Стадник Николай Иванович! Высококлассные специалисты своего дела. Однозначно рекомендую стоматологию VINIR!',
        en: 'Excellent clinic and staff! Everything is at the highest level. I had a whole complex - treatment, cleaning, and installation of veneers. I visited different doctors, all the staff are friendly, responsive and sensitive! I would especially like to mention the doctors, without whom nothing would have happened - Shevchuk Alexey Alexeevich and Stadnik Nikolay Ivanovich! Highly qualified specialists in their field. I definitely recommend VINIR dentistry!',
        de: 'Eine wunderbare Klinik mit tollem Team! Alles war erstklassig. Ich habe das Komplettpaket erhalten – Behandlung, Zahnreinigung und Veneers. Ich wurde von mehreren Ärzten behandelt, und das gesamte Team war freundlich, hilfsbereit und aufmerksam! Besonders hervorheben möchte ich die Ärzte Alexey Alexeevich Shevchuk und Nikolay Ivanovich Stadnik, ohne die all dies nicht möglich gewesen wäre! Sie sind hochqualifizierte Fachleute. Ich kann VINIR Dentistry uneingeschränkt empfehlen!',
      },
      author: { ru: 'Иван', en: 'Ivan', de: 'Ivan' },
      rating: 5,
      source: 'otzovik.by',
      link: 'https://otzovik.by/places/stomatologicheskij-centr-vinir/',
      isVisible: true,
    },
    {
      quote: {
        ru: 'Хочу выразить огромную благодарность за профессионализм и подход к клиентам. Пользовалась услугами хирурга, доктор Стадник и осталась очень довольна. Безболезненное и быстрое удаление зубов мудрости. Очень приятный человек, все четко и понятно объясняет Чувствую себя хорошо после операции и всем рекомендую.',
        en: 'I would like to express my deep gratitude for the professionalism and approach to clients. I used the services of the surgeon, Dr. Stadnik, and was very pleased. Painless and quick removal of wisdom teeth. A very pleasant person, explains everything clearly and understandably. I feel good after the operation and recommend it to everyone.',
        de: 'Ich möchte Ihnen meinen tiefen Dank für Ihre Professionalität und Ihren Umgang mit Patienten aussprechen. Ich habe die Dienste von Dr. Stadnik in Anspruch genommen und war sehr zufrieden. Die Entfernung meiner Weisheitszähne verlief schmerzlos und schnell. Er ist ein sehr angenehmer Mensch und erklärt alles klar und verständlich. Ich fühle mich nach der Operation hervorragend und kann ihn uneingeschränkt weiterempfehlen.',
      },
      author: {
        ru: 'Екатерина Хумала',
        en: 'Ekaterina Khumala',
        de: 'Ekaterina Humala',
      },
      rating: 5,
      source: '14gsp.by',
      link: 'https://14gsp.by/о-нас/отзывы',
      isVisible: true,
    },
    {
      quote: {
        ru: 'Хочу выразить огромную благодарность стоматологу-хирургу Стаднику Николаю Ивановичу за его профессионализм и золотые руки, он вырвал мне не легкий зуб мудрости так быстро и качественно, что я была в шоке! Он большой профессионал своего дела, но и не только, он еще и отличный психолог, я так боялась, что руки и голос дрожал, он смог меня успокоить, убедить и прийти к правильному решению! Только к нему и не сомневайтесь, рекомендую 100%!!!!!',
        en: 'I would like to express my deep gratitude to the dental surgeon Nikolai Ivanovich Stadnik for his professionalism and golden hands. He pulled out my difficult wisdom tooth so quickly and efficiently that I was shocked! He is a great professional in his field, but not only that, he is also an excellent psychologist, I was so afraid that my hands and voice were shaking, he was able to calm me down, convince me and come to the right decision! Only to him and do not doubt, I recommend 100%!!!!!',
        de: 'Ich möchte Nikolai Ivanovich Stadnik, einem Zahnarzt, meinen tiefsten Dank für seine Professionalität und sein geschicktes Vorgehen aussprechen. Er hat mir meinen schwierigen Weisheitszahn so schnell und effizient entfernt, dass ich völlig verblüfft war! Er ist nicht nur ein absoluter Profi, sondern auch ein hervorragender Psychologe. Ich hatte solche Angst, что мои руки и голос дрожали, но он успокоил меня и помог принять верное решение. Рекомендую на 100%!',
      },
      author: { ru: 'Юлия', en: 'Julia', de: 'Julia' },
      rating: 5,
      source: '14gsp.by',
      link: 'https://14gsp.by/о-нас/отзывы',
      isVisible: true,
    },
    {
      quote: {
        ru: 'Хочу выразить благодарность Стаднику Николаю Ивановичу! Специалист от Бога! Боялась до ужаса, но хирург очень аккуратно и абсолютно не больно, удалил 2 зуба мудрости , наложил швы! Всем рекомендую данного стоматолога-хирурга!',
        en: 'I would like to express my gratitude to Nikolay Ivanovich Stadnik! A specialist from God! I was terribly afraid, but the surgeon very carefully and absolutely painlessly removed 2 wisdom teeth, put in stitches! I recommend this dentist-surgeon to everyone!',
        de: 'Ich möchte Nikolai Ivanovich Stadnik meinen Dank aussprechen! Er ist ein echter Profi! Ich hatte große Angst, aber der Chirurg hat mir zwei Weisheitszähne entfernt и наложил швы очень аккуратно. Всем рекомендую!',
      },
      author: { ru: 'Анастасия', en: 'Anastasia', de: 'Anastasia' },
      rating: 5,
      source: '14gsp.by',
      link: 'https://14gsp.by/о-нас/отзывы',
      isVisible: true,
    },
    {
      quote: {
        ru: 'Удаляла 8 сложную у стадника Николая, восторгу нет предела, максимально безболезно и быстро удален зуб в моей ситуации, есть с чем сравнить, огромная благодарность.',
        en: "I had a complicated 8 tooth removed by Nikolai Stadnik. I'm thrilled. The tooth was removed as painlessly and quickly as possible in my situation. I have something to compare it to. Thank you so much.",
        de: 'Nikolai Stadnik hat mir einen komplizierten Weisheitszahn entfernt. Ich bin begeistert. Alles verlief schmerzfrei und schnell. Vielen Dank!',
      },
      author: { ru: 'belaya', en: 'belaya', de: 'belaya' },
      rating: 5,
      source: 'slivki.by',
      link: 'https://www.slivki.by/lechenie-kariesa-minsk-skidka-stolichnayastomatologiya?page=3',
      isVisible: true,
    },
    {
      quote: {
        ru: 'Вчера маме удаляли здесь зуб мудрости. Большое спасибо Николаю Ивановичу! По словам мамы, впервые за 68 лет ей так удачно удалили зуб. Даже не почувствовала удаления.Также очень внимательное отношение со стороны сотрудников, начиная с администратора. Всем спасибо!',
        en: "Yesterday my mother had her wisdom tooth removed here. Many thanks to Nikolai Ivanovich! According to my mother, for the first time in 68 years she had a tooth removed so successfully. She didn't even feel the removal. Also very attentive attitude from the staff, starting with the administrator. Thanks to everyone!",
        de: 'Gestern wurde meiner Mutter hier ein Weisheitszahn gezogen. Vielen Dank an Nikolai Ivanovich! Laut meiner Mutter war es das erste Mal in 68 Jahren, dass ein Zahn so erfolgreich entfernt wurde.',
      },
      author: { ru: 'Анна', en: 'Anna', de: 'Anna' },
      rating: 5,
      source: 'slivki.by',
      link: 'https://www.slivki.by/lechenie-kariesa-minsk-skidka-stolichnayastomatologiya?page=3',
      isVisible: true,
    },
    {
      quote: {
        ru: 'Отличная клиника, просто превосходные врачи и атмосфера- чисто, аккуратно, доброжелательно и вежливо. Была 09.08. на операции по удалению ретинированного зуба мудрости у хирурга, Стадника Николая, и бесконечно благодарна врачу за его работу.',
        en: 'Excellent clinic, simply excellent doctors and atmosphere - clean, neat, friendly and polite. I was there on 09.08. for an operation to remove an impacted wisdom tooth with the surgeon, Nikolai Stadnik, and I am infinitely grateful to the doctor for his work.',
        de: 'Hervorragende Klinik, erstklassige Ärzte und eine sehr angenehme Atmosphäre. Ich war zur Entfernung eines Weisheitszahns bei Nikolai Stadnik и очень благодарна за работу.',
      },
      author: { ru: 'Alexandra', en: 'Alexandra', de: 'Alexandra' },
      rating: 5,
      source: 'yandex.by',
      link: 'https://yandex.by/maps/org/vinir/147988909737/reviews/?ll=27.485257%2C53.906468&z=13',
      isVisible: true,
    },
    {
      quote: {
        ru: 'Удаляла зуб мудрости(лежащий) у Стадника Николая Ивановича. Спасибо ему огромное , было абсолютно не больно и после удаления не болело. Очень боялась удалять , но как оказалось не страшно и я ушла с улыбкой:)',
        en: 'I had my wisdom tooth (lying) removed by Nikolai Ivanovich Stadnik. Thank you very much, it was absolutely painless and after the removal there was no pain. I was very afraid of removing it, but as it turned out it was not scary and I left with a smile:)',
        de: 'Nikolai Stadnik hat mir einen liegenden Weisheitszahn entfernt. Vielen Dank, es war absolut schmerzfrei.',
      },
      author: { ru: 'dasha15.95', en: 'dasha15.95', de: 'dasha15.95' },
      rating: 5,
      source: 'infodoktor.by',
      link: 'https://www.infodoktor.by/otzyvy-o-klinikah/14-stomatologicheskaya-poliklinika-minska/#4142',
      isVisible: true,
    },
    {
      quote: {
        ru: 'Замечательная клиника, особенную благодарность хочется выразить стоматологу-хирургу Стаднику Николаю Ивановичу за грамотно проделанную операцию по удалению зубов мудрости.',
        en: 'A wonderful clinic, I would like to express special gratitude to the dentist-surgeon Stadnik Nikolai Ivanovich for the competently performed operation to remove wisdom teeth.',
        de: 'Eine ausgezeichnete Klinik. Besonderer Dank geht an Nikolai Stadnik für die professionelle Entfernung der Weisheitszähne.',
      },
      author: {
        ru: 'Петрашевич Т.',
        en: 'Petrashevich T.',
        de: 'Petrashevich T.',
      },
      rating: 5,
      source: 'yandex.by',
      link: 'https://yandex.by/maps/org/estetik_smayl/105917578680/reviews/?ll=27.519680%2C53.881093&z=14',
      isVisible: true,
    },
    {
      quote: {
        ru: 'Хочу написать слова благодарности Стаднику Николаю Ивановичу, это не просто стоматолог-хирург, это врач от бога, у него золотые руки.',
        en: 'I would like to express my gratitude to Nikolai Ivanovich Stadnik, he is not just a dentist-surgeon, he is a doctor from God, he has golden hands.',
        de: 'Ich möchte Nikolai Stadnik danken. Er ist ein Arzt von Gott с золотыми руками.',
      },
      author: { ru: 'Елена', en: 'Elena', de: 'Elena' },
      rating: 4,
      source: '14gsp.by',
      link: 'https://14gsp.by/о-нас/отзывы',
      isVisible: true,
    },
  ];

  await prisma.review.deleteMany();

  for (let i = 0; i < testimonials.length; i++) {
    await prisma.review.create({
      data: { ...testimonials[i], order: i },
    });
  }
}
