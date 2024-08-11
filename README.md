# Web Developer Portfolio in Astro 

This repo contains a Astro.js portfolio built during Skillaroo's workshop on 10 Aug 2024.

## About the Workshop

 The goal of the workshop **"Build your Web Developer Portfolio"** was to build a stellar portfolio page using HTML, CSS, JavaScript, Markdown, and Astro.js. Perfect for recent grads and tech career starters to showcase their skills, projects, and blogs.


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
3. To update metadata, go to `src/layouts/ui/Meta.astro`
4. To update color themes, go to `src/styles/global.css`

## Running the project

The project can be run using `npm run dev`

You can also build the project and generate static assets using `npm run build`

## Further Work

- [ ] Sitemap
- [ ] Add subtle animations
- [ ] Add proper icons in SideFrameNav
- [ ] Improve docs

## License

This project is licensed under the MIT License with an attribution clause. See the [LICENSE](LICENSE) file for details.

When using this template, please provide appropriate credit and link back to this repository.