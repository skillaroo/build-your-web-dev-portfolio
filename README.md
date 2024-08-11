# Web Developer Portfolio in Astro 

This repo contains a Astro.js portfolio built during Skillaroo's workshop on 10 Aug 2024.

## Skillaroo Web Dev Portfolio Workshop Details

The workshop was held online on 10 Aug 2024. The goal of the worksgop to build a stellar portfolio page using HTML, CSS, JavaScript, Markdown, and Astro.js. Perfect for recent grads and tech career starters!


## Customizing the website

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

You can also build the project and generate static assets using `npm run build`

## Further Work

Here are some ideas for implementing on this project

- [ ] Sitemap
- [ ] Add subtle animations
- [ ] Add proper icons in SideFrameNav
- [ ] Improve docs