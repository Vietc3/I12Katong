import SbEditable from "storyblok-react";
import Placeholder from "./Placeholder";
import Carousel from "../carousels/Carousel";
import ListDealsCard from "../home/ListDealsCard";
import ListEventsCard from "../home/ListEventsCard";
import ListStore from "../stores/ListStore";
import ListEvent from "../events/ListEvent";

/*
 * Our bloks dictionnary.
 * It must reflects our Storyblok nestables components.
 * Keys are the same than their name in Storyblok.
 */
const Components: any  = {
    "list-carousels" : Carousel,
    "list-deal-lastest": ListDealsCard,
    "list-event-lastest": ListEventsCard,
    "list-all-stores":ListStore,
    "list-all-events":ListEvent,
};

const Dynamic = ({ blok}: any) => {

  // Check if the blok can be rendered
  if (typeof Components[blok.component] !== "undefined") {
    
    const Component = Components[blok.component];
    // Add Storyblok layout
    return (
      <SbEditable content={blok}>
        <Component blok={blok} />
      </SbEditable>
    );
  }

  // If not, render an error message.
  return <Placeholder componentName={blok.component} />;
};

export default Dynamic;