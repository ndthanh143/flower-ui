import './style.scss';

export function Loading() {
  return (
    <div className='wrapper'>
      <div className='box-wrap !w-[40px] !h-[40px]'>
        <div className='box one'></div>
        <div className='box two'></div>
        <div className='box three'></div>
        <div className='box four'></div>
        <div className='box five'></div>
        <div className='box six'></div>
      </div>
    </div>
  );
}
