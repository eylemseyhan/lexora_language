import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

import { getIsAdmin } from "@/lib/admin";

const App = dynamic(() => import("./app"), { ssr: false });

const AdminPage = async () => {
  const isAdmin = await getIsAdmin(); // Admin kontrolü

  console.log("Admin kontrolü sonucu:", isAdmin); // Burada admin kontrolünü loglayalım

  // Eğer admin değilse, anasayfaya yönlendir
  if (!isAdmin) {
    redirect("/"); // Admin değilse, anasayfaya yönlendir
  }

  return <App />;
};

export default AdminPage;
