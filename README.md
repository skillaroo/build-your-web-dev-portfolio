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
main:
  headings: 
    - "I am Ram Ghale"
    - "Software Engineer and Designer"
  paragraphs:
    - "I love to build things that make a difference in people's lives. I am passionate about technology, business, and storytelling. I am always looking for new opportunities to learn and grow."
    - "I am currently working as a Software Engineer at a startup in Kathmandu, Nepal. I am also working on a few side projects and businesses. I am always open to new opportunities and collaborations."
  button:
    text: "Get in touch"
    link: "https://bishal.io"

about:
  title: "About Me"
  paragraphs: 
    - "With a seasoned journey spanning over a decade in software engineering 🧑‍💻, I specialize in sculpting robust and scalable solutions using emerging and established tech stacks. Recent experience in Kubernetes, GCP, GoLang, CI/CD Pipeline in GitLab, and NodeJs, my toolkit extends to technical solution design, microservices architectures, platform engineering, event based architectures, and people leadership. Let's harness the future of tech together 🌏."
    - "I am a strong advocate for diversity and inclusion in tech, and I am always looking for ways to give back to the community. I am a mentor, speaker, and writer. I am also a co-founder of a tech community in Nepal."
    - "I am a lifelong learner and I am always looking for new opportunities to learn and grow. I am currently learning about entrepreneurship, business, and storytelling. I am also working on a few side projects and businesses."

get_in_touch:
  title: "Get in touch"
  paragraphs:
    - "In case you would like to get in touch with me, you can always send me an email"
  button:
    text: "Send me an Email"
    link: "mailto://myemail@address.com"
```

2. Update your image on `src/assets/dp.png`
3. To update metadata, color themes etc. about your website you can edit `src/layouts/Layout.astro`

## Running the project

The project can be run using `npm run dev`

## TODO

Here are some active list of identified limitations, bugs etc.

- [ ] Include more meta tags
- [ ] Toggle Dark/Light mode
- [ ] Add subtle animations
- [ ] Add GA4 analytics
- [ ] Improve docs