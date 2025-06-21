import '../../app/globals.css';
import WeatherFetch from '../components/WeatherFetch';
import WeatherInfo from '../components/WeatherInfo';

export default function Home() {
  return (
    <div>
      <div className='bg-[#303030] w-[400px] h-[700px] rounded-md'>
        <WeatherFetch />
        <WeatherInfo></WeatherInfo>
      </div>
    </div>
  );
}
