
import ReactDOM from 'react-dom/client'
import './index.css'
import one from './assets/dog.jpg'
import two from './assets/dog1.jpg'
import three from './assets/dog2.jpg'
import four from './assets/dog3.jpg'
import five from './assets/dog4.jpg'
import six from './assets/dog5.jpg'
import seven from './assets/dog6.jpg'
import eight from './assets/dog7.jpg'


const imgList = [
  {
    dog_pic: one, para:'Happy dog'
  },
  {
    dog_pic: two, para:'A cute Litter'
  },
  {
    dog_pic: three, para: 'Joyful Besenji'
  },
  {
    dog_pic: four, para: 'Lovely dog'
  },
  {
    dog_pic: five, para: 'Duke puppies'
  },
  {
    dog_pic: six, para: 'Coton de Tulear'
  },
  {
    dog_pic: seven, para: 'Cute dog'
  },
  {
    dog_pic: eight, para: "Julie's Rabbit ears"
  }
]


function Img_card(props) {
  return (
    <div className='gallery-item'>
      <p>
      <img src={props.dog_pic} alt='images'/> <h3>{props.para}</h3>    
      </p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div className='gallery'>
    {
      imgList.map((pic) => (
      <Img_card
      dog_pic={pic.dog_pic}
      para={pic.para} />
      ))
    }

  </div>

);
