import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <FaGithub />
    </div>
    <div href="https://twitter.com/0xdhruva">
      <BsTwitter />
    </div>
    <div>
      <BsLinkedin />
    </div>
  </div>
);

export default SocialMedia;
