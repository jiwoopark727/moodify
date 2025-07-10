export default function MoodMemo() {
  return (
    <div>
      <textarea
        placeholder=' 음악을 들으며 현재 기분이 어떤지 적어보아요'
        className='w-full p-2 border-1 border-[#4F7942] rounded-md outline-[#4F7942] resize-none'
        rows={10}
      />
      <div className='flex justify-center'>
        <button className='w-full mt-[2vh] cursor-pointer border-2 border-[#4F7942] px-4 py-2 rounded-xl hover:bg-[#4F7942] hover:text-[#fff]'>
          저장
        </button>
      </div>
    </div>
  );
}
