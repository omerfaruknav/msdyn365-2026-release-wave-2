import { loadWaves } from "../lib/config.js";

const cfg = loadWaves();
export const AREAS = cfg.areas.map((a) => a.slug);
export const STATUSES = cfg.statuses;
export const AUDIENCES = cfg.audiences;

const num = { type: "number" };
const str = { type: "string" };
const strArr = { type: "array", items: str };

export const featureSchema = {
  type: "object",
  additionalProperties: false,
  required: ["name", "description", "status", "status_evidence_t", "status_evidence_quote", "t_start", "t_end", "is_demoed", "demo_t_start", "demo_t_end", "caveats", "prerequisites", "tags", "dev_relevance", "area"],
  properties: {
    name: str,
    description: str,
    status: { type: "string", enum: STATUSES },
    status_evidence_t: { type: ["number", "null"] },
    status_evidence_quote: { type: ["string", "null"] },
    t_start: num,
    t_end: num,
    is_demoed: { type: "boolean" },
    demo_t_start: { type: ["number", "null"] },
    demo_t_end: { type: ["number", "null"] },
    caveats: strArr,
    prerequisites: strArr,
    tags: strArr,
    dev_relevance: { type: "string", enum: ["high", "medium", "low"] },
    area: { type: "string", enum: AREAS },
  },
};

export const windowSchema = {
  type: "object",
  additionalProperties: false,
  required: ["summary", "area", "audience", "presenters", "chapters", "features", "quotes", "disclaimers"],
  properties: {
    summary: str,
    area: { type: "string", enum: AREAS },
    audience: { type: "array", items: { type: "string", enum: AUDIENCES } },
    presenters: { type: "array", items: { type: "object", additionalProperties: false, required: ["name", "confidence"], properties: { name: str, confidence: { type: "string", enum: ["high", "medium", "low"] } } } },
    chapters: { type: "array", items: { type: "object", additionalProperties: false, required: ["t_start", "t_end", "title"], properties: { t_start: num, t_end: num, title: str } } },
    features: { type: "array", items: featureSchema },
    quotes: { type: "array", items: { type: "object", additionalProperties: false, required: ["t", "text", "why_it_matters"], properties: { t: num, text: str, why_it_matters: str } } },
    disclaimers: { type: "array", items: { type: "object", additionalProperties: false, required: ["t", "kind", "text"], properties: { t: num, kind: { type: "string", enum: ["preview", "subject-to-change", "not-in-this-release", "coming-later", "other"] }, text: str } } },
  },
};

export const consolidateSchema = {
  type: "object",
  additionalProperties: false,
  required: ["summary", "area", "audience", "presenters", "chapters", "features"],
  properties: {
    summary: str,
    area: { type: "string", enum: AREAS },
    audience: { type: "array", items: { type: "string", enum: AUDIENCES } },
    presenters: windowSchema.properties.presenters,
    chapters: windowSchema.properties.chapters,
    features: { type: "array", items: featureSchema },
  },
};
