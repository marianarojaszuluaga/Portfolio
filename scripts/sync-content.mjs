/**
 * Reads CONTENT.md and updates src/locales/es.json and src/locales/en.json
 * Usage: npm run content:sync
 */

import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

// ─── Parse CONTENT.md ─────────────────────────────────────────────────────────

const md = readFileSync(join(root, 'CONTENT.md'), 'utf-8')

/**
 * Splits the markdown into named sections.
 * Each section starts with "## SECTION_NAME"
 */
function parseSections(content) {
  const sections = {}
  const parts = content.split(/^## /m).slice(1) // drop preamble before first ##

  for (const part of parts) {
    const firstLine = part.indexOf('\n')
    const name = part.slice(0, firstLine).trim()
    const body = part.slice(firstLine + 1)

    const esMatch = body.match(/\[ES\]([\s\S]*?)(?=\[EN\]|$)/)
    const enMatch = body.match(/\[EN\]([\s\S]*)$/)

    sections[name] = {
      es: esMatch ? parseKeyValues(esMatch[1]) : {},
      en: enMatch ? parseKeyValues(enMatch[1]) : {},
    }
  }

  return sections
}

/**
 * Parses a block of "key = value" lines.
 * Lines starting with --- or blank are ignored.
 */
function parseKeyValues(block) {
  const result = {}
  for (const raw of block.split('\n')) {
    const line = raw.trim()
    if (!line || line.startsWith('---')) continue
    const eq = line.indexOf(' = ')
    if (eq === -1) continue
    const key = line.slice(0, eq).trim()
    const value = line.slice(eq + 3).trim()
    result[key] = value
  }
  return result
}

const sections = parseSections(md)

// ─── Build locale objects ──────────────────────────────────────────────────────

function build(lang) {
  const get = (section) => sections[section]?.[lang] ?? {}

  // ── Nav ──
  const nav = get('NAV')

  // ── Hero ──
  const hero = get('HERO')

  // ── About ──
  const about = get('ABOUT')

  // ── Skills (comma-separated → array) ──
  const skillsRaw = get('SKILLS').skills ?? ''
  const skills = skillsRaw.split(',').map(s => s.trim()).filter(Boolean)

  // ── Languages (hardcoded structure — not editable from MD, only about labels) ──
  // These are kept in JSON directly since they include flag codes.
  // Reflect any label changes from ABOUT section.

  // ── Experience ──
  const experienceUi = get('EXPERIENCE')
  const experienceItems = []
  let i = 1
  while (sections[`EXPERIENCE_${i}`]) {
    experienceItems.push(get(`EXPERIENCE_${i}`))
    i++
  }

  // ── Projects ──
  const projectsUi = get('PROJECTS')
  const projectItems = {}
  for (const name of Object.keys(sections)) {
    if (!name.startsWith('PROJECT_')) continue
    const id = name.replace('PROJECT_', '')
    projectItems[id] = get(name)
  }

  // ── Education ──
  const educationUi = get('EDUCATION')
  const educationItems = []
  let j = 1
  while (sections[`EDUCATION_${j}`]) {
    educationItems.push(get(`EDUCATION_${j}`))
    j++
  }

  // ── Contact ──
  const contact = get('CONTACT')

  return {
    nav,
    hero,
    about,
    skills,
    experience: {
      ...experienceUi,
      items: experienceItems,
    },
    projects: {
      ...projectsUi,
      categories: {}, // preserved from existing JSON, not edited from MD
      items: projectItems,
    },
    education: {
      ...educationUi,
      items: educationItems,
    },
    contact,
  }
}

// ─── Merge with existing JSON (preserves fields not in CONTENT.md) ─────────────

function deepMerge(base, override) {
  if (Array.isArray(override)) return override
  if (typeof override !== 'object' || override === null) return override

  const result = { ...base }
  for (const key of Object.keys(override)) {
    const val = override[key]
    if (val && typeof val === 'object' && !Array.isArray(val) && Object.keys(val).length === 0) {
      // empty object from build() means "don't touch this key"
      continue
    }
    result[key] = deepMerge(base[key], val)
  }
  return result
}

// ─── Read, merge, write ────────────────────────────────────────────────────────

const localesDir = join(root, 'src', 'locales')

for (const lang of ['es', 'en']) {
  const filePath = join(localesDir, `${lang}.json`)
  const existing = JSON.parse(readFileSync(filePath, 'utf-8'))
  const fresh = build(lang)
  const merged = deepMerge(existing, fresh)

  writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf-8')
  console.log(`✓  ${lang}.json actualizado`)
}

console.log('\n¡Listo! Corre npm run dev para ver los cambios.')
