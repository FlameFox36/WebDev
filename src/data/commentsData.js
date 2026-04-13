export const fetchComments = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const comments = [
        {
          id: 1,
          author: "Алексей",
          text: "Отличная статья! Очень помогла разобраться в теме.",
          date: "2024-09-10T14:30:00",
          hasNotifications: true,
          likes: 5
        },
        {
          id: 2,
          author: "Мария",
          text: "Спасибо автору за подробное объяснение. Жду продолжения!",
          date: "2024-09-10T09:15:00",
          hasNotifications: false,
          likes: 3
        },
        {
          id: 3,
          author: "Дмитрий",
          text: "Хороший материал, но можно было добавить больше примеров кода.",
          date: "2024-09-09T18:45:00",
          hasNotifications: true,
          likes: 2
        },
        {
          id: 4,
          author: "Елена",
          text: "Наконец-то нашла понятное объяснение! Всё разложено по полочкам.",
          date: "2024-09-09T12:00:00",
          hasNotifications: false,
          likes: 7
        }
      ];
      resolve(comments);
    }, 800);
  });
};

export const postComment = (newComment) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const commentWithId = {
        ...newComment,
        id: Date.now(),
        date: new Date().toISOString(),
        likes: 0
      };
      resolve(commentWithId);
    }, 500);
  });
};