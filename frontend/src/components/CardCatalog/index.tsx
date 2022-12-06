import './styles.css';
import carImg from '../../assets/car-card.png';

export default function CardCatalog() {
  return (
    <>
      <div className='ct-card-container'>
        <div className='ct-card ct-mg-bottom-25'>
          <div className='ct-card-img'>
            <img src={carImg} alt="Carro" />
          </div>
          <p className='ct-card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem neque asperiores at, minima excepturi vero.</p>
        </div>
      </div>
    </>
  );
}