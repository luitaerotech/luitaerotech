import { Link } from "@tanstack/react-router";
import { useState } from "react";
import LuitLogo from "../../../public/luit-logo.png";

export type NavItem = { href: string; label: string };

function NavAnchor({
	href,
	onClick,
	children,
}: {
	href: string;
	onClick?: () => void;
	children: React.ReactNode;
}) {
	if (href.startsWith("#")) {
		return (
			<a href={href} onClick={onClick}>
				{children}
			</a>
		);
	}
	const [to, hash] = href.split("#");
	return (
		<Link to={to || "/"} hash={hash} onClick={onClick}>
			{children}
		</Link>
	);
}

export function SiteHeader({ links }: { links: NavItem[] }) {
	const [open, setOpen] = useState(false);

	return (
		<header>
			<div className="wrap nav">
				<Link to="/" className="brand" aria-label="Luit Aerotech home">
					<img src={LuitLogo} alt="Luit Aerotech logo" />
					<span>
						<span className="brand-name">
							Luit <span>Aerotech</span>
						</span>
						<br />
						<span className="brand-sub">Private Limited</span>
					</span>
				</Link>
				<button
					type="button"
					className="menu-toggle"
					aria-label="Open menu"
					aria-expanded={open}
					onClick={() => setOpen((o) => !o)}
				>
					<svg
						width="26"
						height="26"
						viewBox="0 0 24 24"
						stroke="#17222D"
						strokeWidth="2"
						fill="none"
						strokeLinecap="round"
						aria-hidden="true"
					>
						<path d="M3 6h18M3 12h18M3 18h18" />
					</svg>
				</button>
				<nav className={`links${open ? " open" : ""}`}>
					{links.map((link) => (
						<NavAnchor
							key={link.href}
							href={link.href}
							onClick={() => setOpen(false)}
						>
							{link.label}
						</NavAnchor>
					))}
				</nav>
			</div>
		</header>
	);
}
