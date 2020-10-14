import React from "react";
import { useFormik } from 'formik';
import { Button } from "semantic-ui-react";
import { useStateValue } from "../state";

const PostForm: React.FC = () => {
  const [ { theme }, ] = useStateValue();
  const formik = useFormik({
    initialValues: {
      title: '',
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
            id="title"
            name="title"
            type="text"
            placeholder="Add title"
            onChange={formik.handleChange}
            value={formik.values.title}
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
        <div className="ui large input w-100 pt-1">
          <input
            id="gif"
            name="gif"
            type="gif"
            placeholder="Add a gif"
            onChange={formik.handleChange}
            value={formik.values.gif}
          />
        </div>
        <Button type="submit" className="mt-1 w-100"
         color={theme === 'dark' ? 'grey': 'green'} inverted={theme === 'dark'}>
           Publish
        </Button>
      </form>
    </div>
  );
};

export default PostForm;
