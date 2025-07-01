import '../../app/globals.css';
import EmotionSelector from '../components/EmotionSelector';
import InitGeolocation from '../components/InitGeolocation';
import KeywordGenerator from '../components/KeywordGenerator';
import InitWeather from '../components/InitWeather';
import Welcome from '../components/Welcome';

export default function Home() {
  return (
    <div className='w-screen h-svh flex items-center justify-center bg-[#f5f5f5]'>
      <div className='w-[500px] h-[100vh] bg-[#eeefd8] rounded-[50px] p-4 flex flex-col items-center'>
        <InitGeolocation />
        <InitWeather />
        <Welcome />
        <EmotionSelector />
        <KeywordGenerator />
      </div>
    </div>
  );
}
