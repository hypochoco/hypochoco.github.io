import './../index.css'
import { HashLink } from 'react-router-hash-link';

export default function Grid({props}) {
  return (
    <div className='portfolio'>
      {props.items.map((item, itemNumber) => {
        return <GridItem key={itemNumber} props={item} />
      })}
    </div>
  )
}

function GridItem({props}) {
  return (
    <HashLink className='portfolio__item' to={props.page + '#nav'}>
      <div className='portfolio__caption'>
        <div>{props.title}</div>
        <div className='caption__more'>
          <div>MORE</div>
          <img className='caption__side-arrow' src='./scroll-down.webp'/>
        </div>
      </div>
      <img className='portfolio__img' src={props.source} alt={props.title} />
    </HashLink>
  )
}