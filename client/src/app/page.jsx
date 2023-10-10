"use client"

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import logoSmartRecruiters from "@/images/logos/smartrecruiters.svg"
import logoIterable from "@/images/logos/iterable.svg"
import logoMichigan from "@/images/logos/michigan.svg"
import logoCase from "@/images/logos/case.svg"
import logoIrvine from "@/images/logos/irvine.svg"
import image1 from '@/images/photos/familyshot.jpg'
import image2 from '@/images/photos/headshotwcomputer.jpeg'
import image3 from '@/images/photos/speakingConference.jpg'
import image4 from '@/images/photos/merage.jpg'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ColumnIcon(props) {
  return (
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      viewBox="0 0 256 256"
      {...props}
    >
      <g
        fill="#000"
        strokeMiterlimit="10"
        strokeWidth="1"
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
      >
        <path d="M11.596 27.637C5.202 27.637 0 22.436 0 16.042S5.202 4.445 11.596 4.445H45a1 1 0 010 2H11.596C6.305 6.445 2 10.75 2 16.042c0 5.291 4.305 9.596 9.596 9.596a1 1 0 010 1.999z"></path>
        <path d="M11.638 27.637a1 1 0 010-2c4.574 0 8.295-3.721 8.295-8.294a1 1 0 012 0c0 5.676-4.619 10.294-10.295 10.294z"></path>
        <path d="M69.067 18.343H20.933a1 1 0 01-1-1 6.443 6.443 0 00-6.436-6.436 1 1 0 010-2c4.313 0 7.88 3.254 8.376 7.436h46.252c.496-4.182 4.064-7.436 8.377-7.436a1 1 0 110 2 6.443 6.443 0 00-6.436 6.436.998.998 0 01-.999 1z"></path>
        <path d="M6.805 17.599a1 1 0 01-1-1c0-4.242 3.451-7.692 7.692-7.692a1 1 0 010 2 5.699 5.699 0 00-5.692 5.692 1 1 0 01-1 1z"></path>
        <path d="M9.091 21.9a.997.997 0 01-.559-.171 6.184 6.184 0 01-2.728-5.13 1 1 0 012 0c0 1.393.69 2.691 1.847 3.473a1 1 0 01-.56 1.828zM78.404 27.637a1 1 0 110-2c5.291 0 9.596-4.305 9.596-9.596 0-5.292-4.305-9.596-9.596-9.596H45a1 1 0 010-2h33.404C84.798 4.445 90 9.647 90 16.042s-5.202 11.595-11.596 11.595z"></path>
        <path d="M78.362 27.637c-5.677 0-10.295-4.618-10.295-10.294a1 1 0 112 0c0 4.574 3.721 8.294 8.295 8.294a1 1 0 110 2zM83.195 17.599a1 1 0 01-1-1 5.699 5.699 0 00-5.692-5.692 1 1 0 110-2c4.241 0 7.692 3.451 7.692 7.692a1 1 0 01-1 1z"></path>
        <path d="M80.909 21.9a1 1 0 01-.56-1.828 4.188 4.188 0 001.847-3.473 1 1 0 112 0 6.184 6.184 0 01-2.728 5.13.995.995 0 01-.559.171zM71.627 24.736H18.373a1 1 0 010-2h53.254a1 1 0 110 2z"></path>
        <path d="M66.422 68.65H23.579a1 1 0 01-1-1V23.736a1 1 0 011-1h42.843a1 1 0 011 1V67.65a1 1 0 01-1 1zm-41.843-2h40.843V24.736H24.579V66.65z"></path>
        <path d="M74.49 76.378H15.509a1 1 0 01-1-1c0-4.813 3.916-8.728 8.728-8.728h43.525c4.813 0 8.728 3.915 8.728 8.728a1 1 0 01-1 1zm-57.907-2h56.833c-.484-3.237-3.283-5.728-6.653-5.728H23.237c-3.37 0-6.169 2.491-6.654 5.728z"></path>
        <path d="M78.362 85.555H11.638a1 1 0 01-1-1v-9.177a1 1 0 011-1h66.725a1 1 0 011 1v9.177c-.001.552-.448 1-1.001 1zm-65.724-2h64.725v-7.177H12.638v7.177zM40.711 68.65h-9.423a1 1 0 01-1-1V34.644c0-3.149 2.562-5.711 5.711-5.711s5.711 2.562 5.711 5.711V67.65a.998.998 0 01-.999 1zm-8.422-2h7.423V34.644c0-2.046-1.665-3.711-3.711-3.711s-3.711 1.665-3.711 3.711V66.65zM58.712 68.65h-9.424a1 1 0 01-1-1V34.644c0-3.149 2.563-5.711 5.712-5.711s5.712 2.562 5.712 5.711V67.65a1 1 0 01-1 1zm-8.424-2h7.424V34.644c0-2.046-1.665-3.711-3.712-3.711s-3.712 1.665-3.712 3.711V66.65z"></path>
        <circle cx="13.495" cy="16.305" r="1.265"></circle>
        <circle cx="76.495" cy="16.305" r="1.265"></circle>
      </g>
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        {role.company === "University of Michigan" | role.company === "The Paul Merage School of Business at University of California-Irvine" ?
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized /> :
        <Image src={role.logo} alt="" className="h-10 w-10" unoptimized />
        }
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {

  let resume = [
    {
      company: 'SmartRecruiters',
      title: 'Solutions Consultant',
      logo: logoSmartRecruiters,
      start: '2021',
      end: {
        label: '2022',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Iterable',
      title: 'Business Consultant',
      logo: logoIterable,
      start: '2019',
      end: '2019',
    },
    {
      company: 'SmartRecruiters',
      title: 'Implementation Consultant',
      logo: logoSmartRecruiters,
      start: '2018',
      end: '2019',
    },
    {
      company: 'SmartRecruiters',
      title: 'Customer Success Associate',
      logo: logoSmartRecruiters,
      start: '2017',
      end: '2018',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button 
        variant="secondary" 
        className="group mt-6 w-full"
        onClick={ () => {
          window.open("/resume.pdf", "_blank")
          }
        }
      >
        View Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Education() {
  let education = [
    {
      company: 'The Paul Merage School of Business at University of California-Irvine',
      title: 'Masters in Business Administration',
      logo: logoIrvine,
      start: '2023',
      end: "2025",
    },
    {
      company: 'Case Western Reserve University',
      title: 'Full stack coding bootcamp certificate',
      logo: logoCase,
      start: '2020',
      end: '2020',
    },
    {
      company: 'University of Michigan',
      title: 'BA in PPE and Spanish',
      logo: logoMichigan,
      start: '2011',
      end: "2015",
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <ColumnIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Education</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {education.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Product enthusiast, MBA candidate, and amateur music artist
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Andrew, a first-year MBA student at the Paul Merage school of Business at UC Irvine. I’m the founder of Vibify, a platform agnostic music community app helping users curate vibes where shared songs become ongoing playlists.
            
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/amurphy37"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://www.instagram.com/b.andrewmurphy/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/amurphy37"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/b-andrew-murphy/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Education />
          </div>
        </div>
      </Container>
    </>
  )
}
