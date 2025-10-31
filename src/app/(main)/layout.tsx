
import BottomNav from "@/app/_components/layout/BottomNav";
import Sidebar from "@/app/_components/layout/Sidebar";
import MainHeader from "@/app/_components/layout/MainHeader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // در دسکتاپ، یک سایدبار و محتوای اصلی داریم
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar: فقط در دسکتاپ (md و بالاتر) نشان داده می‌شود */}
      <Sidebar className="hidden md:block" />

      {/* محتوای اصلی */}
      <main className="flex-1 overflow-y-auto">
        {/* هدر: فقط در موبایل نشان داده می‌شود (شبیه UI) */}
        <MainHeader className="md:hidden" />

        {/* کانتینر اصلی محتوا:
          در موبایل تمام صفحه است.
          در دسکتاپ، برای حس "اپ-مانند"، عرض آن را محدود می‌کنیم.
        */}
        <div className="p-4 md:max-w-3xl md:mx-auto">{children}</div>
      </main>

      {/* BottomNav: فقط در موبایل (تا md) نشان داده می‌شود */}
      <BottomNav className="md:hidden" />
    </div>
  );
}
