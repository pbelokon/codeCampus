import SideNav from "@/components/sideNav/SideNav";

export const dynamic = "force-dynamic";

export default function SectionLayout({ children, params }) {
  const { section } = params;
  return (
    <main>
      <SideNav section={section} />
      {children}
    </main>
  );
}
