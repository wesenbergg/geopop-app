import React, { useContext, useState } from "react";
import { useFormik } from 'formik';
import { Button } from "semantic-ui-react";
import { useStateValue } from "../state";
import { Carousel, Gif, SearchBar, SearchContext } from "@giphy/react-components";
import { IGif } from "@giphy/js-types";

const PostForm: React.FC = () => {
  const [ { theme }, ] = useStateValue();
  const [curGif, setCurGif] = useState<IGif | null>(); //new post
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { fetchGifs, searchKey, setSearch } = useContext(SearchContext);
  const formik = useFormik({
    initialValues: {
      text: '',
      location: '',
      gif: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="pl-1">
      <h1>New Post Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="ui large input w-100 pt-1">
          <input
            id="text"
            name="text"
            type="text"
            placeholder="Add text"
            onChange={formik.handleChange}
            value={formik.values.text}
          />
        </div>
        <div className="ui large input w-100 pt-1">
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Add location"
            onChange={formik.handleChange}
            value={formik.values.location}
          />
        </div>

        {curGif ?
        <>
          <p className="lead mb-0 mt-2">Preview</p>
          <Gif className="gif-preview" hideAttribution noLink gif={curGif} height={125} width={200} />
        </>: ''}
        <div className="ui large input w-100 pt-1">
          <SearchBar placeholder="Mood in GIF..." className="gif-input w-100" />
        </div>
        <Carousel hideAttribution gifHeight={150} key={searchKey} fetchGifs={fetchGifs} onGifClick={(gif, e) => {
            console.log("gif", gif);
            e.preventDefault();
            setCurGif(gif);
          }} />
          
        <Button type="submit" className="mt-1 w-100"
         color={theme === 'dark' ? 'grey': 'green'} inverted={theme === 'dark'}>
           Publish
        </Button>
      </form>
    </div>
  );
};

export default PostForm;
