# Enzo's DSA Interview Portfolio

A responsive static portfolio for DSA-Sec 2027, built with semantic HTML, modern CSS, and lightweight JavaScript. It is ready for GitHub Pages and includes a 15-second HyperFrames profile composition.

## Preview the website

Open `index.html` directly, or run a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a public GitHub repository and upload these files to its root.
2. In the repository, open **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then save.

## HyperFrames introduction video

The composition is at `hyperframes/index.html`. It uses HyperFrames-compatible composition attributes and a seekable GSAP timeline.

Requirements: Node.js 22+ and FFmpeg.

```bash
cd hyperframes
npx hyperframes preview
npx hyperframes render
```

HyperFrames documentation: <https://hyperframes.heygen.com/introduction>

## Content note

Before publishing publicly, review all names, school details, dates, awards, project links, and interview answers for accuracy.
