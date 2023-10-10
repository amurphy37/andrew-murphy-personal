import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Music drives my soul',
  description:
    'Few musical tastes and mixes that empower and feed my creativity.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Music provides an outlet to express creativity that intertwines my passion, taste and personality."
      intro="I started on the piano when I was 5. Throughout my life music has not only been an oasis in time of need, but a driving force of community and creativity. Just as I find fulfillment in solving technical problems for customers, I enjoy curating vibes for curious listeners in the form of my DJ mixes. "
    >
      <div className="space-y-20">
          <iframe
        width="100%"
        height={300}
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/852088156&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      />
      <div
        style={{
          fontSize: 10,
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: 100
        }}
      >
        <a
          href="https://soundcloud.com/amurphy37"
          title="Andrew Murphy"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Andrew Murphy
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/amurphy37/independence-day-mix"
          title="Independence Day Mix"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Independence Day Mix
        </a>
      </div>
  </div>
  <div className="space-y-20">
  <iframe
    width="100%"
    height={300}
    scrolling="no"
    frameBorder="no"
    allow="autoplay"
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1211832859&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  />
  <div
    style={{
      fontSize: 10,
      color: "#cccccc",
      lineBreak: "anywhere",
      wordBreak: "normal",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      fontFamily:
        "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
      fontWeight: 100
    }}
  >
    <a
      href="https://soundcloud.com/amurphy37"
      title="Andrew Murphy"
      target="_blank"
      style={{ color: "#cccccc", textDecoration: "none" }}
    >
      Andrew Murphy
    </a>{" "}
    ·{" "}
    <a
      href="https://soundcloud.com/amurphy37/01-rec-2022-02-07"
      title="Dante’s Disco Inferno"
      target="_blank"
      style={{ color: "#cccccc", textDecoration: "none" }}
    >
      Dante’s Disco Inferno
    </a>
  </div>
  </div>
  <div className="space-y-20">
  <iframe
    width="100%"
    height={300}
    scrolling="no"
    frameBorder="no"
    allow="autoplay"
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1337517289&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  />
  <div
    style={{
      fontSize: 10,
      color: "#cccccc",
      lineBreak: "anywhere",
      wordBreak: "normal",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      fontFamily:
        "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
      fontWeight: 100
    }}
  >
    <a
      href="https://soundcloud.com/amurphy37"
      title="Andrew Murphy"
      target="_blank"
      style={{ color: "#cccccc", textDecoration: "none" }}
    >
      Andrew Murphy
    </a>{" "}
    ·{" "}
    <a
      href="https://soundcloud.com/amurphy37/late-night-minimal-tech-mix"
      title="Late Night Minimal Tech Mix"
      target="_blank"
      style={{ color: "#cccccc", textDecoration: "none" }}
    >
      Late Night Minimal Tech Mix
    </a>
  </div>
  </div>
  <div className="space-y-20">
  <iframe
    width="100%"
    height={300}
    scrolling="no"
    frameBorder="no"
    allow="autoplay"
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1049092648&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  />
  <div
    style={{
      fontSize: 10,
      color: "#cccccc",
      lineBreak: "anywhere",
      wordBreak: "normal",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      fontFamily:
        "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
      fontWeight: 100
    }}
  >
    <a
      href="https://soundcloud.com/amurphy37"
      title="Andrew Murphy"
      target="_blank"
      style={{ color: "#cccccc", textDecoration: "none" }}
    >
      Andrew Murphy
    </a>{" "}
    ·{" "}
    <a
      href="https://soundcloud.com/amurphy37/sonando"
      title="Soñando"
      target="_blank"
      style={{ color: "#cccccc", textDecoration: "none" }}
    >
      Soñando
    </a>
  </div>
  </div>
  <div className="space-y-20">
  <iframe
    width="100%"
    height={300}
    scrolling="no"
    frameBorder="no"
    allow="autoplay"
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/807308788&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  />
  <div
    style={{
      fontSize: 10,
      color: "#cccccc",
      lineBreak: "anywhere",
      wordBreak: "normal",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      fontFamily:
        "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
      fontWeight: 100
    }}
  >
    <a
      href="https://soundcloud.com/amurphy37"
      title="Andrew Murphy"
      target="_blank"
      style={{ color: "#cccccc", textDecoration: "none" }}
    >
      Andrew Murphy
    </a>{" "}
    ·{" "}
    <a
      href="https://soundcloud.com/amurphy37/april-2020-mix"
      title="April 2020 Mix"
      target="_blank"
      style={{ color: "#cccccc", textDecoration: "none" }}
    >
      April 2020 Mix
    </a>
  </div>

  </div>


    </SimpleLayout>
  )
}
