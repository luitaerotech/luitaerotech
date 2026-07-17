import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { SiteFooter } from "../components/marketing/SiteFooter";
import { SiteHeader } from "../components/marketing/SiteHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";
import marketingCss from "../styles/marketing.css?url";

export const Route = createFileRoute("/services")({
	head: () => ({
		meta: [
			{ title: "Service Details — Luit Aerotech Private Limited" },
			{
				name: "description",
				content:
					"Detailed service catalogue of Luit Aerotech Private Limited: agriculture spraying, crop monitoring & NDVI, construction monitoring, infrastructure inspection, LiDAR survey, aerial photography, disaster assessment, wildlife monitoring and Drone-as-a-Service.",
			},
		],
		links: [
			{ rel: "stylesheet", href: marketingCss },
			{ rel: "icon", type: "image/png", href: "/luit-logo.png" },
		],
	}),
	component: Services,
});

const SERVICES_NAV_LINKS = [
	{ href: "/", label: "Home" },
	{ href: "/#roadmap", label: "Roadmap" },
	{ href: "/#why", label: "Why Us" },
];

const TOC = [
	{ href: "#ops-01", label: "01 · Spraying" },
	{ href: "#ops-02", label: "02 · Crop & NDVI" },
	{ href: "#ops-03", label: "03 · Construction" },
	{ href: "#ops-04", label: "04 · Inspection" },
	{ href: "#ops-05", label: "05 · LiDAR Survey" },
	{ href: "#ops-06", label: "06 · Photography" },
	{ href: "#ops-07", label: "07 · Disaster" },
	{ href: "#ops-08", label: "08 · Forest & Wildlife" },
	{ href: "#ops-09", label: "09 · DaaS" },
];

type Detail = {
	id: string;
	ops: string;
	tag: string;
	title: string;
	lede: string;
	whatYouGet: string[];
	idealFor: string[];
	spec: { k: string; v: string }[];
	enquireLabel: string;
	flip?: boolean;
};

const DETAILS: Detail[] = [
	{
		id: "ops-01",
		ops: "01",
		tag: "Agriculture",
		title: "Agriculture Spraying",
		lede: "GPS-guided application of pesticides, fertilisers, herbicides and nano/micro-nutrients — precise targeting and even coverage on every flight. One drone covers 5 acres in about 30 minutes, work that takes a labourer a full day, while cutting chemical use by up to 40%.",
		whatYouGet: [
			"Uniform, drift-controlled coverage with smart nozzles that adapt to crop density and wind",
			"Spray log with area covered, input volume and flight track",
			"Zero human contact with chemicals — no operator exposure",
			"Spray patterns calibrated for sloped, high-density tea canopies",
		],
		idealFor: [
			"Paddy farmers & FPOs in the Brahmaputra valley",
			"Tea estates & small tea growers",
			"Vegetable clusters and horticulture blocks",
		],
		spec: [
			{ k: "Coverage", v: "5 acres / ~30 min" },
			{ k: "Guidance", v: "GPS / RTK · smart nozzles" },
			{ k: "Crops", v: "Paddy · tea · vegetables" },
			{ k: "Savings", v: "Up to 40% input reduction" },
		],
		enquireLabel: "Enquire about spraying →",
	},
	{
		id: "ops-02",
		ops: "02",
		tag: "Agriculture",
		title: "Crop Monitoring & NDVI",
		lede: "Multispectral imaging that detects crop stress, disease and nutrient deficiencies before they are visible to the eye — so you intervene early, treat only where needed, and protect yield.",
		whatYouGet: [
			"NDVI crop-health maps highlighting stress zones field by field",
			"High-resolution orthomosaic of the entire holding",
			"Technical report with agronomic recommendations",
			"Season-long monitoring subscriptions available",
		],
		idealFor: [
			"Tea estates tracking canopy health",
			"Paddy growers ahead of critical growth stages",
			"Agri-departments running pilot programmes",
		],
		spec: [
			{ k: "Sensor", v: "Multispectral imaging" },
			{ k: "Analysis", v: "NDVI · stress detection" },
			{ k: "Output", v: "Health maps · orthomosaic" },
			{ k: "Cadence", v: "One-off or seasonal" },
		],
		enquireLabel: "Enquire about crop monitoring →",
		flip: true,
	},
	{
		id: "ops-03",
		ops: "03",
		tag: "Industry",
		title: "Construction Monitoring",
		lede: "Live site progress tracking and high-accuracy volumetric analysis for civil engineering and real estate developments — replacing week-long manual measurement with a single flight.",
		whatYouGet: [
			"Periodic orthomosaics documenting site progress over time",
			"Cut-and-fill volumetrics for earthworks and stockpiles",
			"3D site models for planning and client reporting",
			"Progress comparison against project drawings",
		],
		idealFor: [
			"Civil contractors and PWD projects",
			"Real estate developers",
			"Project management consultants",
		],
		spec: [
			{ k: "Output", v: "Orthomosaic · 3D model" },
			{ k: "Accuracy", v: "Survey-grade with GCPs" },
			{ k: "Cadence", v: "Weekly / monthly flights" },
			{ k: "Turnaround", v: "Report within days" },
		],
		enquireLabel: "Enquire about site monitoring →",
	},
	{
		id: "ops-04",
		ops: "04",
		tag: "Infrastructure",
		title: "Infrastructure Inspection",
		lede: "Safe, accurate inspection of bridges, power lines, pipelines and towers using thermal and RGB imagery — removing humans from hazardous inspection tasks entirely.",
		whatYouGet: [
			"High-resolution RGB imagery of hard-to-reach structures",
			"Thermal scans revealing hotspots, leaks and faults",
			"Geo-tagged defect report for maintenance planning",
			"Repeatable flight paths for consistent re-inspection",
		],
		idealFor: [
			"Power utilities and transmission line operators",
			"Oil & gas pipeline operators",
			"Bridge and highway authorities",
		],
		spec: [
			{ k: "Sensors", v: "Thermal + RGB zoom" },
			{ k: "Assets", v: "Bridges · lines · towers" },
			{ k: "Risk", v: "Zero human exposure" },
			{ k: "Output", v: "Geo-tagged defect report" },
		],
		enquireLabel: "Enquire about inspection →",
		flip: true,
	},
	{
		id: "ops-05",
		ops: "05",
		tag: "Survey",
		title: "LiDAR & Topographic Survey",
		lede: "High-precision terrain mapping through dense vegetation using state-of-the-art LiDAR point cloud technology — digital land intelligence for government, enterprise and land-management use-cases.",
		whatYouGet: [
			"Dense LiDAR point clouds penetrating forest canopy",
			"Digital elevation and terrain models (DEM / DTM)",
			"Contour maps and cross-sections to specification",
			"GIS-ready outputs for planning and asset management",
		],
		idealFor: [
			"Revenue and land-records departments",
			"Irrigation, road and railway planning",
			"Estate and plantation boundary mapping",
		],
		spec: [
			{ k: "Sensor", v: "UAV LiDAR + RTK GNSS" },
			{ k: "Terrain", v: "Dense vegetation capable" },
			{ k: "Output", v: "Point cloud · DEM · contours" },
			{ k: "Format", v: "LAS · GeoTIFF · DWG" },
		],
		enquireLabel: "Enquire about survey →",
	},
	{
		id: "ops-06",
		ops: "06",
		tag: "Media",
		title: "Aerial Photography",
		lede: "4K drone footage for real estate, tourism, events and infrastructure documentation — professional, colour-graded output for commercial and government clients.",
		whatYouGet: [
			"Cinematic 4K video and high-resolution stills",
			"Edited, delivery-ready packages for web and broadcast",
			"Permission-compliant flights over approved zones",
			"Raw footage handover on request",
		],
		idealFor: [
			"Tourism boards and destination marketing",
			"Real estate and hospitality projects",
			"Event coverage and documentaries",
		],
		spec: [
			{ k: "Capture", v: "4K video · RAW stills" },
			{ k: "Compliance", v: "Zone-cleared flights" },
			{ k: "Delivery", v: "Edited + raw options" },
			{ k: "Clients", v: "Commercial · government" },
		],
		enquireLabel: "Enquire about photography →",
		flip: true,
	},
	{
		id: "ops-07",
		ops: "07",
		tag: "Government",
		title: "Flood & Disaster Assessment",
		lede: "Rapid emergency deployment for situational awareness, flood zone mapping and landslide risk assessment — critical capability in a flood-prone region like Assam, where response speed decides outcomes.",
		whatYouGet: [
			"Rapid aerial situational awareness within hours of tasking",
			"Real-time flood-damage mapping in the Brahmaputra valley",
			"Landslide-risk imagery for vulnerable slopes",
			"Data packaged for district administration decision-making",
		],
		idealFor: [
			"Disaster management authorities (SDMA / DDMA)",
			"District administrations during monsoon",
			"Relief and insurance assessment teams",
		],
		spec: [
			{ k: "Response", v: "Rapid deployment" },
			{ k: "Mapping", v: "Flood zones · landslides" },
			{ k: "Output", v: "Real-time damage maps" },
			{ k: "Clients", v: "SDMA · district admin" },
		],
		enquireLabel: "Enquire about disaster response →",
	},
	{
		id: "ops-08",
		ops: "08",
		tag: "Environment",
		title: "Forest & Wildlife Monitoring",
		lede: "Stealth aerial surveillance for ecological data collection, anti-poaching support and wildlife migration tracking — covering ground that takes ranger teams days, in a single flight.",
		whatYouGet: [
			"Low-disturbance surveillance flights over sensitive habitats",
			"Thermal detection for night-time anti-poaching patrols",
			"Migration and habitat-change mapping over time",
			"Evidence-grade imagery for enforcement action",
		],
		idealFor: [
			"Forest departments and protected-area managers",
			"Wildlife NGOs and research teams",
			"Afforestation and habitat-restoration programmes",
		],
		spec: [
			{ k: "Profile", v: "Low-noise stealth flights" },
			{ k: "Sensors", v: "Thermal + zoom RGB" },
			{ k: "Use", v: "Anti-poaching · ecology" },
			{ k: "Output", v: "Tracking data · imagery" },
		],
		enquireLabel: "Enquire about wildlife monitoring →",
		flip: true,
	},
	{
		id: "ops-09",
		ops: "09",
		tag: "Enterprise",
		title: "Drone-as-a-Service (DaaS)",
		lede: "Full-cycle operational support for recurring enterprise needs — certified pilots, compliant hardware and custom flight protocol development, on a pay-per-use basis with no equipment to buy and no technical burden.",
		whatYouGet: [
			"Dedicated certified pilot teams on a recurring schedule",
			"Custom flight protocols designed for your sites and SOPs",
			"Bundled packages: spray-only → spray + inputs → spray + NDVI monitoring",
			"Single point of accountability for compliance and delivery",
		],
		idealFor: [
			"Tea estates with season-long spray calendars",
			"Government programmes needing an implementing agency",
			"Enterprises with multi-site recurring requirements",
		],
		spec: [
			{ k: "Model", v: "Pay-per-use · recurring" },
			{ k: "Crew", v: "DGCA-certified pilots" },
			{ k: "Protocols", v: "Custom per site / SOP" },
			{ k: "Packages", v: "Spray → inputs → NDVI" },
		],
		enquireLabel: "Enquire about DaaS →",
	},
];

function DetailSection({ detail }: { detail: Detail }) {
	return (
		<section className="detail" id={detail.id}>
			<div className={`wrap d-grid${detail.flip ? " flip" : ""}`}>
				<div className="reveal">
					<div className="ops-line">
						<span>OPS · {detail.ops}</span>
						<span className="tag">{detail.tag}</span>
					</div>
					<h2>{detail.title}</h2>
					<p className="lede">{detail.lede}</p>
					<div className="d-cols">
						<div className="d-col">
							<h4>What you get</h4>
							<ul>
								{detail.whatYouGet.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
						<div className="d-col ideal">
							<h4>Ideal for</h4>
							<ul>
								{detail.idealFor.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					</div>
					<div className="d-cta">
						<a href={`/#enquiry`}>{detail.enquireLabel}</a>
					</div>
				</div>
				<aside
					className="spec reveal"
					aria-label="Typical mission specification"
				>
					<h4>Typical Mission Spec</h4>
					{detail.spec.map((row) => (
						<div className="spec-row" key={row.k}>
							<span className="k">{row.k}</span>
							<span className="v">{row.v}</span>
						</div>
					))}
				</aside>
			</div>
		</section>
	);
}

function Services() {
	const containerRef = useRef<HTMLDivElement>(null);
	useScrollReveal(containerRef);

	return (
		<div className="marketing" ref={containerRef}>
			<SiteHeader links={SERVICES_NAV_LINKS} />

			<div className="page-hero">
				<div className="wrap">
					<span className="mono">Service Catalogue · LA-OPS 01–09</span>
					<h1>Every mission, in detail.</h1>
					<p>
						Nine drone operations, one standard: DGCA-certified pilots,
						compliant hardware, and deliverables your team can act on. Jump to
						any service below.
					</p>
					<nav className="toc" aria-label="Service index">
						{TOC.map((item) => (
							<a href={item.href} key={item.href}>
								{item.label}
							</a>
						))}
					</nav>
				</div>
			</div>

			<main>
				{DETAILS.map((detail) => (
					<DetailSection detail={detail} key={detail.id} />
				))}
			</main>

			<div className="bottom-cta">
				<div className="wrap">
					<h2>Not sure which service fits?</h2>
					<p>
						Tell us your acreage, site or survey requirement — we'll recommend
						the right operation and respond with a flight plan, timeline and
						quote.
					</p>
					<div className="btns">
						<a className="btn btn-primary" href="/#enquiry">
							Send an Enquiry
						</a>
						<a
							className="btn btn-green"
							href="https://wa.me/919435644902"
							rel="noopener"
						>
							WhatsApp +91 94356 44902
						</a>
					</div>
				</div>
			</div>

			<SiteFooter />
		</div>
	);
}
