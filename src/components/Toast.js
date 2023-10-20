export default function Toast({ set, mensaje }) {
  setTimeout(() => {
    set([false, null]);
  }, 600);
  return (
    <div className='z-20 absolute w-full left-0 top-0 h-full flex items-center justify-center '>
      <div className='shadow p-8 rounded bg-white'>{mensaje}</div>
    </div>
  );
}
