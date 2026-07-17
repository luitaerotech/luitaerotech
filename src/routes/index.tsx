import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { SiteFooter } from "../components/marketing/SiteFooter";
import { SiteHeader } from "../components/marketing/SiteHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";
import marketingCss from "../styles/marketing.css?url";

export const Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{
				title:
					"Luit Aerotech Private Limited — DGCA-Certified Drone Services, Assam",
			},
			{
				name: "description",
				content:
					"Luit Aerotech Private Limited is a DGCA-certified drone services enterprise providing precision agriculture spraying, crop monitoring, LiDAR survey, inspection and disaster assessment across Assam and Northeast India.",
			},
		],
		links: [
			{ rel: "stylesheet", href: marketingCss },
			{ rel: "icon", type: "image/png", href: "/luit-logo.png" },
		],
	}),
	component: Home,
});

const HOME_NAV_LINKS = [
	{ href: "#services", label: "Services" },
	{ href: "/services", label: "Service Details" },
	{ href: "#roadmap", label: "Roadmap" },
	{ href: "#why", label: "Why Us" },
];

const SERVICES = [
	{
		ops: "01",
		tag: "Agriculture",
		title: "Agriculture Spraying",
		description:
			"GPS-guided pesticide and fertiliser application. Cover 5 acres in 30 minutes — reducing labour cost and chemical waste across paddy, tea and vegetable farms.",
		icon: (
			<path d="M12 3v7M8 6l4 4 4-4M4 14c2.5 2 5.5 3 8 3s5.5-1 8-3M6 18c2 1.3 4 2 6 2s4-.7 6-2" />
		),
	},
	{
		ops: "02",
		tag: "Agriculture",
		title: "Crop Monitoring & NDVI",
		description:
			"Multispectral imaging to detect crop stress, disease and nutrient deficiencies early. Orthomosaic and NDVI maps delivered post-flight.",
		icon: <path d="M3 20h18M5 20V9l4 3 3-6 3 6 4-3v11" />,
	},
	{
		ops: "03",
		tag: "Industry",
		title: "Construction Monitoring",
		description:
			"Live site progress tracking and high-accuracy volumetric analysis for civil engineering and real estate developments.",
		icon: (
			<path d="M3 21h18M6 21V8l6-4v17M12 21V12l6 3v6M9 9v.01M9 13v.01M9 17v.01" />
		),
	},
	{
		ops: "04",
		tag: "Infrastructure",
		title: "Infrastructure Inspection",
		description:
			"Safe inspection of bridges, power lines, pipelines and towers using thermal and RGB imagery — without putting inspectors at risk.",
		icon: <path d="M4 20L20 4M4 4l4 4M20 20l-4-4M12 8v8M8 12h8" />,
	},
	{
		ops: "05",
		tag: "Survey",
		title: "LiDAR & Topographic Survey",
		description:
			"High-precision terrain mapping through dense vegetation using state-of-the-art LiDAR point cloud technology.",
		icon: <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M12 8v5" />,
	},
	{
		ops: "06",
		tag: "Media",
		title: "Aerial Photography",
		description:
			"4K drone footage for real estate, tourism, events and infrastructure documentation. Professional output for commercial and government clients.",
		icon: (
			<>
				<rect x="3" y="7" width="18" height="13" rx="2" />
				<circle cx="12" cy="13.5" r="3.5" />
				<path d="M8 7l1.5-3h5L16 7" />
			</>
		),
	},
	{
		ops: "07",
		tag: "Government",
		title: "Flood & Disaster Assessment",
		description:
			"Rapid emergency response deployment for situational awareness, flood zone mapping and landslide risk assessment.",
		icon: (
			<path d="M3 16c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0M3 20c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0M12 3v7M9 7l3 3 3-3" />
		),
	},
	{
		ops: "08",
		tag: "Environment",
		title: "Forest & Wildlife Monitoring",
		description:
			"Stealth aerial surveillance for ecological data collection, anti-poaching support and wildlife migration tracking.",
		icon: (
			<path d="M12 21V11M12 11c-4 0-7-3-7-7 4 0 7 3 7 7zM12 13c0-3.3 2.7-6 6-6 0 3.3-2.7 6-6 6zM5 21h14" />
		),
	},
	{
		ops: "09",
		tag: "Enterprise",
		title: "Drone-as-a-Service (DaaS)",
		description:
			"Full-cycle operational support including certified pilots and custom flight protocol development for recurring enterprise needs.",
		icon: (
			<>
				<circle cx="12" cy="12" r="3" />
				<path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
			</>
		),
	},
];

const WHY_US = [
	{
		title: "Local terrain expertise",
		icon: <path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.8 5.5 21l2-7.5L2 9h7z" />,
		description:
			"Deep knowledge of Brahmaputra flood plains, tea gardens, forests and hill terrain — with spray patterns calibrated for sloped, high-density canopies.",
	},
	{
		title: "DGCA-compliant operations",
		icon: (
			<>
				<path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
				<path d="M9 12l2 2 4-4" />
			</>
		),
		description:
			"Certified pilots, compliant UAS hardware, NPNT approvals and strict flight-zone adherence on every mission — no exceptions.",
	},
	{
		title: "Data, not just footage",
		icon: (
			<>
				<rect x="3" y="4" width="18" height="14" rx="2" />
				<path d="M7 14l3-3 2.5 2.5L17 9M8 21h8" />
			</>
		),
		description:
			"Orthomosaics, NDVI maps, 3D elevation models and technical reports — intelligence your team can actually act on.",
	},
	{
		title: "Government & enterprise ready",
		icon: <path d="M3 21h18M5 21V11l7-6 7 6v10M10 21v-5h4v5" />,
		description:
			"Positioned to serve state agencies and large enterprises for precision agriculture and infrastructure programmes at scale.",
	},
];

function buildEnquiryMessage(values: Record<string, string>) {
	const lines = [
		"New enquiry — Luit Aerotech website",
		"",
		`Name: ${values.name}`,
		`Phone: ${values.phone}`,
		`Service: ${values.service}`,
	];
	if (values.location) lines.push(`Location: ${values.location}`);
	if (values.area) lines.push(`Area: ${values.area}`);
	if (values.org) lines.push(`Organisation: ${values.org}`);
	if (values.message) lines.push("", `Requirement: ${values.message}`);
	return lines.join("\n");
}

function EnquiryForm() {
	const formRef = useRef<HTMLFormElement>(null);
	const [showError, setShowError] = useState(false);

	function getValues() {
		const data = new FormData(formRef.current ?? undefined);
		const values: Record<string, string> = {};
		for (const key of [
			"name",
			"phone",
			"service",
			"location",
			"area",
			"org",
			"message",
		]) {
			values[key] = (data.get(key) as string | null)?.trim() ?? "";
		}
		return values;
	}

	function validate(values: Record<string, string>) {
		const ok = Boolean(values.name && values.phone);
		setShowError(!ok);
		return ok;
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const values = getValues();
		if (!validate(values)) return;
		window.open(
			`https://wa.me/919435644902?text=${encodeURIComponent(buildEnquiryMessage(values))}`,
			"_blank",
			"noopener",
		);
	}

	function handleEmailSend() {
		const values = getValues();
		if (!validate(values)) return;
		window.location.href = `mailto:luitaerotech@gmail.com?subject=${encodeURIComponent(
			`Website Enquiry — ${values.service}`,
		)}&body=${encodeURIComponent(buildEnquiryMessage(values))}`;
	}

	return (
		<form
			className="form-card reveal"
			ref={formRef}
			onSubmit={handleSubmit}
			noValidate
		>
			<h3>Send an enquiry</h3>
			<p>
				Fill in the details below — pressing send opens WhatsApp with your
				enquiry pre-written, or you can send it by email instead.
			</p>
			<div className="f-grid">
				<div className="f-field">
					<label htmlFor="fName">
						Your name <b>*</b>
					</label>
					<input
						id="fName"
						name="name"
						type="text"
						autoComplete="name"
						required
						placeholder="e.g. Ranjan Das"
					/>
				</div>
				<div className="f-field">
					<label htmlFor="fPhone">
						Phone / WhatsApp <b>*</b>
					</label>
					<input
						id="fPhone"
						name="phone"
						type="tel"
						autoComplete="tel"
						required
						placeholder="+91 …"
					/>
				</div>
				<div className="f-field">
					<label htmlFor="fService">Service needed</label>
					<select
						id="fService"
						name="service"
						defaultValue="Agriculture Spraying"
					>
						<option>Agriculture Spraying</option>
						<option>Crop Monitoring &amp; NDVI</option>
						<option>Construction Monitoring</option>
						<option>Infrastructure Inspection</option>
						<option>LiDAR &amp; Topographic Survey</option>
						<option>Aerial Photography</option>
						<option>Flood &amp; Disaster Assessment</option>
						<option>Forest &amp; Wildlife Monitoring</option>
						<option>Drone-as-a-Service (DaaS)</option>
						<option>Other / Not sure yet</option>
					</select>
				</div>
				<div className="f-field">
					<label htmlFor="fLocation">Location / district</label>
					<input
						id="fLocation"
						name="location"
						type="text"
						placeholder="e.g. Udalguri, Assam"
					/>
				</div>
				<div className="f-field">
					<label htmlFor="fArea">Area (acres / bigha)</label>
					<input
						id="fArea"
						name="area"
						type="text"
						placeholder="e.g. 20 acres"
					/>
				</div>
				<div className="f-field">
					<label htmlFor="fOrg">Organisation (optional)</label>
					<input
						id="fOrg"
						name="org"
						type="text"
						placeholder="Farm / FPO / tea estate / dept."
					/>
				</div>
				<div className="f-field full">
					<label htmlFor="fMsg">Tell us about your requirement</label>
					<textarea
						id="fMsg"
						name="message"
						placeholder="Crop type, timeline, site conditions, or anything else we should know…"
					/>
				</div>
				<p className={`f-error${showError ? " show" : ""}`}>
					Please fill in your name and phone number so we can reach you.
				</p>
				<div className="f-actions">
					<button type="submit" className="btn btn-green">
						<svg
							width="17"
							height="17"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.2 1.2 1.1 2.3 1.4 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .8-.2 1.4z" />
						</svg>
						Send via WhatsApp
					</button>
					<button
						type="button"
						className="btn btn-ghost"
						onClick={handleEmailSend}
					>
						Send by email instead
					</button>
				</div>
				<p className="f-note">
					Sent directly to Luit Aerotech · +91 94356 44902 · No data is stored
					on this page
				</p>
			</div>
		</form>
	);
}

function Home() {
	const containerRef = useRef<HTMLDivElement>(null);
	useScrollReveal(containerRef);

	return (
		<div className="marketing" ref={containerRef}>
			<SiteHeader links={HOME_NAV_LINKS} />

			<main id="top">
				<div className="hero">
					<div className="hero-grid" aria-hidden="true" />
					<div className="wrap hero-inner">
						<div>
							<span className="mono eyebrow">
								DGCA-Certified Drone Services · Northeast India
							</span>
							<h1>
								Aerial intelligence,
								<br />
								<em>built for Assam.</em>
							</h1>
							<p className="lede">
								Luit Aerotech flies certified drone operations across
								agriculture, industry, infrastructure and government —
								calibrated for the Brahmaputra valley's terrain, tea canopies
								and monsoon conditions.
							</p>
							<div className="hero-ctas">
								<a className="btn btn-primary" href="#enquiry">
									Send an Enquiry
								</a>
								<a className="btn btn-ghost" href="#services">
									Explore Services
								</a>
							</div>
							<div className="hero-badges">
								<span className="badge">
									<b>DGCA</b> Certified Pilots
								</span>
								<span className="badge">
									<b>NPNT</b> Approved
								</span>
								<span className="badge">
									<b>Digital Sky</b> Registered
								</span>
							</div>
						</div>

						<aside
							className="mission reveal"
							aria-label="Sample field mission log"
						>
							<div className="mission-head">
								<span className="mono">Mission Log · LA-OPS</span>
								<span className="live">
									<i />
									Field Active
								</span>
							</div>
							<div className="mission-rows">
								<div className="mission-row">
									<span className="k">Operation</span>
									<span className="v">
										Precision Paddy Spraying
										<small>GPS-guided · smart nozzles</small>
									</span>
								</div>
								<div className="mission-row">
									<span className="k">Sector</span>
									<span className="v">
										Brahmaputra Valley, Assam
										<small>26.23° N &nbsp;92.93° E</small>
									</span>
								</div>
								<div className="mission-row">
									<span className="k">Coverage</span>
									<span className="v">
										5 acres / ~30 min
										<small>vs. one full day by hand</small>
									</span>
								</div>
								<div className="mission-row">
									<span className="k">Deliverables</span>
									<span className="v">
										NDVI map · Orthomosaic
										<small>technical report post-flight</small>
									</span>
								</div>
							</div>
							<div className="mission-foot">
								<span>UAS · NPNT COMPLIANT</span>
								<span>STATUS · CLEARED</span>
							</div>
						</aside>
					</div>
				</div>

				<div className="stats">
					<div className="wrap stats-inner">
						<div className="stat reveal">
							<div className="n">
								5<span> acres</span>
							</div>
							<div className="l">Sprayed in ~30 minutes</div>
						</div>
						<div className="stat reveal">
							<div className="n">
								40<span>%</span>
							</div>
							<div className="l">Reduction in input waste</div>
						</div>
						<div className="stat reveal">
							<div className="n">
								35<span> districts</span>
							</div>
							<div className="l">Assam coverage targeted</div>
						</div>
						<div className="stat reveal">
							<div className="n">
								0<span> risk</span>
							</div>
							<div className="l">Human exposure on hazardous jobs</div>
						</div>
					</div>
				</div>

				<section id="services">
					<div className="wrap">
						<div className="section-head reveal">
							<span className="mono eyebrow">Services</span>
							<h2>What we fly for you</h2>
							<p>
								Professional drone operations across agriculture, industry,
								infrastructure and government — every mission flown by certified
								pilots and delivered as usable data, not just footage.
							</p>
						</div>
						<div className="svc-grid">
							{SERVICES.map((service) => (
								<article className="svc reveal" key={service.ops}>
									<div className="ops">
										<span>OPS · {service.ops}</span>
										<span className="tag">{service.tag}</span>
									</div>
									<div className="icon">
										<svg viewBox="0 0 24 24" aria-hidden="true">
											{service.icon}
										</svg>
									</div>
									<h3>{service.title}</h3>
									<p>{service.description}</p>
									<a className="more" href={`/services#ops-${service.ops}`}>
										Details →
									</a>
								</article>
							))}
						</div>
						<div className="svc-cta reveal">
							<a className="btn btn-ghost" href="/services">
								View full service details →
							</a>
						</div>
					</div>
				</section>

				<section id="roadmap">
					<div className="wrap">
						<div className="section-head reveal">
							<span className="mono eyebrow">Growth Roadmap</span>
							<h2>Three phases, one vision</h2>
							<p>
								A deliberate stage-by-stage expansion — from drone services
								operator to a full UAV ecosystem covering training and
								manufacturing.
							</p>
						</div>
						<div className="path-wrap">
							<svg
								className="path-svg"
								viewBox="0 0 1000 60"
								preserveAspectRatio="none"
								aria-hidden="true"
							>
								<path d="M40 30 C 250 -10, 420 70, 520 30 S 820 -5, 960 30" />
							</svg>
							<div className="phase-grid">
								<article className="phase active reveal">
									<div className="node">P1</div>
									<div className="stage">Phase I · Operations</div>
									<h3>Axom Aerial Solutions</h3>
									<p>
										Core drone operations — precision agriculture spraying,
										crop-health monitoring, survey, mapping, inspection and
										disaster response.
									</p>
									<span className="status">● Live in the field</span>
								</article>
								<article className="phase reveal">
									<div className="node">P2</div>
									<div className="stage">Phase II · Training</div>
									<h3>Axom Aerotech Academy</h3>
									<p>
										DGCA-certified remote-pilot (RPTO) training, building a
										skilled local workforce of certified drone operators for the
										Northeast.
									</p>
									<span className="status">In development</span>
								</article>
								<article className="phase reveal">
									<div className="node">P3</div>
									<div className="stage">Phase III · Manufacturing</div>
									<h3>Luit Aerotech</h3>
									<p>
										Indigenous UAV assembly and manufacturing — the long-term
										engine for a self-reliant regional drone industry.
									</p>
									<span className="status">On the horizon</span>
								</article>
							</div>
						</div>
					</div>
				</section>

				<section id="why">
					<div className="wrap">
						<div className="section-head reveal">
							<span className="mono eyebrow">Why Luit Aerotech</span>
							<h2>Built for the Northeast. Compliant to the letter.</h2>
							<p>
								From tea canopies in Upper Assam to the flood plains of the
								Brahmaputra valley — we deliver precision, safety and actionable
								insight.
							</p>
						</div>
						<div className="why-grid">
							{WHY_US.map((item) => (
								<div className="why reveal" key={item.title}>
									<h3>
										<svg viewBox="0 0 24 24" aria-hidden="true">
											{item.icon}
										</svg>
										{item.title}
									</h3>
									<p>{item.description}</p>
								</div>
							))}
						</div>
						<div className="compliance reveal">
							<span className="badge">
								<b>CIN</b> U74909AS2026PTC030539
							</span>
							<span className="badge">
								<b>DPIIT</b> Recognised Startup
							</span>
							<span className="badge">
								<b>GSTIN</b> 18AAGCL9116P1ZU
							</span>
						</div>
					</div>
				</section>

				<section id="contact">
					<div className="wrap">
						<div className="section-head reveal">
							<span className="mono eyebrow">Get in Touch</span>
							<h2 id="enquiry" style={{ scrollMarginTop: "110px" }}>
								Plan your first flight
							</h2>
							<p>
								Whether you are a farmer, an FPO, a tea estate, or a government
								body — Luit Aerotech will design the right drone-based solution
								for your needs.
							</p>
						</div>
						<div className="contact-grid">
							<div className="contact-side reveal">
								<div className="contact-list">
									<div className="c-row">
										<span className="k">Company</span>
										<span className="v">Luit Aerotech Private Limited</span>
									</div>
									<div className="c-row">
										<span className="k">Call / WhatsApp</span>
										<span className="v">
											<a href="tel:+919435644902">+91 94356 44902</a>
										</span>
									</div>
									<div className="c-row">
										<span className="k">Email</span>
										<span className="v">
											<a href="mailto:luitaerotech@gmail.com">
												luitaerotech@gmail.com
											</a>
										</span>
									</div>
									<div className="c-row">
										<span className="k">Website</span>
										<span className="v">
											<a href="https://www.luitaerotech.com">
												www.luitaerotech.com
											</a>
										</span>
									</div>
									<div className="c-row">
										<span className="k">Mission Control</span>
										<span className="v">
											Guwahati, Assam – 781030
											<br />
											Lakhimpur, Assam – 784161
										</span>
									</div>
								</div>
								<h3>Prefer to talk first?</h3>
								<p>
									Call or WhatsApp us directly — we usually respond within one
									working day with a flight plan, timeline and quote.
								</p>
							</div>

							<EnquiryForm />
						</div>
					</div>
				</section>
			</main>

			<div className="tagline-band">
				Empowering sustainable farming through smart agriculture across Assam
				&amp; Northeast India
			</div>

			<SiteFooter />
		</div>
	);
}
