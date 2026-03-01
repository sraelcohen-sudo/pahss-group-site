export type Insight = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
};

export const insights: Insight[] = [
  {
    slug: "rural-ready-performance-measures",
    title: "Rural-ready performance measures for hospitals and health systems",
    date: "March 1, 2026",
    excerpt:
      "A practical starting point for measuring hospital performance in resource-constrained settings without overbuilding complexity.",
    body:
      "Many health systems adopt measurement frameworks that are too complex to maintain.\n\nA rural-ready approach emphasizes a small set of operational indicators that can be captured reliably, reviewed routinely, and used for decisions.\n\nA strong starting set often includes: patient flow measures, staffing coverage signals, basic cost structure views, and service delivery capacity measures.\n\nThe goal is not more dashboards. The goal is better decisions."
  },
  {
    slug: "avoidable-administrative-burden",
    title: "Identifying avoidable administrative burden in hospital operations",
    date: "March 1, 2026",
    excerpt:
      "How to locate high-friction workflows and focus improvement work on the processes that waste time and capacity.",
    body:
      "Administrative burden is not just paperwork. It is every avoidable step that consumes scarce time.\n\nA simple method: map one high-volume workflow, count handoffs, measure waiting time, and identify rework.\n\nReducing friction requires clarity: what happens, who touches it, what data is missing, and where errors repeat.\n\nThis is where operational efficiency and practical analytics meet."
  }
];