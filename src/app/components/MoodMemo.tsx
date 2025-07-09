export default function MoodMemo() {
  return (
    <div>
      <textarea
        placeholder=' 음악을 들으며 기분이 어떤지 적어보아요'
        className='w-full mt-6 p-2 border rounded-md'
        rows={10}
      />
      <div className='flex justify-center'>
        <button className='w-full mt-[2vh] cursor-pointer border-2 border-[#ed9d12] px-4 py-2 rounded-xl hover:bg-[#ed9d12] hover:text-[#fff]'>
          저장
        </button>
      </div>
    </div>
  );
}
