import { ClerkProvider } from '@clerk/nextjs';

export default function AUthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='flex items-center justify-center h-full'>{children}</div>
	);
}
