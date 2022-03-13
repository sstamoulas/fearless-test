import Logo from './../../logo.svg';

import './loading.styles.css';

const Loading = () => (
  <div className='loading'>
    <img className='loading-image' src={Logo} />
  </div>
);

export default Loading;
