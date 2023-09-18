import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';
// {
//   /* <a href="https://www.freepik.com/free-vector/smart-contract-agreement-electronic-signature-isometric-composition-with-business-people-gadgets-vector-illustration_37420789.htm#query=smart%20contract&position=3&from_view=keyword&track=ais">Image by macrovector</a> */
//   // <a href="https://www.freepik.com/free-vector/api-concept-illustration_28772962.htm#query=backend&position=3&from_view=search&track=sph">Image by storyset</a> on Freepik
//   // <a href="https://www.freepik.com/free-vector/back-end-development-concept-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_26432583.htm#query=backend&position=0&from_view=search&track=sph">Image by vector4stock</a> on Freepik
//   // <a href="https://www.freepik.com/free-vector/application-programming-interface-concept-illustration_25625375.htm#query=backend&position=1&from_view=search&track=sph">Image by storyset</a> on Freepik
//   // <a href="https://www.freepik.com/free-vector/web-3-0-technology-isometric-with-blockchain-process-vector-illustration_31756142.htm#query=blockchain%20integration&position=0&from_view=search&track=ais">Image by macrovector</a> on Freepik
// }
const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      // console.log(data);
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Code</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
