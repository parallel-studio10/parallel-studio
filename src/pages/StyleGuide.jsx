import { Container, Grid, Inline, Section } from '../components/layout/Primitives.jsx'
import MediaFrame from '../components/project/MediaFrame.jsx'
import ProjectPreview from '../components/project/ProjectPreview.jsx'
import { Button, Divider, ProjectMeta, SectionLabel, Tag, TextLink } from '../components/ui/index.jsx'
import Wordmark from '../components/ui/Wordmark.jsx'
import { site } from '../data/site.js'
import usePageMeta from '../hooks/usePageMeta.js'

const swatches = [
  ['Primary background', 'bg'],
  ['Alternate background', 'bg-alt'],
  ['Foreground', 'fg'],
  ['Muted text', 'muted'],
  ['Border', 'border'],
  ['Accent', 'accent'],
  ['Inverted background', 'inverse-bg'],
  ['Inverted foreground', 'inverse-fg'],
]

const typeSamples = [
  ['Display XL', 'type-display-xl', 'Digital experiences, designed and built together.'],
  ['Display', 'type-display', 'Working in parallel.'],
  ['H1', 'type-h1', 'Independent by design.'],
  ['H2', 'type-h2', 'A focused creative practice.'],
  ['H3', 'type-h3', 'Purpose in every detail.'],
  ['Body XL', 'type-body-xl', 'PARALLEL brings design and development into one considered process.'],
  ['Body Large', 'type-body-large', 'We build thoughtful websites and digital experiences for businesses.'],
  ['Body', 'type-body', 'Good digital work balances clarity, character and practical execution. This measure leaves room for ideas to unfold across a longer case study.'],
  ['Small', 'type-small', 'Supporting notes stay readable without competing with the main story.'],
  ['Label', 'type-label', '01 / Selected Work'],
  ['Metadata', 'type-meta', 'Digital Product / Design + Development'],
]

const spacingSteps = [1, 2, 3, 4, 5, 6, 8, 10, 12]

const previewProject = {
  slug: 'studydump',
  title: 'StudyDump',
  category: 'Academic Resource Platform',
  year: '2026',
  description: 'A visual study of how a product story could be introduced.',
  services: ['Product Strategy', 'UI/UX', 'Development'],
  status: 'Style guide prototype',
}

function GuideHeading({ number, title, note }) {
  return (
    <div className="guide-heading">
      <SectionLabel number={number}>Design System</SectionLabel>
      <h2>{title}</h2>
      {note && <p className="guide-heading__note">{note}</p>}
    </div>
  )
}

export default function StyleGuide() {
  usePageMeta({ title: 'Style Guide', path: '/styleguide' })

  return (
    <>
      <Section size="lg" className="guide-hero">
        <Container>
          <div className="guide-hero__topline">
            <SectionLabel>Identity / Milestone 1</SectionLabel>
            <span className="type-meta">Internal design-system reference</span>
          </div>
          <h1 className="guide-hero__wordmark"><Wordmark /></h1>
          <Divider paired />
          <div className="guide-hero__bottomline">
            <p className="type-body-xl">{site.descriptor}</p>
            <div>
              <p>{site.brandLine}</p>
              <p className="type-meta text-muted">Founded by {site.founders}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="brand" className="guide-section">
        <Container>
          <GuideHeading number="01" title="Brand" note="The wordmark is typographic, direct and legible. A stacked study is reserved for places with more room." />
          <div className="guide-brand-examples">
            <div className="guide-brand-sample">
              <span className="guide-caption">Primary wordmark</span>
              <Wordmark className="guide-brand-sample__primary" />
              <p className="type-meta">PARALLEL / Independent Digital Studio</p>
            </div>
            <div className="guide-brand-sample guide-brand-sample--alternate">
              <span className="guide-caption">Composition study</span>
              <Wordmark stacked className="guide-brand-sample__stacked" />
              <p className="type-meta">A secondary arrangement, used sparingly.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="colors" className="guide-section">
        <Container>
          <GuideHeading number="02" title="Colors" note="Warm neutrals carry the system. The rust accent is reserved for interaction and selective emphasis." />
          <Grid className="guide-swatches">
            {swatches.map(([name, token]) => (
              <div className="guide-swatch" key={token}>
                <div className={`guide-swatch__color guide-swatch__color--${token}`} aria-hidden="true" />
                <p>{name}</p>
                <code>--color-{token}</code>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section id="typography" className="guide-section" size="lg">
        <Container>
          <GuideHeading number="03" title="Typography" note="Space Grotesk creates structure and character; DM Sans keeps longer reading clear." />
          <div className="guide-type-list">
            {typeSamples.map(([label, className, copy]) => (
              <div className="guide-type-row" key={label}>
                <span className="guide-caption">{label}</span>
                <p className={className}>{copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="grid" className="guide-section">
        <Container>
          <GuideHeading number="04" title="Grid" note="Four columns on mobile, eight on tablet and twelve on desktop. Content can span, pair or offset without a new layout system." />
          <Grid className="guide-grid-ruler" aria-label="Responsive column grid">
            {Array.from({ length: 12 }, (_, index) => <span key={index}>{String(index + 1).padStart(2, '0')}</span>)}
          </Grid>
          <Grid className="guide-layout-demo">
            <div className="grid-span-full">Full-width image or statement</div>
            <div className="grid-span-half">Paired content / A</div>
            <div className="grid-span-half">Paired content / B</div>
            <div className="grid-span-reading">Narrow editorial text</div>
            <div className="grid-span-offset">Intentional offset</div>
          </Grid>
        </Container>
      </Section>

      <Section id="spacing" className="guide-section">
        <Container>
          <GuideHeading number="05" title="Spacing" note="A consistent scale supports small details; four section sizes create a more editorial rhythm." />
          <div className="guide-spacing">
            {spacingSteps.map((step) => (
              <div className="guide-spacing__row" key={step}>
                <code>--space-{step}</code>
                <span className={`guide-spacing__bar guide-spacing__bar--${step}`} aria-hidden="true" />
              </div>
            ))}
          </div>
          <div className="guide-rhythm">
            <span>Section rhythm</span>
            <p><code>--section-sm</code> / <code>--section-md</code> / <code>--section-lg</code> / <code>--section-xl</code></p>
          </div>
        </Container>
      </Section>

      <Section id="buttons" className="guide-section">
        <Container>
          <GuideHeading number="06" title="Buttons" note="Action styles stay rectangular and precise. Hover responds through color and a small directional shift." />
          <Inline className="guide-actions">
            <Button to="/contact" arrow>Start a Project</Button>
            <Button to="/work" variant="secondary" arrow>View Work</Button>
            <Button to="/about" variant="text" arrow>Meet the Studio</Button>
            <Button disabled arrow>Unavailable</Button>
          </Inline>
          <p className="guide-interaction-note">Use Tab to inspect the visible focus treatment. Reduced-motion preferences remove the arrow movement.</p>
        </Container>
      </Section>

      <Section id="links" className="guide-section" size="sm">
        <Container>
          <GuideHeading number="07" title="Links" note="One underline and arrow behavior carries through editorial copy and standalone actions." />
          <div className="guide-link-examples">
            <p>Explore the studio’s <TextLink to="/work">selected work</TextLink> and the thinking behind each project.</p>
            <TextLink to="/services" arrow>Explore services</TextLink>
          </div>
        </Container>
      </Section>

      <Section id="labels" className="guide-section">
        <Container>
          <GuideHeading number="08" title="Labels & metadata" note="Small type, rules and alignment carry information without turning it into a field of chips." />
          <div className="guide-labels">
            <div>
              <span className="guide-caption">Section labels</span>
              <div className="guide-label-list">
                <SectionLabel number="01">Work</SectionLabel>
                <SectionLabel number="02">Services</SectionLabel>
                <SectionLabel number="03">Studio</SectionLabel>
                <SectionLabel number="04">Contact</SectionLabel>
              </div>
            </div>
            <div>
              <span className="guide-caption">Project descriptors</span>
              <Inline className="guide-tag-list">
                <Tag>Digital Product</Tag><Tag>Independent Concept</Tag><Tag>Development</Tag>
              </Inline>
            </div>
          </div>
          <div className="guide-meta-example">
            <span className="guide-caption">Project metadata</span>
            <ProjectMeta project={previewProject} />
          </div>
        </Container>
      </Section>

      <Section id="previews" className="guide-section" size="xl">
        <Container>
          <GuideHeading number="09" title="Project preview" note="Two image-led studies establish an editorial direction. These are layout prototypes, not final work cards." />
          <div className="guide-preview-list">
            <div>
              <span className="guide-caption">01 / Wide image-led</span>
              <ProjectPreview project={previewProject} number="01" />
            </div>
            <div>
              <span className="guide-caption">02 / Split composition</span>
              <ProjectPreview project={previewProject} number="01" layout="split" />
            </div>
          </div>
        </Container>
      </Section>

      <Section id="imagery" className="guide-section">
        <Container>
          <GuideHeading number="10" title="Image layouts" note="Project imagery can fill the viewport, sit within the grid, pair with other imagery or take an intentional offset." />
          <span className="guide-caption">Full bleed</span>
        </Container>
        <div className="guide-full-bleed"><MediaFrame label="Full-width project image" ratio="wide" /></div>
        <Container>
          <div className="guide-image-pair">
            <MediaFrame label="Landscape / contained" ratio="landscape" treatment="contained" />
            <MediaFrame label="Portrait / full" ratio="portrait" />
          </div>
          <div className="guide-image-offset">
            <MediaFrame label="Offset composition" ratio="landscape" />
          </div>
        </Container>
      </Section>

      <Section id="surfaces" tone="dark" size="lg" className="guide-dark-section">
        <Container>
          <GuideHeading number="11" title="Inverted surface" note="A darker moment gives a statement or transition extra weight without alternating every section." />
          <div className="guide-dark-content">
            <p className="type-display">Design and development, in parallel.</p>
            <div>
              <p className="type-body-large">A limited contrast treatment for a studio statement, a case-study transition or a final invitation.</p>
              <TextLink to="/contact" arrow>Start a conversation</TextLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="rules" className="guide-section">
        <Container>
          <GuideHeading number="12" title="Rules & motion" note="Single rules define structure. Paired rules offer a quiet reference to the name." />
          <div className="guide-rule-examples">
            <div><span className="guide-caption">Standard rule</span><Divider /></div>
            <div><span className="guide-caption">Paired rule</span><Divider paired /></div>
          </div>
          <div className="guide-motion-note">
            <SectionLabel>Motion principles</SectionLabel>
            <p>Movement should clarify interaction or hierarchy, remain subtle and never be required to use the interface. Nothing moves continuously or animates simply because it enters the viewport. Larger motion belongs only to purposeful transitions, and reduced-motion preferences are respected.</p>
          </div>
        </Container>
      </Section>
    </>
  )
}
