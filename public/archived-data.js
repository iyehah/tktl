// Presidency election for 2025, candidates data and users

const candidates = [
  {
    "id" : 1,
    "Name": "محمد عبد الرحمن محمد",
    "Description": "محمد عبد الرحمن محمد",
    "photoUrl": "https://wiiqegsifopkmdadikdn.supabase.co/storage/v1/object/sign/tktl/tktl/1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0a3RsL3RrdGwvMS5qcGciLCJpYXQiOjE3MzQwMjE5ODMsImV4cCI6MTc2NTU1Nzk4M30.1YZHbnKZAX1c85LjP0N4vB7HvEIvbXyQG4ZwKC5rZ-I&t=2024-12-12T16%3A46%3A29.468Z",
    "Votes": 0
  },
  {
    "id" : 2,
    "Name": "محمد فال محمد عبدالله خطري",
    "Votes": 0,
    "photoUrl": "https://wiiqegsifopkmdadikdn.supabase.co/storage/v1/object/sign/tktl/tktl/2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0a3RsL3RrdGwvMi5qcGciLCJpYXQiOjE3MzQwMjIwMDcsImV4cCI6MTc2NTU1ODAwN30.00GZdM9PRmuJZ0DWlzuvR9VBw6rXMNqWpr4njuktG7A&t=2024-12-12T16%3A46%3A52.711Z",
    "Description": "محمد فال محمد عبدالله خطري"
  },
  {
    "id" : 3,
    "Name": "محمد المصطفى الشيخ السجاد",
    "photoUrl": "https://wiiqegsifopkmdadikdn.supabase.co/storage/v1/object/sign/tktl/tktl/3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0a3RsL3RrdGwvMy5qcGciLCJpYXQiOjE3MzQwMjIwMjUsImV4cCI6MTc2NTU1ODAyNX0.VRAwSMdF1BtW2W24DLKckSPmeVbuYbC8Tl17sTr9X1E&t=2024-12-12T16%3A47%3A11.146Z",
    "Description": "محمد المصطفى الشيخ السجاد",
    "Votes": 0
  },
  {
    "id" : 4,
    "Name": "حيادي",
    "Description": "حيادي",
    "photoUrl": "https://wiiqegsifopkmdadikdn.supabase.co/storage/v1/object/sign/tktl/tktl/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0a3RsL3RrdGwvbG9nby5wbmciLCJpYXQiOjE3MzQxMDMxMDEsImV4cCI6MTc2NTYzOTEwMX0.6UHznR12gGCZ8hiv7Xrrhm2wYV-bBEwE53J6dSwHr8c&t=2024-12-13T15%3A18%3A27.620Z",
    "Votes": 0
  }
]

const users = [
  {
      "id": "5mUKSaew5YfCHyg2aqi0",
      "Active": true,
      "Password": "46593269",
      "Candidate": "",
      "Number": 44586293,
      "Name": "محمد / شيخنا",
      "Voted": false
  },
  {
      "id": "A3G8tVswxCbCFuLmvpA1",
      "Candidate": "",
      "Password": "Kh4684",
      "Active": true,
      "Name": "أم كلثوم /حامدينو الشيخ",
      "Voted": false,
      "Number": 46846116
  },
  {
      "id": "DWt4XuHw2QZGgUHuuB2t",
      "Candidate": "",
      "Name": "اسلمو / عبد القادر",
      "Active": true,
      "Password": "ii42140384ss",
      "Voted": false,
      "Number": 26180616
  },
  {
      "id": "F4RRcvZ4QIrtJkrfvqdK",
      "Password": "b46469219",
      "Voted": false,
      "Active": true,
      "Name": "سيدي / محمد الامين",
      "Number": 48330106,
      "Candidate": ""
  },
  {
      "id": "K1KE0cHN9tNUKm4FTm98",
      "Candidate": "",
      "Voted": false,
      "Active": true,
      "Name": "الحسين / محمد فال / افاه",
      "Password": "46509019",
      "Number": 48299666
  },
  {
      "id": "Pq8MgEkkpDoRm0kSejXW",
      "Name": "ابوبكر / جدو",
      "Number": 43480180,
      "Password": "43480180",
      "Active": true,
      "Candidate": "",
      "Voted": false
  },
  {
      "id": "QGEoPB02JyG6KOsGnSBJ",
      "Active": true,
      "Password": "Mounir5258@",
      "Candidate": "",
      "Number": 31797975,
      "Name": "الشيخ / المنير",
      "Voted": false
  },
  {
      "id": "QwpRl30wtqYZ0zQAEsMi",
      "Active": true,
      "Number": 49740427,
      "Voted": false,
      "Candidate": "",
      "Name": "مونه / محفوظ سافرة",
      "Password": "123456"
  },
  {
      "id": "R65Uww5wKdY1voP6qBW3",
      "Name": "حم /التار",
      "Password": "محمد1953",
      "Number": 42525044,
      "Voted": false,
      "Candidate": "",
      "Active": true
  },
  {
      "id": "R77oj8M2Pl5wPV2XQrWl",
      "Active": true,
      "Password": "Ronaldo cr7",
      "Voted": false,
      "Number": 31268384,
      "Name": "اباه / سيدي / حدمين",
      "Candidate": ""
  },
  {
      "id": "UxRh1VoQBzpqR0lUcRj3",
      "Candidate": "",
      "Name": "الشيخ / ديدي",
      "Number": 43282430,
      "Password": "49777711",
      "Voted": false,
      "Active": true
  },
  {
      "id": "X5CzYgkM4aUZI9Lp55mM",
      "Number": 43292378,
      "Active": true,
      "Candidate": "",
      "Name": "محفوظ /محمد يسلم محمد العبد",
      "Voted": false,
      "Password": "1a2b3c4d"
  },
  {
      "id": "XVEotBQHmDRdcAjOqygK",
      "Name": "محمد الأمين /اسويلم",
      "Number": 48733773,
      "Password": "68ifFH23",
      "Active": true,
      "Voted": false,
      "Candidate": ""
  },
  {
      "id": "fHXChgvkFPsdwko8Dp6H",
      "Number": 41373101,
      "Candidate": "",
      "Password": "figZi1-cobvoh-cosmys",
      "Name": "اندوروها /عبيد",
      "Voted": false,
      "Active": true
  },
  {
      "id": "fSBpYPZjeaAhY5yHTUFY",
      "Candidate": "",
      "Name": "المرابط /ابسيد",
      "Password": "sidi4417",
      "Voted": false,
      "Active": true,
      "Number": 31409293
  },
  {
      "id": "gJhkYJFe8nL7ZC7oowty",
      "Password": "hii9hjhg8vb",
      "Number": 41721917,
      "Active": true,
      "Name": "الطالب / ابيبكر",
      "Voted": false,
      "Candidate": ""
  },
  {
      "id": "lu8SUlnvbMN9GxsV600N",
      "Voted": false,
      "Number": 48684210,
      "Name": "التجاني /احمد",
      "Password": "tijani",
      "Active": true,
      "Candidate": ""
  },
  {
      "id": "s0OzXjcwZX8lrCwbs94v",
      "Number": 49467299,
      "Active": true,
      "Voted": false,
      "Candidate": "",
      "Name": "عبد الرحمان /حمن",
      "Password": "Abdou Abdou"
  },
  {
      "id": "sTIZCc4jrsug442ikxVW",
      "Number": 30633441,
      "Active": true,
      "Voted": false,
      "Password": "Lhbda48jA42DdVQ",
      "Candidate": "",
      "Name": "اسامة / محمد فال صدف"
  },
  {
      "id": "ucsDP9DXtifBFrjiso5p",
      "Voted": false,
      "Number": 47615117,
      "Name": "عزيز /غالي امود",
      "Password": "48221117",
      "Candidate": "",
      "Active": true
  },
  {
      "id": "1HNEoci2hvgNE4xFq1jH",
      "Voted": true,
      "Active": true,
      "Number": 42867208,
      "Password": "4286kh",
      "Name": "الشيخ /حامدينو /الشيخ",
      "Candidate": "محمد عبد الرحمن محمد"
  },
  {
      "id": "1tBFqKNVV2PMoD70IVgt",
      "Active": true,
      "Name": "الحسن / احمد / ابسيد",
      "Number": 49142257,
      "Voted": true,
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Password": "bsdhassen"
  },
  {
      "id": "2ApciFQUWROT8WCoiuSR",
      "Active": true,
      "Candidate": "محمد عبد الرحمن محمد",
      "Password": "44122326",
      "Name": "الحضرامي / المصطفي",
      "Voted": true,
      "Number": 49548691
  },
  {
      "id": "3L0ymaxK7gFsQSdU5LET",
      "Name": "سيدي محمد / ابسيد",
      "Password": "Sidimed27118050",
      "Voted": true,
      "Active": true,
      "Candidate": "محمد عبد الرحمن محمد",
      "Number": 27118050
  },
  {
      "id": "3VyPLRySyltBRLvVHPiW",
      "Number": 42115187,
      "Password": "Kh41715464",
      "Name": "خطري /السالك محفوظ",
      "Active": true,
      "Voted": true,
      "Candidate": "محمد فال محمد عبدالله خطري"
  },
  {
      "id": "4IVSq2tOnQ2tfuQvilK6",
      "Voted": true,
      "Password": "7aMMaDDe%",
      "Active": true,
      "Name": "سيدي محمد / باب",
      "Candidate": "محمد المصطفى الشيخ السجاد",
      "Number": 42311132
  },
  {
      "id": "4zDOyMWiPZthguTMMXQt",
      "Candidate": "محمد عبد الرحمن محمد",
      "Active": true,
      "Name": "الطالب جدو/ يب",
      "Password": "410940",
      "Number": 41094031,
      "Voted": true
  },
  {
      "id": "57ndUncqKNNcAJs1M9LU",
      "Voted": true,
      "Candidate": "محمد عبد الرحمن محمد",
      "Active": true,
      "Password": "44224661",
      "Number": 2676368888,
      "Name": "يعله / لمرابط / بدي"
  },
  {
      "id": "7IhQwajwzO04evA7zuiP",
      "Password": "44158828",
      "Voted": true,
      "Active": true,
      "Candidate": "محمد عبد الرحمن محمد",
      "Name": "محفوظ السالم /المين فال",
      "Number": 46937660
  },
  {
      "id": "8VjM41D0OCBo9vxmnlgn",
      "Password": "مريم56",
      "Voted": true,
      "Active": true,
      "Number": 43282326,
      "Name": "مريم / الذهبي",
      "Candidate": "محمد عبد الرحمن محمد"
  },
  {
      "id": "8iYdB8AfyTxNxrg6qGEc",
      "Number": 48886153,
      "Active": true,
      "Password": "467150",
      "Candidate": "محمد عبد الرحمن محمد",
      "Voted": true,
      "Name": "القطب /محمد محمود إمين"
  },
  {
      "id": "8rJai5H0rgQzWlVh3kDc",
      "Password": "lmrab6",
      "Voted": true,
      "Number": 44330856,
      "Candidate": "محمد عبد الرحمن محمد",
      "Name": "سيد الحسن /محمد المختار الحسن",
      "Active": true
  },
  {
      "id": "9eY1zgjAem2dxjaaGgMd",
      "Name": "سهام الدد",
      "Voted": true,
      "Candidate": "محمد عبد الرحمن محمد",
      "Active": true,
      "Password": "20031933",
      "Number": 30483293
  },
  {
      "id": "AIo8s48vISlmFfz3oOxZ",
      "Number": 43242886,
      "Voted": true,
      "Password": "1q2w3e4r",
      "Candidate": "محمد عبد الرحمن محمد",
      "Active": true,
      "Name": "خالد / احمد قاسم"
  },
  {
      "id": "AkKblinTq9vuJDBTxruF",
      "Password": "46518380",
      "Active": true,
      "Number": 36772163,
      "Name": "امنة / اسلم / حمادي",
      "Voted": true,
      "Candidate": "محمد عبد الرحمن محمد"
  },
  {
      "id": "B0LQXFh5I9lnSglYOGrN",
      "Voted": true,
      "Active": true,
      "Number": 42532080,
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Name": "مريم /ادي خطري",
      "Password": "48333021"
  },
  {
      "id": "BP5FRTAS4nwEVJf3aERl",
      "Password": "44082927",
      "Name": "الشيخ التيجاني / محمد",
      "Active": true,
      "Candidate": "محمد عبد الرحمن محمد",
      "Voted": true,
      "Number": 44082927
  },
  {
      "id": "Bx5g2zfYTZtqeJRsQ87G",
      "Voted": true,
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Active": true,
      "Number": 26412941,
      "Name": "محمد /السالك اعمر",
      "Password": "264129"
  },
  {
      "id": "CadvqLKlT2urqh2vcz7j",
      "Name": "خدي / كابر",
      "Active": true,
      "Voted": true,
      "Number": 22341929,
      "Candidate": "محمد عبد الرحمن محمد",
      "Password": "12345678"
  },
  {
      "id": "CmwBZHtOHGmk0ivEcLXX",
      "Number": 38567680,
      "Voted": true,
      "Name": "سيد السدات / محمد لحبيب",
      "Active": true,
      "Candidate": "محمد عبد الرحمن محمد",
      "Password": "sedatte38"
  },
  {
      "id": "Cyd6JIfbEckpTD8dRK7K",
      "Number": 46177173,
      "Candidate": "محمد عبد الرحمن محمد",
      "Password": "784177",
      "Voted": true,
      "Active": true,
      "Name": "طلحة /عبد الرحمان"
  },
  {
      "id": "DBcYPrdfBeZ1blIlpgSE",
      "Voted": true,
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Active": true,
      "Number": 41095153,
      "Name": "الدده /محمد شيخن",
      "Password": "46472757"
  },
  {
      "id": "E2k14rjR5LJYVURku7fm",
      "Name": "الشيخ /صدف",
      "Password": "48201058",
      "Active": true,
      "Voted": true,
      "Candidate": "محمد عبد الرحمن محمد",
      "Number": 41565776
  },
  {
      "id": "EBfFi3guzmLCRgMVRLxJ",
      "Active": true,
      "Password": "azertyui",
      "Number": 49822614,
      "Name": "سيد الحسن/احمدان",
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Voted": true
  },
  {
      "id": "Ed5zz8rJxcGQXVE7KkNO",
      "Number": 41810347,
      "Candidate": "محمد عبد الرحمن محمد",
      "Name": "امال / الدده",
      "Voted": true,
      "Password": "9484emal",
      "Active": true
  },
  {
      "id": "Eqe6nEkYHu7vvyrpnI7U",
      "Password": "kh47450255",
      "Active": true,
      "Number": 48290503,
      "Name": "الخليل / النامو",
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Voted": true
  },
  {
      "id": "F3PQDOLhF55VdvDzkIzS",
      "Active": true,
      "Name": "محمد عبد الله / بشيب",
      "Number": 41688699,
      "Password": "467117",
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Voted": true
  },
  {
      "id": "GJmjmxWYnSpa1Ww1d8vh",
      "Number": 2676788516,
      "Password": "46362665",
      "Active": true,
      "Name": "الشيخ /محمدي/الطالب احمادو",
      "Voted": true,
      "Candidate": "محمد فال محمد عبدالله خطري"
  },
  {
      "id": "GeWqNpMnsuPnZtUvvEqU",
      "Name": "الداه /أحمد /مندح",
      "Password": "dh46679737",
      "Active": true,
      "Candidate": "محمد عبد الرحمن محمد",
      "Voted": true,
      "Number": 46679737
  },
  {
      "id": "HWTetYiMfNnfGcv2aPWD",
      "Candidate": "محمد عبد الرحمن محمد",
      "Active": true,
      "Password": "22341929",
      "Voted": true,
      "Number": 46594244,
      "Name": "أحمدو / بابه"
  },
  {
      "id": "IJfTDxmTHp2Atn5k3Nyg",
      "Name": "ميمونة / الشيخاني",
      "Number": 37611161,
      "Password": "43687979",
      "Voted": true,
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Active": true
  },
  {
      "id": "IR14T7FtdfHnxQfqabkO",
      "Active": true,
      "Voted": true,
      "Name": "عزيزة / احمد / ابسيد",
      "Candidate": "محمد عبد الرحمن محمد",
      "Password": "123456",
      "Number": 44254183
  },
  {
      "id": "JC67zrAd1NQzv6LNG2rm",
      "Voted": true,
      "Password": "mamavatim",
      "Name": "محمد الامين / باب يسلم",
      "Number": 44197367,
      "Active": true,
      "Candidate": "محمد فال محمد عبدالله خطري"
  },
  {
      "id": "JePR2ogJSIFX8Sff0cBv",
      "Name": "الداه / حمادي",
      "Password": "47484571",
      "Active": true,
      "Number": 41619693,
      "Voted": true,
      "Candidate": "محمد عبد الرحمن محمد"
  },
  {
      "id": "JrxHNdfxzEoehb5jgqm9",
      "Name": "بلال / ابراهيم",
      "Password": "cvcvcvcv",
      "Candidate": "محمد عبد الرحمن محمد",
      "Active": true,
      "Voted": true,
      "Number": 41888278
  },
  {
      "id": "JxAMIAAoj67IbqgJshfm",
      "Password": "493405",
      "Number": 49362942,
      "Name": "مريم مجدي / البخاري / القاظي",
      "Voted": true,
      "Active": true,
      "Candidate": "محمد فال محمد عبدالله خطري"
  },
  {
      "id": "JyQoWdh8QRYw60oCSJ3L",
      "Password": "m41939895",
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Active": true,
      "Voted": true,
      "Number": 41939895,
      "Name": "بوه /ولد جيوان"
  },
  {
      "id": "JzIkleWnBsna9x077mg2",
      "Password": "44038414",
      "Name": "سيف الدين /عبد لله",
      "Voted": true,
      "Number": 48572777,
      "Active": true,
      "Candidate": "محمد عبد الرحمن محمد"
  },
  {
      "id": "LgMSo0iaxEQmQvoQ7lQB",
      "Name": "محمد / لمرابط",
      "Active": true,
      "Voted": true,
      "Password": "500000",
      "Number": 48570601,
      "Candidate": "محمد عبد الرحمن محمد"
  },
  {
      "id": "M30CRaXOZhlccLn37LAH",
      "Name": "خطري /أحمد ابسيد",
      "Password": "46746075",
      "Number": 43575809,
      "Candidate": "محمد عبد الرحمن محمد",
      "Active": true,
      "Voted": true
  },
  {
      "id": "MI0WWTjwUSEl4d4nBfe5",
      "Active": true,
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Name": "محمد لمام /الطالب احمادو",
      "Number": 42301905,
      "Password": "43000038",
      "Voted": true
  },
  {
      "id": "Nb6ytl7ck6Ezro1pMYGF",
      "Active": true,
      "Number": 48209789,
      "Voted": true,
      "Candidate": "محمد عبد الرحمن محمد",
      "Name": "المصطفي /ادومُ بدي",
      "Password": "48209789"
  },
  {
      "id": "NthWp8c5CJEZ69Yk1Sd3",
      "Password": "07090709",
      "Candidate": "محمد عبد الرحمن محمد",
      "Active": true,
      "Name": "بلاهي / ابراهيم",
      "Voted": true,
      "Number": 43752756
  },
  {
      "id": "OnU9LIBbo5DXFoeUnITn",
      "Name": "مامه / سيدينا / العيل",
      "Candidate": "محمد عبد الرحمن محمد",
      "Voted": true,
      "Number": 48758978,
      "Password": "123456",
      "Active": true
  },
  {
      "id": "P0hH1WEQ9Nla2Hyukpdi",
      "Number": 44423192,
      "Candidate": "محمد عبد الرحمن محمد",
      "Voted": true,
      "Password": "444231",
      "Active": true,
      "Name": "محمد الأمين /ولد أحمد ابسيد"
  },
  {
      "id": "P8b9Xh7Pa6ha0IaYoj8T",
      "Password": "محفوظ محفوظ",
      "Number": 42756353,
      "Active": true,
      "Voted": true,
      "Name": "محفوظ / المصطفى /امحمد",
      "Candidate": "محمد فال محمد عبدالله خطري"
  },
  {
      "id": "PMNwt39166Ls6So9rQkA",
      "Number": 44082926,
      "Active": true,
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Name": "باي / الشيخاني",
      "Voted": true,
      "Password": "44082926"
  },
  {
      "id": "PUTfx16ZAFaKplnRHxiC",
      "Number": 7176175823,
      "Password": "Aa47742861",
      "Voted": true,
      "Name": "عبدالله / محمد لحبيب",
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Active": true
  },
  {
      "id": "Plv9AfBwW3tm0AAoLahe",
      "Number": 49755463,
      "Active": true,
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Password": "49755463",
      "Name": "عشية /يسلم /احمدان",
      "Voted": true
  },
  {
      "id": "PnKtkGCkk3MK3Oblk15p",
      "Number": 48066417,
      "Password": "316861",
      "Active": true,
      "Voted": true,
      "Name": "المنير / البح",
      "Candidate": "محمد المصطفى الشيخ السجاد"
  },
  {
      "id": "QKgrmOyhPhCFrBsoJQyf",
      "Number": 42113599,
      "Candidate": "محمد عبد الرحمن محمد",
      "Voted": true,
      "Password": "44941609",
      "Active": true,
      "Name": "سيدي محمد / النامو"
  },
  {
      "id": "QKlOrza4i21rRPQhyIVY",
      "Password": "49579810",
      "Active": true,
      "Voted": true,
      "Name": "رجاء / محمد احمد",
      "Candidate": "محمد عبد الرحمن محمد",
      "Number": 49579810
  },
  {
      "id": "R3lBcquLARcLO1MLJcAJ",
      "Number": 49609694,
      "Password": "46923807",
      "Active": true,
      "Voted": true,
      "Name": "باب / اسلمو",
      "Candidate": "محمد فال محمد عبدالله خطري"
  },
  {
      "id": "RVK6yKiBEnYSaX2kspdc",
      "Active": true,
      "Password": "22095073",
      "Candidate": "محمد عبد الرحمن محمد",
      "Name": "محمدو /حمادي",
      "Number": 47615288,
      "Voted": true
  },
  {
      "id": "RnpClm3c1ZBDrTY4w7d7",
      "Number": 49297587,
      "Active": true,
      "Name": "يايب/ آبه",
      "Voted": true,
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Password": "49297587"
  },
  {
      "id": "S1Q4rcP7FrqbIbsDEZ7G",
      "Candidate": "حيادي",
      "Number": 46455275,
      "Voted": true,
      "Active": true,
      "Password": "11022019",
      "Name": "الشيخ / خطري"
  },
  {
      "id": "SLGAEr0pH1BtbtVqvxvc",
      "Password": "26838761",
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Name": "مختور /أجيون",
      "Number": 26838761,
      "Voted": true,
      "Active": true
  },
  {
      "id": "T5IfUsfHI9CWANrDjmvC",
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Active": true,
      "Voted": true,
      "Name": "اميمة /التار أحمد محم",
      "Password": "Meimatt",
      "Number": 48403515
  },
  {
      "id": "TcRHhXmATRhsvu6OYiGP",
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Number": 42687717,
      "Active": true,
      "Voted": true,
      "Password": "497766",
      "Name": "سيد الحسن / السخاوي"
  },
  {
      "id": "Tpw6HYiSOwA54eRA0tSY",
      "Active": true,
      "Password": "123456",
      "Candidate": "محمد المصطفى الشيخ السجاد",
      "Voted": true,
      "Number": 41139372,
      "Name": "اميمه / محمد صالح"
  },
  {
      "id": "U9JqDMkrMokXl3Iu0CFQ",
      "Password": "46467884",
      "Number": 47989391,
      "Active": true,
      "Name": "توت / السخاوي",
      "Voted": true,
      "Candidate": "محمد فال محمد عبدالله خطري"
  },
  {
      "id": "UXwwHvKUtoQeAoy1mCNR",
      "Number": 48240477,
      "Name": "آمنة /حن /محمد احمد",
      "Candidate": "محمد عبد الرحمن محمد",
      "Active": true,
      "Password": "41704448",
      "Voted": true
  },
  {
      "id": "UeNpLYSnKLJhWmHzqPJh",
      "Password": "46776711",
      "Active": true,
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Number": 36634440,
      "Name": "أمال/ مختور يحي",
      "Voted": true
  },
  {
      "id": "V1AcB0E9gRG8x8vkuOOQ",
      "Voted": true,
      "Name": "محمد زيد /محمد الرحمن الشيخ",
      "Password": "44242678",
      "Active": true,
      "Number": 43610665,
      "Candidate": "محمد المصطفى الشيخ السجاد"
  },
  {
      "id": "VK0NFn3JtC5SI7UCpTbo",
      "Number": 48613878,
      "Name": "سيد الحسن /الدده",
      "Candidate": "محمد عبد الرحمن محمد",
      "Password": "SDH2004",
      "Active": true,
      "Voted": true
  },
  {
      "id": "XUjPVD2ukx7DevYKYM5M",
      "Password": "466253",
      "Candidate": "محمد عبد الرحمن محمد",
      "Voted": true,
      "Name": "اخوالو / احمد",
      "Number": 46625356,
      "Active": true
  },
  {
      "id": "Xe3YefEq7kNUBtkeaG7a",
      "Password": "37707027",
      "Active": true,
      "Voted": true,
      "Name": "ابتسام/ النينَ حدمين",
      "Number": 37707027,
      "Candidate": "محمد عبد الرحمن محمد"
  },
  {
      "id": "XfedjklRohxtMUYtOsGn",
      "Candidate": "محمد عبد الرحمن محمد",
      "Password": "43182319",
      "Active": true,
      "Number": 43182319,
      "Voted": true,
      "Name": "اباه /محمد الأمين سلمان"
  },
  {
      "id": "XkQcxHS8NIM5J4Q0lB8a",
      "Active": true,
      "Candidate": "محمد عبد الرحمن محمد",
      "Number": 44529054,
      "Voted": true,
      "Name": "خدجة /يب /خطري",
      "Password": "12345678"
  },
  {
      "id": "Y3uUc6tQDRVpVgC1wJbD",
      "Active": true,
      "Voted": true,
      "Password": "46508834",
      "Candidate": "محمد عبد الرحمن محمد",
      "Name": "احمد سالم / باب",
      "Number": 49660518
  },
  {
      "id": "YV8jURyUa1hVyqvzNIcz",
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Number": 49747069,
      "Voted": true,
      "Active": true,
      "Password": "valla7069",
      "Name": "فاله/ محمدي الطالب احمادو"
  },
  {
      "id": "YrSxGOu4656jDpCrPHVv",
      "Name": "إيهاه / باب ولد الحسن",
      "Number": 43000038,
      "Active": true,
      "Password": "iyehah43",
      "Voted": true,
      "Candidate": "محمد فال محمد عبدالله خطري"
  },
  {
      "id": "ZFanQFsXoek97I9VrFka",
      "Name": "سعد الدين /أحمد /ابسيد",
      "Password": "Saad2002$",
      "Voted": true,
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Number": 42290606,
      "Active": true
  },
  {
      "id": "ZIgKv6aZVlNkBsoTUXFv",
      "Number": 43789861,
      "Voted": true,
      "Name": "فاطمة تقلة /يب خطري",
      "Candidate": "محمد عبد الرحمن محمد",
      "Password": "123444",
      "Active": true
  },
  {
      "id": "ZWds6cvr6IlShzNhhBlY",
      "Active": true,
      "Name": "محمد المهدي/خطري",
      "Voted": true,
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Number": 49528464,
      "Password": "mehdi99"
  },
  {
      "id": "b0NFqKXMaDBCe26Vi2Th",
      "Name": "محمد /اباه امخيطير",
      "Active": true,
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Password": "411213",
      "Number": 41459340,
      "Voted": true
  },
  {
      "id": "b1VrL0GhUei6scEPkS9U",
      "Number": 26863191,
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Active": true,
      "Voted": true,
      "Name": "سيدي محمد /أجيون",
      "Password": "oui ou non"
  },
  {
      "id": "cLyDHNULsWys7scgvNHH",
      "Candidate": "محمد عبد الرحمن محمد",
      "Voted": true,
      "Name": "يحيان / الناجي",
      "Number": 51527438,
      "Password": "sofTov-zahcyc-neqde2",
      "Active": true
  },
  {
      "id": "cUGEVyejRFdJhvcPhTNl",
      "Voted": true,
      "Number": 14452384304,
      "Password": "Aa49882048",
      "Name": "عبد الرحمن / صدف",
      "Active": true,
      "Candidate": "محمد عبد الرحمن محمد"
  },
  {
      "id": "ck7dFKH85DxZnbI8mgsT",
      "Active": true,
      "Password": "13122024",
      "Voted": true,
      "Candidate": "محمد عبد الرحمن محمد",
      "Number": 48959259,
      "Name": "يسلم ولد احمد"
  },
  {
      "id": "damx96ibi4U15EEVzDx5",
      "Active": true,
      "Password": "43311837yb",
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Name": "يعقوب /سيد ابراهيم",
      "Number": 43311837,
      "Voted": true
  },
  {
      "id": "eybJ46V6Iw8UDG6ho3pI",
      "Password": "469987",
      "Name": "الشيخ /سالك فال",
      "Number": 46126805,
      "Voted": true,
      "Active": true,
      "Candidate": "محمد عبد الرحمن محمد"
  },
  {
      "id": "fAz1v09Zb3QTCrVNxO5a",
      "Voted": true,
      "Number": 32054249,
      "Active": true,
      "Password": "44888885bb",
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Name": "زينبُ /سيد احمد محمد بيب"
  },
  {
      "id": "fWleFYXzMS7nf4qUCtIc",
      "Number": 49163967,
      "Active": true,
      "Candidate": "محمد عبد الرحمن محمد",
      "Password": "49163967",
      "Voted": true,
      "Name": "الشيخ / محمد / عشور"
  },
  {
      "id": "fYHqCedTEbpAdF5K5R74",
      "Number": 49152080,
      "Candidate": "محمد عبد الرحمن محمد",
      "Active": true,
      "Name": "محمد / النين / خطري",
      "Password": "22034378",
      "Voted": true
  },
  {
      "id": "g6Vkkc4OZN1RulK4bDML",
      "Voted": true,
      "Name": "المصطفي /السالم الناجي الطالب احمادو",
      "Password": "daha1994",
      "Number": 41893935,
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Active": true
  },
  {
      "id": "gGrgapbtq5nmoAdjQuzF",
      "Voted": true,
      "Candidate": "محمد عبد الرحمن محمد",
      "Password": "174733",
      "Active": true,
      "Name": "ابوبكر الصديق / زيني",
      "Number": 48315208
  },
  {
      "id": "gP16GUgYJUQEzTR8eyKu",
      "Candidate": "محمد عبد الرحمن محمد",
      "Number": 48637108,
      "Name": "ابراهيم الخليل / اباه",
      "Active": true,
      "Password": "جحخهعغفقثصض",
      "Voted": true
  },
  {
      "id": "gYuDXKghqjkdcSyYSgqk",
      "Name": "المصطفى / المنير",
      "Number": 552425176,
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Password": "3084657",
      "Active": true,
      "Voted": true
  },
  {
      "id": "gbzPJUP4ErIMVsx0mNkO",
      "Password": "الداه ولد محمدي",
      "Number": 49132204,
      "Name": "الداهَ /محمدي",
      "Active": true,
      "Candidate": "محمد عبد الرحمن محمد",
      "Voted": true
  },
  {
      "id": "gjF5v7C5HylWgPVgirda",
      "Password": "30032024",
      "Voted": true,
      "Active": true,
      "Number": 20092999,
      "Candidate": "محمد عبد الرحمن محمد",
      "Name": "النينه / محمدي / الطالب احمادو"
  },
  {
      "id": "h5PXKSGpsvzOvpORnGgx",
      "Voted": true,
      "Name": "محمد /ولد المقاري",
      "Candidate": "محمد عبد الرحمن محمد",
      "Active": true,
      "Password": "dabceg-nydwem-3bugkU",
      "Number": 32417343
  },
  {
      "id": "hQuIpb27b76aU5v0sJb9",
      "Password": "121212",
      "Active": true,
      "Name": "لمين / حدمين",
      "Number": 42925449,
      "Candidate": "محمد المصطفى الشيخ السجاد",
      "Voted": true
  },
  {
      "id": "hfrLP4ObqHmDzYvz4j0T",
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Voted": true,
      "Number": 43681240,
      "Active": true,
      "Name": "توت /سيدلحسن  زروق",
      "Password": "PTL12-16wk"
  },
  {
      "id": "i8ztb2LkWzwC6mx4XBUQ",
      "Voted": true,
      "Name": "خت /محمد الامين الحسن",
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Password": "48613878",
      "Active": true,
      "Number": 43848448
  },
  {
      "id": "jT2Rme1YsONcdf8Y75MJ",
      "Active": true,
      "Password": "Sd47286737",
      "Number": 5715960439,
      "Name": "سيدي عبد الله / امين",
      "Candidate": "محمد عبد الرحمن محمد",
      "Voted": true
  },
  {
      "id": "jTLGYkj2LSh3ghRkdjni",
      "Voted": true,
      "Name": "محمد عبد الناصر/ اسويلم",
      "Number": 48854665,
      "Active": true,
      "Candidate": "محمد عبد الرحمن محمد",
      "Password": "QQ48854665"
  },
  {
      "id": "kCVjJCT5X3HDFuVws2De",
      "Password": "9213735",
      "Name": "سيدلحسن/ ادوم/ حمامين",
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Number": 44872514,
      "Voted": true,
      "Active": true
  },
  {
      "id": "keGHdrXgMJNp7lmc6WCW",
      "Candidate": "محمد عبد الرحمن محمد",
      "Name": "خطري/ لمرابط سيدي",
      "Voted": true,
      "Active": true,
      "Number": 32750881,
      "Password": "275755"
  },
  {
      "id": "ktpG0kU775e8NIbTM6FK",
      "Number": 33395437,
      "Active": true,
      "Voted": true,
      "Name": "مريم / ماناه /باب",
      "Password": "@42311132@",
      "Candidate": "محمد المصطفى الشيخ السجاد"
  },
  {
      "id": "l087CvP4pDKr35FhJ1Fd",
      "Name": "آسية /محمد/ طالب",
      "Number": 47414917,
      "Voted": true,
      "Active": true,
      "Password": "433351",
      "Candidate": "محمد فال محمد عبدالله خطري"
  },
  {
      "id": "lWhIUkZKd0FKKebps4vd",
      "Voted": true,
      "Password": "47450255",
      "Number": 41951549,
      "Name": "مية /محمد عبد لله /النام",
      "Active": true,
      "Candidate": "محمد فال محمد عبدالله خطري"
  },
  {
      "id": "lYanR77qPKNBv78APQIs",
      "Number": 41044945,
      "Active": true,
      "Voted": true,
      "Name": "محمد فال / السالم / محفوظ",
      "Password": "m44556688m",
      "Candidate": "محمد عبد الرحمن محمد"
  },
  {
      "id": "mWRJY1mWnNNlwSKB28P7",
      "Voted": true,
      "Name": "خطري / الناجي / احمدان",
      "Password": "44ma52ma",
      "Active": true,
      "Number": 42748437,
      "Candidate": "محمد فال محمد عبدالله خطري"
  },
  {
      "id": "mpJc5U0Hk7qYixSqne8g",
      "Voted": true,
      "Name": "فاطمة / عبد القادر",
      "Number": 28693434,
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Password": "654321",
      "Active": true
  },
  {
      "id": "nAvxr22vSmt4V1C9tuq4",
      "Password": "223344",
      "Voted": true,
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Name": "الغالية / اسلمو / حدمين",
      "Active": true,
      "Number": 41539481
  },
  {
      "id": "nUWjt7D3UtGjlJSKBJnq",
      "Password": "0909090909",
      "Candidate": "محمد عبد الرحمن محمد",
      "Name": "الطالب /احمد ابسيد",
      "Active": true,
      "Voted": true,
      "Number": 41048502
  },
  {
      "id": "nhLc2B7e4Mi7H3yR9Xhh",
      "Candidate": "محمد عبد الرحمن محمد",
      "Name": "محمد الحسن/ الشيخ /محمد بيب",
      "Number": 43155750,
      "Active": true,
      "Voted": true,
      "Password": "5750aa"
  },
  {
      "id": "njcnMYhQ56A0wjV27xCS",
      "Voted": true,
      "Candidate": "محمد عبد الرحمن محمد",
      "Password": "42444838",
      "Active": true,
      "Name": "التيجانية /سيدي /حدمين",
      "Number": 20213459
  },
  {
      "id": "o4j2i1t98qGBGHZRtXK7",
      "Active": true,
      "Number": 31252511,
      "Password": "A31252511a",
      "Candidate": "محمد عبد الرحمن محمد",
      "Voted": true,
      "Name": "الشيخ /حمادي"
  },
  {
      "id": "pDDWsjjPfEGvnFvac1y3",
      "Voted": true,
      "Number": 42502142,
      "Name": "عبد الرحمن /إسلم سليمان",
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Password": "3bdo1234",
      "Active": true
  },
  {
      "id": "pph6bEFTx0RKJbDVLUfb",
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Password": "42121301",
      "Active": true,
      "Name": "سيد المختار /أحمد فال",
      "Voted": true,
      "Number": 44092926
  },
  {
      "id": "ppu1t7VDushenmvNxDYl",
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Number": 41441095,
      "Name": "الشيخ احمدو / الحسن",
      "Voted": true,
      "Password": "49616389",
      "Active": true
  },
  {
      "id": "qHOeQgaHk92V93Ub8DLc",
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Active": true,
      "Name": "محمد /الوالد أعمر",
      "Number": 48709391,
      "Voted": true,
      "Password": "306621"
  },
  {
      "id": "qQYCwC7QtgO5WW4vC9JW",
      "Active": true,
      "Voted": true,
      "Name": "سيدي المختار / اياي",
      "Number": 37181418,
      "Password": "37181418s",
      "Candidate": "محمد عبد الرحمن محمد"
  },
  {
      "id": "rA8T0oCDQs1GSsczkZSk",
      "Candidate": "محمد عبد الرحمن محمد",
      "Password": "340006",
      "Active": true,
      "Voted": true,
      "Name": "آمنة / حمادي",
      "Number": 34000692
  },
  {
      "id": "rxLnSkHAvMie63E6tY2M",
      "Candidate": "محمد عبد الرحمن محمد",
      "Name": "نوح / التيجاني",
      "Voted": true,
      "Password": "418182",
      "Active": true,
      "Number": 49780553
  },
  {
      "id": "sKZ9Rnyzh7oOL2R2kpxq",
      "Number": 20702060,
      "Name": "محمد المصطفى /الشيخ السجاد",
      "Active": true,
      "Voted": true,
      "Candidate": "محمد المصطفى الشيخ السجاد",
      "Password": "20702060"
  },
  {
      "id": "sloA6Zsy7ldnTs69pARn",
      "Number": 43626591,
      "Password": "49652439",
      "Name": "الداه /محمد لحبيب أحمد فال",
      "Candidate": "محمد المصطفى الشيخ السجاد",
      "Voted": true,
      "Active": true
  },
  {
      "id": "tcPS1n71OWLm4onvhRmD",
      "Number": 48142036,
      "Password": "123456",
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Voted": true,
      "Name": "العالية / السلم",
      "Active": true
  },
  {
      "id": "tpijf5FbxXoAAH6zZU6u",
      "Candidate": "محمد عبد الرحمن محمد",
      "Active": true,
      "Name": "فاطمة /محمد الأمين",
      "Number": 41378588,
      "Voted": true,
      "Password": "41378588fa"
  },
  {
      "id": "wFzMUYoZmfv4YmRyk0Nk",
      "Voted": true,
      "Number": 48298692,
      "Active": true,
      "Candidate": "محمد عبد الرحمن محمد",
      "Password": "20202021",
      "Name": "يحي /اعبيد"
  },
  {
      "id": "wHfV3Q5OLXD1EFTEijke",
      "Number": 48143338,
      "Password": "46435828",
      "Candidate": "محمد عبد الرحمن محمد",
      "Name": "سيد الحسن/ سيداتي",
      "Active": true,
      "Voted": true
  },
  {
      "id": "wQiqHqxXgGd9N1Xr1mrU",
      "Voted": true,
      "Password": "466135",
      "Candidate": "محمد عبد الرحمن محمد",
      "Number": 46613562,
      "Name": "حمزة / بلخير",
      "Active": true
  },
  {
      "id": "wewiu3HIkmyLZHX4X6XO",
      "Voted": true,
      "Active": true,
      "Password": "48529512",
      "Number": 49559289,
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Name": "محمد يحي السالم /المين فال"
  },
  {
      "id": "x8R0D57AEuqryXeqGJ2Z",
      "Password": "awsedrft",
      "Number": 37399530,
      "Active": true,
      "Voted": true,
      "Name": "البار / ماناه / باب",
      "Candidate": "محمد المصطفى الشيخ السجاد"
  },
  {
      "id": "xVDPeco9lvPuRRBbu1eu",
      "Password": "A20202031a",
      "Name": "الننّه /محمد الأمين سلمان",
      "Voted": true,
      "Number": 42817289,
      "Active": true,
      "Candidate": "محمد عبد الرحمن محمد"
  },
  {
      "id": "y8c3cikf3NeNoMBwKxkI",
      "Password": "2005aa",
      "Candidate": "محمد المصطفى الشيخ السجاد",
      "Name": "دلاهي / بلال",
      "Voted": true,
      "Active": true,
      "Number": 49854642
  },
  {
      "id": "yMhCZzIpFkL7qJHOp3Fh",
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Password": "44444300",
      "Number": 32840084,
      "Active": true,
      "Name": "فاطمة /منت المامي",
      "Voted": true
  },
  {
      "id": "yYIlo4j9zns12Em00Cos",
      "Number": 46999434,
      "Candidate": "محمد عبد الرحمن محمد",
      "Password": "474706",
      "Name": "صباح / احمد محم",
      "Active": true,
      "Voted": true
  },
  {
      "id": "ybgkEeC6UCzScmIRCwLT",
      "Candidate": "محمد عبد الرحمن محمد",
      "Voted": true,
      "Name": "الشيخ / أبنو",
      "Password": "cheikh1234",
      "Number": 47877909,
      "Active": true
  },
  {
      "id": "ykffBa97buldSwsDdkUf",
      "Name": "محمد فال/خطري",
      "Password": "102956",
      "Number": 44115709,
      "Candidate": "محمد فال محمد عبدالله خطري",
      "Voted": true,
      "Active": true
  },
  {
      "id": "zDcugXUN5jydFnKNbFip",
      "Password": "4844ta",
      "Name": "الطالب عبدالرحمن/ محمد/اجيد",
      "Number": 48448230,
      "Candidate": "محمد عبد الرحمن محمد",
      "Voted": true,
      "Active": true
  },
  {
      "id": "zhVv13p1mVxWb65NAvXn",
      "Number": 47142198,
      "Password": "med47200975",
      "Name": "محمد عبد الرحمان /الدده",
      "Candidate": "محمد عبد الرحمن محمد",
      "Active": true,
      "Voted": true
  },
  {
      "id": "zs3yNLWUFC83lIK7OQm4",
      "Name": "محمد عبد الرحمن / عبد الباقي",
      "Active": true,
      "Password": "462020",
      "Candidate": "محمد عبد الرحمن محمد",
      "Voted": true,
      "Number": 49144465
  }
]