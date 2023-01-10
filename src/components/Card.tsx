import { CardProps } from './types/country.types';

function Card({ data }: CardProps) {
  const { name, flag } = data;

  return (
    <div className="card">
      <img src={flag} />
      <p>{name}</p>
    </div>
  );
}

export default Card;
