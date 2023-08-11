import { HashLink } from 'react-router-hash-link';

export default function NoPage() {
  return (
    <div className="no-page">
      <div className="no-page--text">
        <h3 className='no-page--text-error'>
          Error: No page found!!
        </h3>
        <HashLink className='btn' to='/#home'>HOME</HashLink>
      </div>
    </div>
  )
}