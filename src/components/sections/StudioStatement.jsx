import { Container, Grid, Section } from '../layout/Primitives.jsx'
import { Divider, SectionLabel } from '../ui/index.jsx'
import { homeContent } from '../../data/home.js'
import StudioDimension3D from './StudioDimension3D.jsx'

export default function StudioStatement() {
  return (
    <Section size="xl" className="home-statement" aria-labelledby="studio-statement-title">
      <Container>
        <Divider paired />
        <Grid className="home-statement__grid">
          <SectionLabel>How we work</SectionLabel>
          <div className="home-statement__content-wrap">
            <h2 id="studio-statement-title">{homeContent.statement.headline}</h2>
            <p>{homeContent.statement.description}</p>
          </div>
          <div className="home-statement__visual-wrap">
            <StudioDimension3D />
          </div>
        </Grid>
      </Container>
    </Section>
  )
}

