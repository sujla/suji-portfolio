import gridArtwork from '../../../assets/hero-concepts/grid-v3-transparent.png';
import './sculpture-visual.css';

export function HeroVisual() {
  return (
    <div className="hero-visual sculpture-stage">
      <img className="sculpture-artwork" src={gridArtwork} alt="" draggable="false" />
    </div>
  );
}
