import LuitLogo from "../../../public/luit-logo.png";

export function SiteFooter() {
	return (
		<footer>
			<div className="wrap foot">
				<div className="brand">
					<img src={LuitLogo} alt="" />
					<span>
						<span className="brand-name">
							Luit <span style={{ color: "var(--green)" }}>Aerotech</span>
						</span>
						<br />
						<span className="mono">Private Limited · Assam, India</span>
					</span>
				</div>
				<div className="mono">
					© 2026 Luit Aerotech Private Limited · All rights reserved
				</div>
			</div>
		</footer>
	);
}
