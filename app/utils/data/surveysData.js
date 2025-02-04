const surveysData = [
  {
    id: 1,
    title: "Ruh Halinizi Değerlendirin",
    description: "Duygu durumunuzu analiz ederek daha sağlıklı sonuçlara ulaşabilirsiniz.",
    surveyCreatedAt: "2025-01-01T10:00:00",
    surveyResponses: [
      {
        id: 1,
        userId: 101,
        responseText: "Bu anket bana çok yardımcı oldu.",
        responseDate: "2025-01-02T12:15:00",
      },
      {
        id: 2,
        userId: 102,
        responseText: "Kendimi daha iyi analiz ettim.",
        responseDate: "2025-01-03T09:10:00",
      },
    ],
    createdBy: {
      id: 1,
      username: "emreuslu",
      firstName: "Emre",
      lastName: "Uslu",
    },
  },
  {
    id: 2,
    title: "Uyku Kalitenizi Ölçün",
    description: "Son bir haftadaki uyku düzeninizi değerlendiriyoruz.",
    surveyCreatedAt: "2025-01-03T08:30:00",
    surveyResponses: [
      {
        id: 3,
        userId: 103,
        responseText: "Uyku kalitem hakkında daha fazla bilgi sahibi oldum.",
        responseDate: "2025-01-04T10:20:00",
      },
    ],
    createdBy: {
      id: 2,
      username: "ecemnurozen",
      firstName: "Ecem",
      lastName: "Özen",
    },
  },
  {
    id: 3,
    title: "Stres Yönetimi Anketi",
    description: "Stres seviyenizi analiz ederek size özel tavsiyeler üretiyoruz.",
    surveyCreatedAt: "2025-01-05T09:45:00",
    surveyResponses: [],
    createdBy: {
      id: 1,
      username: "emreuslu",
      firstName: "Emre",
      lastName: "Uslu",
    },
  },
];

export default surveysData;
