import '../../app/globals.css';
import EmotionSelector from '../components/EmotionSelector';
import InitGeolocation from '../components/InitGeolocation';
import KeywordGenerator from '../components/KeywordGenerator';
import InitWeather from '../components/InitWeather';
import Welcome from '../components/Welcome';
import Navigation from '../components/Navigator';
import GenerateButton from '../components/GenerateButton';

export default function HomePage() {
  return (
    <div className='w-screen h-svh flex items-center justify-center'>
      <InitGeolocation />
      <InitWeather />
      <div className='w-[450px] h-[100vh] bg-[#fcfcfc] rounded-[70px] p-4 flex flex-col items-center'>
        <Welcome />
        <EmotionSelector />
        <GenerateButton />
        <Navigation />
      </div>
      <KeywordGenerator />
    </div>
  );
}
