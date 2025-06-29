import '../../app/globals.css';
import EmotionSelector from '../components/EmotionSelector';
import InitGeolocation from '../components/InitGeolocation';
import KeywordGenerator from '../components/KeywordGenerator';
import WeatherInfo from '../components/WeatherInfo';

export default function Home() {
  return (
    <div className='grid grid-flow-col grid-cols-2'>
      <div className='bg-[#b1b1b1] w-[600px] h-[700px] rounded-md pt-[200px] pl-[20px]'>
        <InitGeolocation />
        <WeatherInfo />
        <br />
        <h2 className='text-[14px] font-bold'>오늘 기분을 선택해 주세요</h2>
        <EmotionSelector />
        <KeywordGenerator />
      </div>
    </div>
  );
}
