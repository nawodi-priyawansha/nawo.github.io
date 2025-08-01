export interface Project {
  title: string
  shortDescription: string
  priority: number
  cover: string
  livePreview?: string
  githubLink?: string
  visitors?: string
  earned?: string
  githubStars?: string
  ratings?: string
  numberOfSales?: string
  type: string
  siteAge?: string
  technologies?: string[]
}

export interface Heading {
  id: string
  title: string
  items: Heading[]
}

export interface Testimonial {
  name: string
  title?: string
  feedback: string
  image: string
  stars: number
  createdAt: string
}

export interface Education {
  name: string
  univercity?: string
  time: string
  createdAt: string
}

export interface SkillPeramid {
  src: string;
  width: number;
  height: number;
  index: number;
}