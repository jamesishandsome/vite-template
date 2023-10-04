import { counter } from '@/reducer';
import './style.css';

import { useAppDispatch, useAppSelector } from '@/hooks';

function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="card">
        <button onClick={() => dispatch(counter.increment())}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export { Home };
