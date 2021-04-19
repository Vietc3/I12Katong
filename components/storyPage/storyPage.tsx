import DynamicComponent from '../dynamic/Dynamic'
import SbEditable from 'storyblok-react'

const StoryPage = ({content}:any) => (
  <SbEditable content={content}>
    <main className="py-4">
      {content.body.map((blok:any) =>
        <DynamicComponent blok={blok} key={blok._uid} />
      )}
    </main>
  </SbEditable>
)

export default StoryPage