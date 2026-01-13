import { DashboardOverviewSection } from "./sections/DashboardOverviewSection";
import { FeaturedAlgosSection } from "./sections/FeaturedAlgosSection";
import { MainContentSection } from "./sections/MainContentSection";
import { SideBarSection } from "./sections/SideBarSection";

export const DashboardDeployed = (): JSX.Element => {
  return (
    <div className="bg-black min-h-screen w-full overflow-x-hidden">
      <div className="flex w-full">
        {/* Sidebar */}
        <aside className="w-64 shrink-0 hidden lg:block">
          <SideBarSection />
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 flex flex-col">
          <header className="w-full">
            <MainContentSection />
          </header>

          <section className="flex-1">
            <DashboardOverviewSection />
          </section>

          <footer className="w-full">
            <FeaturedAlgosSection />
          </footer>
        </main>
      </div>
    </div>
  );
};