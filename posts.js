/*
  Add new posts here.

  Each post needs:
    - title:   the post title
    - date:    a short display date, e.g. "Mar 2026"
    - excerpt: one or two sentences describing the post
    - url:     the path to the post's page, e.g. "posts/my-post.html"
               (see posts/post-template.html — duplicate it for each new post)

  Newest posts should go at the TOP of each array.

  The "pics" array works differently — each entry needs:
    - src:     path to the image, e.g. "pics/photo1.jpg"
    - caption: a short caption shown under the photo

  The "facts" array is just a list of short strings — one fact per line.
*/

const posts = {
  technical: [
    {
      title: "Example: Notes on debugging a tricky race condition",
      date: "placeholder",
      excerpt: "A short summary of what the post covers, written so someone skimming the list knows whether to click in.",
      url: "posts/post-template.html"
    },
    {
      title: "Example: Why I switched my build tool",
      date: "placeholder",
      excerpt: "One or two sentences on the problem, the option considered, and what changed as a result.",
      url: "posts/post-template.html"
    }
  ],

  personal: [
    {
      title: "Teaching English to girls in Afghanistan",
      date: "13/09/2026",
      excerpt: "I tutored english to girls in Afghanistan virtually for 4 months, here's what I learned...",
      url: "posts/afghanistan-tutoring.html"
    },
    {
      title: "Mindsets that form the way I see the world",
      date: "13/09/2026",
      excerpt: "One or two sentences that give a reader a reason to open this one.",
      url: "posts/post-template.html"
    }
  ],

  pics: [
    {
      src: "pics/crochet-piece.png",
      caption: "Filet Crochet Deer Tapistry"
    }
  ],

  facts: [
    "I am obsessed with raccoons, they are my favourite animal. ",
    "I love to do filet crochet.",
    "I have donated blood 6 times.",
    "I'm Canadian, born and raised in Toronto. I often get made fun of for how I say certain words, especially bag."
  ]
};