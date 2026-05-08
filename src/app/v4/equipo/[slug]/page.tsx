import "../../../v3/v3.css";
import V4MemberPage from "@/components/v4/V4MemberPage";
import { v4Team, getMemberBySlug } from "@/lib/v4-team";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return v4Team.map((m) => ({ slug: m.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) return { title: "Perfil no encontrado" };
  return {
    title: `${member.name} — ${member.role} | Bissu Abogados`,
    description: member.bio,
    robots: { index: false, follow: false },
  };
}

export default async function MemberProfilePage({ params }: Props) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) notFound();
  return <V4MemberPage member={member} />;
}
