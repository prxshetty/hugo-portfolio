# Personal Portfolio Website

A modern, minimalist portfolio website built with Hugo, featuring a dark/light theme toggle and responsive design.

## Features

- 📱 Fully responsive design
- ⚡ Fast loading times (Built with Hugo)
- 🎨 Modern minimalist design
- 🔤 Space Grotesk typography
- 🎯 Sections for:
  - About
  - Experience
  - Projects
  - Blog
  - Contact
- ⌚ Real-time local time display
- 🔗 Social media integration

## Tech Stack

- [Hugo](https://gohugo.io/) - Static Site Generator
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- JavaScript - Interactivity
- Go - basic logic
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) - Typography

## Getting Started

1. **Prerequisites**
   - Install [Hugo](https://gohugo.io/installation/)
   - Install [Git](https://git-scm.com/)

2. **Installation**
   ```bash
   # Clone the repository
   git clone https://github.com/yourusername/hugo-prxshetty.git

   # Navigate to the project directory
   cd hugo-prxshetty

   # Start the Hugo server
   hugo server -D
   ```

3. **Customization**
   - Edit `config.toml` for basic site configuration
   - Modify content in the `content/` directory
   - Customize theme in `themes/prxshetty-minimalistic/`

## Configuration

Update the following in `config.toml`:

```toml
[params]
  name = "Your Name"
  description = "Your Description"
  location = "Your Location"
  email = "your.email@example.com"
  github = "https://github.com/yourusername"
  linkedin = "https://linkedin.com/in/yourusername"
  twitter = "https://twitter.com/yourusername"
```

## Deployment

1. Build the site:
   ```bash
   hugo --minify
   ```

2. Deploy the `public/` directory to your hosting provider

## Contributing

Feel free to submit issues and enhancement requests!

## Contact
For template inquiries or support:
- Email: [prxshetty@gmail.com](mailto:prxshetty@gmail.com)
- Twitter: [@prxshetty](https://twitter.com/prxshetty)

---
Built with ❤️ using Hugo