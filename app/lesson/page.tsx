import { redirect } from "next/navigation";

import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries";

import { Quiz } from "./quiz";

// Ders sayfası fonksiyonu
const LessonPage = async () => {
  // Verileri alıyoruz
  const lessonData = getLesson();
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  // Verilerin tamamını bekliyoruz
  const [lesson, userProgress, userSubscription] = await Promise.all([
    lessonData,
    userProgressData,
    userSubscriptionData,
  ]);

  // Eğer ders veya kullanıcı ilerlemesi yoksa, öğrenmeye yönlendiriyoruz
  if (!lesson || !userProgress) return redirect("/learn");

  // İlk başta ne kadar ilerlediğimizi hesaplıyoruz
  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      initialLessonId={lesson.id} // Ders id'si
      initialLessonChallenges={lesson.challenges} // Dersin tüm soruları
      initialHearts={userProgress.hearts} // Kullanıcının kalp durumu
      initialPercentage={initialPercentage} // Başlangıç yüzdesi
      userSubscription={userSubscription} // Kullanıcının aboneliği
    />
  );
};

export default LessonPage;
