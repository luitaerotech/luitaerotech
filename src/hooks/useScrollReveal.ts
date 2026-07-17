import { useEffect } from "react";

export function useScrollReveal(
	containerRef: React.RefObject<HTMLElement | null>,
) {
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add("in");
						io.unobserve(entry.target);
					}
				}
			},
			{ threshold: 0.1 },
		);

		for (const el of container.querySelectorAll(".reveal")) {
			io.observe(el);
		}

		return () => io.disconnect();
	}, [containerRef]);
}
