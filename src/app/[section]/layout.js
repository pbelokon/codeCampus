import SideNav from "@/components/sideNav/SideNav";

export const dynamic = "force-dynamic";

export default function SectionLayout({ children, params }) {
  const { section } = params;
  return (
    <>
      <SideNav section={section} />
      {children}
    </>
  );
}
