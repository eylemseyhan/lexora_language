import { redirect } from "next/navigation";

import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries";

import { Quiz } from "../quiz";

type LessonIdPageProps = {
  params: {
    lessonId: number; // Dersin ID'si
  };
};

const LessonIdPage = async ({ params }: LessonIdPageProps) => {
  // Ders ve kullanıcı verilerini alıyoruz
  const lessonData = getLesson(params.lessonId); // Seçilen dersin verisini alıyoruz
  const userProgressData = getUserProgress(); // Kullanıcının ilerleme bilgilerini alıyoruz
  const userSubscriptionData = getUserSubscription(); // Kullanıcının abonelik bilgilerini alıyoruz

  // Verileri bekliyoruz, hepsi geldiğinde devam ediyoruz
  const [lesson, userProgress, userSubscription] = await Promise.all([
    lessonData,
    userProgressData,
    userSubscriptionData,
  ]);

  // Eğer ders ya da kullanıcı bilgisi eksikse, öğrenme sayfasına yönlendiriyoruz
  if (!lesson || !userProgress) return redirect("/learn");

  // Başlangıçta gösterilecek dersin tamamlanma yüzdesini hesaplıyoruz
  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      initialLessonId={lesson.id} // Ders ID'sini gönderiyoruz
      initialLessonChallenges={lesson.challenges} // Dersin tüm challenge'larını gönderiyoruz
      initialHearts={userProgress.hearts} // Kullanıcının kalp sayısını gönderiyoruz
      initialPercentage={initialPercentage} // Başlangıç yüzdesini gönderiyoruz
      userSubscription={userSubscription} // Kullanıcının abonelik bilgilerini gönderiyoruz
    />
  );
};

export default LessonIdPage;
