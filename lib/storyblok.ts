import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
    accessToken: 'R9YpXZq6PsWvSyidvFckDQtt',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
})

export default Storyblok
