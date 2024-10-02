export interface ISurahItem {
  chapter_id: number;
  surahName: string;
  arabic_surah_name: string;
  content: IAyahUrlItem[];
}

export interface IAyahUrlItem {
  ayat: string;
  src: string;
  translation?: any;
}

export const surahList: ISurahItem[] = [
  {
    chapter_id: 1,
    surahName: "Al-Fatihah",
    arabic_surah_name: "الفَاتِحَة",
    content: [
      {
        ayat: "1-7",
        src: "/ayat/Al-Fatihah.png",
        translation: `<h1>Terjemahan</h1>

  <li>Dengan nama Allah, Yang Maha Pemurah, lagi Maha Mengasihani. (1) </li>

  <li>Segala puji tertentu bagi Allah, Tuhan yang memelihara dan mentadbirkan sekalian alam. (2)</li>

  <li>Yang Maha Pemurah, lagi Maha Mengasihani. (3)</li>

  <li>Yang Menguasai pemerintahan hari Pembalasan (hari Akhirat). (4)</li>

  <li>Engkaulah sahaja (Ya Allah) Yang Kami sembah, dan kepada Engkaulah sahaja kami memohon pertolongan.(5)</li>

  <li>Tunjukilah kami jalan yang lurus.(6)</li>

  <li>Iaitu jalan orang-orang yang Engkau telah kurniakan nikmat kepada mereka, bukan (jalan) orang-orang yang Engkau telah murkai, dan bukan pula (jalan) orang-orang yang sesat. (7)</li>
`,
      },
    ],
  },
  {
    chapter_id: 2,
    surahName: "Al-Baqarah",
    arabic_surah_name: "الْبَقَرَة",
    content: [
      {
        ayat: "1-5",
        src: "/ayat/Al-Baqarah-1-5.png",
        translation: `<h1>Terjemahan</h1>

  <li>Alif, Laam, Miim. (1) </li>

  <li>Kitab Al-Quran ini, tidak ada sebarang syak padanya (tentang datangnya dari Allah dan tentang sempurnanya); ia pula menjadi petunjuk bagi orang-orang yang (hendak) bertaqwa; (2)</li>

  <li>Iaitu orang-orang yang beriman kepada perkara-perkara yang ghaib, dan mendirikan (mengerjakan) sembahyang serta membelanjakan (mendermakan) sebahagian dari rezeki yang Kami berikan kepada mereka. (3)</li>

  <li>Dan juga orang-orang yang beriman kepada Kitab "Al-Quran" yang diturunkan kepadamu (Wahai Muhammad), dan Kitab-kitab yang diturunkan dahulu daripadamu, serta mereka yakin akan (adanya) hari akhirat (dengan sepenuhnya). (4)</li>

  <li>Mereka itulah yang tetap mendapat petunjuk dari Tuhan mereka, dan merekalah orang-orang yang berjaya. (5)</li>

`,
      },
      {
        ayat: "102",
        src: "/ayat/Al-Baqarah-102.png",
        translation: `<h1>Terjemahan</h1>
        <p>Mereka (membelakangkan Kitab Allah) dan mengikut ajaran-ajaran sihir yang dibacakan oleh puak-puak Syaitan dalam masa pemerintahan Nabi Sulaiman, padahal Nabi Sulaiman tidak mengamalkan sihir yang menyebabkan kekufuran itu, akan tetapi puak-puak Syaitan itulah yang kafir (dengan amalan sihirnya); kerana merekalah yang mengajarkan manusia ilmu sihir dan apa yang diturunkan kepada dua malaikat: Harut dan Marut, di negeri Babil (Babylon), sedang mereka berdua tidak mengajar seseorang pun melainkan setelah mereka menasihatinya dengan berkata: "Sesungguhnya kami ini hanyalah cubaan (untuk menguji imanmu), oleh itu janganlah engkau menjadi kafir (dengan mempelajarinya)". Dalam pada itu ada juga orang-orang mempelajari dari mereka berdua: ilmu sihir yang boleh menceraikan antara seorang suami dengan isterinya, padahal mereka tidak akan dapat sama sekali memberi mudarat (atau membahayakan) dengan sihir itu seseorang pun melainkan dengan izin Allah. Dan sebenarnya mereka mempelajari perkara yang hanya membahayakan mereka dan tidak memberi manfaat kepada mereka. Dan demi sesungguhnya mereka (kaum Yahudi itu) telahpun mengetahui bahawa sesiapa yang memilih ilmu sihir itu tidaklah lagi mendapat bahagian yang baik di akhirat. Demi sesungguhnya amat buruknya apa yang mereka pilih untuk diri mereka, kalaulah mereka mengetahui. (102)</p>
        `,
      },
      {
        ayat: "163",
        src: "/ayat/Al-Baqarah-163.png",
        translation: `<h1>Terjemahan</h1>
        <p>Dan Tuhan kamu ialah Tuhan yang Maha Esa; tiada Tuhan (Yang berhak disembah) selain dari Allah, yang Maha Pemurah, lagi Maha Mengasihani. (163)</p>
        `,
      },
      {
        ayat: "255",
        src: "/ayat/Al-Baqarah-255.png",
        translation: `<h1>Terjemahan</h1> <p>Allah, tiada Tuhan (yang berhak disembah) melainkan Dia, Yang Tetap hidup, Yang Kekal selama-lamanya mentadbirkan (sekalian makhlukNya). Yang tidak mengantuk usahkan tidur. Yang memiliki segala yang ada di langit dan yang ada di bumi. Tiada sesiapa yang dapat memberi syafaat (pertolongan) di sisiNya melainkan dengan izinNya. yang mengetahui apa yang ada di hadapan mereka dan apa yang ada di belakang mereka, sedang mereka tidak mengetahui sesuatu pun dari (kandungan) ilmu Allah melainkan apa yang Allah kehendaki (memberitahu kepadanya). Luasnya Kursi Allah (ilmuNya dan kekuasaanNya) meliputi langit dan bumi; dan tiadalah menjadi keberatan kepada Allah menjaga serta memelihara keduanya. Dan Dia lah Yang Maha Tinggi (darjat kemuliaanNya), lagi Maha Besar (kekuasaanNya). (255)</p>
        `,
      },
      {
        ayat: "256",
        src: "/ayat/Al-Baqarah-256.png",
        translation: `<h1>Terjemahan</h1> <p>Tidak ada paksaan dalam ugama (Islam), kerana sesungguhnya telah nyata kebenaran (Islam) dari kesesatan (kufur). Oleh itu, sesiapa yang tidak percayakan Taghut, dan ia pula beriman kepada Allah, maka sesungguhnya ia telah berpegang kepada simpulan (tali ugama) yang teguh yang tidak akan putus. Dan (ingatlah), Allah Maha Mendengar, lagi Maha Mengetahui. (256)</p>`,
      },
      {
        ayat: "257",
        src: "/ayat/Al-Baqarah-257.png",
        translation: `<h1>Terjemahan</h1> <p>Allah Pelindung (Yang mengawal dan menolong) orang-orang yang beriman. Ia mengeluarkan mereka dari kegelapan (kufur) kepada cahaya (iman). Dan orang-orang yang kafir, penolong-penolong mereka ialah Taghut yang mengeluarkan mereka dari cahaya (iman) kepada kegelapan (kufur). Mereka itulah ahli neraka, mereka kekal di dalamnya. (257)</p>`,
      },
      {
        ayat: "284",
        src: "/ayat/Al-Baqarah-284.png",
        translation: `<h1>Terjemahan</h1> <p>Segala yang ada di langit dan yang ada di bumi adalah kepunyaan Allah. Dan jika kamu melahirkan apa yang ada di dalam hati kamu atau kamu memyembunyikannya, nescaya Allah akan menghitung dan menyatakannya kepada kamu. Kemudian Ia mengampunkan bagi sesiapa yang dikehendakiNya dan menyeksa sesiapa yang dikehendakiNya (menurut undang-undang peraturanNya) Dan (ingatlah), Allah Maha Kuasa atas tiap-tiap sesuatu. (284)</p>`,
      },
      {
        ayat: "285",
        src: "/ayat/Al-Baqarah-285.png",
        translation: `<h1>Terjemahan</h1> <p>Rasulullah telah beriman kepada apa yang diturunkan kepadanya dari Tuhannya, dan juga orang-orang yang beriman; semuanya beriman kepada Allah, dan Malaikat-malaikatNya, dan Kitab-kitabNya, dan Rasul-rasulNya. (Mereka berkata): "Kami tidak membezakan antara seorang dengan yang lain Rasul-rasulnya". Mereka berkata lagi: Kami dengar dan kami taat (kami pohonkan) keampunanMu wahai Tuhan kami, dan kepadaMu jualah tempat kembali". (285)</p>`,
      },
      {
        ayat: "286",
        src: "/ayat/Al-Baqarah-286.png",
        translation: `<h1>Terjemahan</h1> <p>Allah tidak memberati seseorang melainkan apa yang terdaya olehnya. Ia mendapat pahala kebaikan yang diusahakannya, dan ia juga menanggung dosa kejahatan yang diusahakannya. (Mereka berdoa dengan berkata): "Wahai Tuhan kami! Janganlah Engkau mengirakan kami salah jika kami lupa atau kami tersalah. Wahai Tuhan kami ! Janganlah Engkau bebankan kepada kami bebanan yang berat sebagaimana yang telah Engkau bebankan kepada orang-orang yang terdahulu daripada kami. Wahai Tuhan kami! Janganlah Engkau pikulkan kepada kami apa yang kami tidak terdaya memikulnya. Dan maafkanlah kesalahan kami, serta ampunkanlah dosa kami, dan berilah rahmat kepada kami. Engkaulah Penolong kami; oleh itu, tolonglah kami untuk mencapai kemenangan terhadap kaum-kaum yang kafir". (286)</p>`,
      },
    ],
  },
  {
    chapter_id: 3,
    surahName: "Al-Imran",
    arabic_surah_name: "آل عِمْرَانَ",
    content: [
      {
        ayat: "18",
        src: "/ayat/Al-Imran-18.png",
        translation: `<h1>Terjemahan</h1> <p>Allah menerangkan (kepada sekalian makhlukNya dengan dalil-dalil dan bukti), bahawasanya tiada Tuhan (yang berhak disembah) melainkan Dia, Yang sentiasa mentadbirkan (seluruh alam) dengan keadilan, dan malaikat-malaikat serta orang-orang yang berilmu (mengakui dan menegaskan juga yang demikian); tiada Tuhan (yang berhak disembah) melainkan Dia; Yang Maha Kuasa, lagi Maha Bijaksana. (18)</p>`,
      },
      {
        ayat: "26",
        src: "/ayat/Al-Imran-26.png",
        translation: `<h1>Terjemahan</h1> <p>Katakanlah (wahai Muhammad): "Wahai Tuhan yang mempunyai kuasa pemerintahan! Engkaulah yang memberi kuasa pemerintahan kepada sesiapa yang Engkau kehendaki, dan Engkaulah yang mencabut kuasa pemerintahan dari sesiapa yang Engkau kehendaki. Engkaulah juga yang memuliakan sesiapa yang Engkau kehendaki, dan Engkaulah yang menghina sesiapa yang Engkau kehendaki. Dalam kekuasaan Engkaulah sahaja adanya segala kebaikan. Sesungguhnya Engkau Maha Kuasa atas tiap-tiap sesuatu. (26)</p>`,
      },
      {
        ayat: "27",
        src: "/ayat/Al-Imran-27.png",
        translation: `<h1>Terjemahan</h1> <p>Engkaulah (wahai Tuhan) yang memasukkan waktu malam ke dalam waktu siang, dan Engkaulah yang memasukkan waktu siang ke dalam waktu malam. Engkaulah juga yang mengeluarkan sesuatu yang hidup dari benda yang mati, dan Engkaulah yang mengeluarkan benda yang mati dari sesuatu yang hidup. Engkau jualah yang memberi rezeki kepada sesiapa yang Engkau kehendaki, dengan tiada hitungan hisabnya (27)</p>`,
      },
    ],
  },
  {
    chapter_id: 23,
    surahName: "Al-Mukminun",
    arabic_surah_name: "المؤمنون",
    content: [
      {
        ayat: "115",
        src: "/ayat/Al-Mukminun-115.png",
        translation: `<h1>Terjemahan</h1> <p>Maka adakah patut kamu menyangka bahawa Kami hanya menciptakan kamu (dari tiada kepada ada) sahaja dengan tiada sebarang hikmat pada ciptaan itu? Dan kamu (menyangka pula) tidak akan dikembalikan kepada Kami? (115)</p>`,
      },
      {
        ayat: "116",
        src: "/ayat/Al-Mukminun-116.png",
        translation: `<h1>Terjemahan</h1> <p>Maka (dengan yang demikian) Maha Tinggilah Allah Yang Menguasai seluruh alam, lagi Yang Tetap Benar; tiada Tuhan melainkan Dia, Tuhan yang mempunyai Arasy yang mulia. (116)</p>`,
      },
      {
        ayat: "117",
        src: "/ayat/Al-Mukminun-117.png",
        translation: `<h1>Terjemahan</h1> <p>Dan sesiapa yang menyembah tuhan yang lain bersama-sama Allah, dengan tidak berdasarkan sebarang keterangan mengenainya, maka sesungguhnya hitungannya (dan balasan amalnya yang jahat itu) disediakan di sisi Tuhannya. Sesungguhnya orang-orang yang kafir tidak akan berjaya. (117)</p>`,
      },
      {
        ayat: "118",
        src: "/ayat/Al-Mukminun-118.png",
        translation: `<h1>Terjemahan</h1> <p>Dan berdoalah (wahai Muhammad dengan berkata): "Wahai Tuhanku, berikanlah ampun dan kurniakan rahmat, dan sememangnya Engkaulah sahaja sebaik-baik Pemberi rahmat!" (118)</p>`,
      },
    ],
  },
  {
    chapter_id: 37,
    surahName: "As-Saffat",
    arabic_surah_name: "الصافات",
    content: [
      {
        ayat: "1",
        src: "/ayat/As-Saffat-1.png",
        translation: `<h1>Terjemahan</h1> <p>Demi (hamba-hambaKu) yang berbaris dengan berderet-deret - (1)</p>`,
      },
      {
        ayat: "2",
        src: "/ayat/As-Saffat-2.png",
        translation: `<h1>Terjemahan</h1> <p>(Hamba-hambaKu) yang melarang (dari kejahatan) dengan sesungguh-sungguhnya - (2)</p>`,
      },
      {
        ayat: "3",
        src: "/ayat/As-Saffat-3.png",
        translation: `<h1>Terjemahan</h1> <p>(Hamba-hambaKu) yang membaca kandungan Kitab Suci; (3)</p>`,
      },
      {
        ayat: "4",
        src: "/ayat/As-Saffat-4.png",
        translation: `<h1>Terjemahan</h1> <p>(Sumpah demi sumpah) sesungguhnya Tuhan kamu hanyalah Satu - (4)</p>`,
      },
      {
        ayat: "5",
        src: "/ayat/As-Saffat-5.png",
        translation: `<h1>Terjemahan</h1> <p>Tuhan (yang mencipta serta mentadbirkan) langit dan bumi dan segala yang ada di antara keduanya, dan Tuhan (yang mengatur) tempat-tempat terbit matahari. (5)</p>`,
      },
      {
        ayat: "6",
        src: "/ayat/As-Saffat-6.png",
        translation: `<h1>Terjemahan</h1> <p>Sesungguhnya Kami telah menghiasi langit yang dekat (pada penglihatan penduduk bumi) dengan hiasan bintang-bintang. (6)</p>`,
      },
      {
        ayat: "7",
        src: "/ayat/As-Saffat-7.png",
        translation: `<h1>Terjemahan</h1> <p>Dan (Kami pelihara urusan langit itu) dengan serapi-rapi kawalan dari (masuk campur) tiap-tiap Syaitan yang derhaka; (7)</p>`,
      },
      {
        ayat: "8",
        src: "/ayat/As-Saffat-8.png",
        translation: `<h1>Terjemahan</h1> <p>(Dengan itu) mereka tidak dapat memasang telinga mendengar (percakapan malaikat) penduduk langit, dan mereka pula direjam (dengan api) dari segala arah dan penjuru, (8)</p>`,
      },
      {
        ayat: "9",
        src: "/ayat/As-Saffat-9.png",
        translation: `<h1>Terjemahan</h1> <p>Untuk mengusir mereka; dan mereka pula beroleh azab seksa yang tidak putus-putus. (9)</p>`,
      },
      {
        ayat: "10",
        src: "/ayat/As-Saffat-10.png",
        translation: `<h1>Terjemahan</h1> <p>Kecuali sesiapa di antara Syaitan-syaitan itu yang curi mendengar mana-mana percakapan (malaikat), maka ia diburu dan diikuti (dengan rejaman) api yang menjulang lagi menembusi. (10)</p>`,
      },
    ],
  },
  {
    chapter_id: 59,
    surahName: "Al-Hasyr",
    arabic_surah_name: "الحشر",
    content: [
      {
        ayat: "21-24",
        src: "/ayat/Al-Hasyr.png",
        translation: `<h1>Terjemahan</h1>

  <li>Sekiranya Kami turunkan Al-Quran ini ke atas sebuah gunung, nescaya engkau melihat gunung itu khusyuk serta pecah belah kerana takut kepada Allah. Dan (ingatlah), misal-misal perbandingan ini Kami kemukakan kepada umat manusia, supaya mereka memikirkannya. (21)</li>

  <li>Dia lah Allah, yang tidak ada Tuhan melainkan Dia; Yang Mengetahui perkara yang ghaib dan yang nyata; Dia lah Yang Maha Pemurah, lagi Maha Mengasihani. (22) </li>

  <li>Dia lah Allah, yang tidak ada Tuhan melainkan Dia; Yang Menguasai (sekalian alam); Yang Maha Suci; Yang Maha Selamat Sejahtera (dari segala kekurangan); Yang Maha Melimpahkan Keamanan; Yang Maha Pengawal serta Pengawas; Yang Maha Kuasa; Yang Maha Kuat (menundukkan segala-galanya); Yang Melengkapi segala KebesaranNya. Maha Suci Allah dari segala yang mereka sekutukan denganNya. (23)</li>

  <li>Dia lah Allah, Yang Menciptakan sekalian makhluk; Yang Mengadakan (dari tiada kepada ada); Yang Membentuk rupa (makhluk-makhlukNya menurut yang dikehendakiNya); bagiNyalah nama-nama yang sebaik-baiknya dan semulia-mulianya; bertasbih kepadaNya segala yang ada di langit dan di bumi; dan Dia lah Yang tiada bandingNya, lagi Maha Bijaksana. (24)</li>
`,
      },
    ],
  },
  {
    chapter_id: 72,
    surahName: "Al-Jinn",
    arabic_surah_name: "الجن",
    content: [
      {
        ayat: "1-4",
        src: "/ayat/Al-Jinn.png",
        translation: `<h1>Terjemahan</h1> <li>Katakanlah (wahai Muhammad): "Telah diwahyukan kepadaku, bahawa sesungguhnya: satu rombongan jin telah mendengar (Al-Quran yang aku bacakan), lalu mereka (menyampaikan hal itu kepada kaumnya dengan) berkata: "Sesungguhnya kami telah mendengar Al-Quran (sebuah Kitab Suci) yang susunannya dan kandungannya sungguh menakjubkan!" (1)</li> <li>Kitab yang memberi panduan ke jalan yang betul, lalu kami beriman kepadanya, dan kami tidak sekali-kali akan mempersekutukan sesuatu makhluk dengan Tuhan kami. (2)</li> <li>Dan (ketahuilah wahai kaum kami!) Bahawa sesungguhnya: tertinggilah kebesaran dan keagungan Tuhan kita daripada beristeri atau beranak. (3)</li> <li>Dan (dengan ajaran Al-Quran nyatalah) bahawa sesungguhnya: (ketua) yang kurang akal pertimbangannya dari kalangan kita telah mengatakan terhadap Allah kata-kata yang melampaui kebenaran. (4)</li>

        `,
      },
    ],
  },
  {
    chapter_id: 112,
    surahName: "Al-Ikhlas",
    arabic_surah_name: "الْإِخْلَاص",
    content: [
      {
        ayat: "1-4",
        src: "/ayat/Al-Ikhlas.png",
        translation: `<h1>Terjemahan</h1>

  <li>Katakanlah (wahai Muhammad): "(Tuhanku) ialah Allah Yang Maha Esa; (1)</li>

  <li>Allah Yang menjadi tumpuan sekalian makhluk untuk memohon sebarang hajat; (2)</li>

  <li>Ia tiada beranak, dan Ia pula tidak diperanakkan; (3)</li>

  <li>"Dan tidak ada sesiapapun yang serupa denganNya". (4)</li>
`,
      },
    ],
  },
  {
    chapter_id: 113,
    surahName: "Al-Falaq",
    arabic_surah_name: "اَلْفَلَق",
    content: [
      {
        ayat: "1-5",
        src: "/ayat/Al-Falaq.png",
        translation: `<h1>Terjemahan</h1>

  <li>Katakanlah (wahai Muhammad); "Aku berlindung kepada (Allah) Tuhan yang menciptakan sekalian makhluk, (1)</li>

  <li>Dari bencana makhluk-makhluk yang Ia ciptakan; (2)</li>

  <li>Dan dari bahaya gelap apabila ia masuk; (3)</li>

  <li>Dan dari kejahatan makhluk-makhluk yang menghembus-hembus pada simpulan-simpulan (dan ikatan-ikatan);. (4)</li>

  <li>"Dan dari kejahatan orang yang dengki apabila ia melakukan dengkinya". (5)</li>
  `,
      },
    ],
  },
  {
    chapter_id: 114,
    surahName: "An-Nas",
    arabic_surah_name: "الناس",
    content: [
      {
        ayat: "1-6",
        src: "/ayat/An-Nas.png",
        translation: `<h1>Terjemahan</h1>

  <li>Katakanlah (wahai Muhammad): "Aku berlindung kepada (Allah) Pemulihara sekalian manusia." (1)</li>

  <li>Yang Menguasai sekalian manusia, (2)</li>

  <li>Tuhan yang berhak disembah oleh sekalian manusia, (3)</li>

  <li>Dari kejahatan pembisik penghasut yang timbul tenggelam, - (4)</li>

  <li>Yang melemparkan bisikan dan hasutannya ke dalam hati manusia, -. (5)</li>

  <li>"(Iaitu pembisik dan penghasut) dari kalangan jin dan manusia". (6)</li>
  `,
      },
    ],
  },
];
