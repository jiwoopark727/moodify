import '../../app/globals.css';
import EmotionSelector from '../components/EmotionSelector';
import InitGeolocation from '../components/InitGeolocation';
import KeywordGenerator from '../components/KeywordGenerator';
import InitWeather from '../components/InitWeather';
import Welcome from '../components/Welcome';
import Navigator from '../components/Navigator';
import GenerateButton from '../components/GenerateButton';

export default function HomePage() {
  return (
    <div className='min-h-[100dvh] w-full flex items-center justify-center bg-gray-300'>
      <InitGeolocation />
      <InitWeather />
      <div className='w-full max-w-[450px] h-[100dvh] bg-[#fcfcfc] p-4 flex flex-col items-center'>
        <Welcome />
        <EmotionSelector />
        <GenerateButton />
        <Navigator />
      </div>
      <KeywordGenerator />
    </div>
  );
}
