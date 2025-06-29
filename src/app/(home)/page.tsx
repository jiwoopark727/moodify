import '../../app/globals.css';
import InitGeolocation from '../components/InitGeolocation';
import WeatherInfo from '../components/WeatherInfo';

export default function Home() {
  return (
    <div className='grid grid-flow-col grid-cols-2'>
      <div className='bg-[#b1b1b1] w-[600px] h-[700px] rounded-md pt-[200px] pl-[20px]'>
        <InitGeolocation />
        <WeatherInfo />
      </div>
    </div>
  );
}
