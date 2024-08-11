# Skillaroo Web Dev Portfolio Workshop

This repo contains code for the portfolio built during Skillaroo's workshop on 10 Aug 2024

## Workshop Details

In just 4 hours, you'll learn to build a stellar portfolio page using HTML, CSS, JavaScript, Markdown, and Astro.js. Perfect for recent grads and tech career starters!

✨ What you'll get:

- Introduction to web development basics (HTML, CSS, JavaScript)
- Hands-on workshop with Astro.js
- Best practices for creating an impactful portfolio
- Personal branding in tech
- How to leverage your portfolio for job searching
- Q&A session with experienced developers
- Your very own portfolio website
- FREE domain name

## How to Use

1. Edit `src/assets/site-config.yaml` to set up the site. The YAML config looks like this

```yaml
site_title: "Ram Ghale"
site_description: "Software Engineer and Designer"
email: ram@ram-ghale.netlify.app
socials:
  twitter: "https://twitter.com/ramghale"
  linkedin: "https://linkedin.com/in/ramghale"
  github: "https://github.com/ramghale"
main:
  headings: 
    - "I am Ram Ghale"
    - "Software Engineer and Designer"
  paragraphs:
    - "I love to build things that make a difference in people's lives. I am passionate about technology, business, and storytelling. I am always looking for new opportunities to learn and grow."
  button:
    text: "Get in touch"
    link: "https://ram-ghale.netlify.app"

about:
  title: "About Me"
  paragraphs: 
    - "I am a strong advocate for diversity and inclusion in tech, and I am always looking for ways to give back to the community. I am a mentor, speaker, and writer. I am also a co-founder of a tech community in Nepal."
    - "I am a lifelong learner and I am always looking for new opportunities to learn and grow. I am currently learning about entrepreneurship, business, and storytelling. I am also working on a few side projects and businesses."

get_in_touch:
  title: "Get in touch"
  paragraphs:
    - "In case you would like to get in touch with me, you can always send me an email"
  button:
    text: "Send me an Email"
    link: "mailto://ram@ram-ghale.netlify.app"
```

2. Update your image on `src/assets/dp.png`
3. To update metadata, color themes etc. about your website you can edit `src/layouts/Layout.astro`

## Running the project

The project can be run using `npm run dev`

## TODO

Here are some active list of identified limitations, bugs etc.

- [ ] Sitemap
- [ ] Add subtle animations
- [ ] Add proper icons in SideFrameNav
- [ ] Improve docs