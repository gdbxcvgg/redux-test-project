import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'
import type { RootType } from '../../app/store'
import { useState } from 'react'

const Counter = () => {
	const count = useSelector((state: RootType) => state.counter.value)
	const dispatch = useDispatch()

	const [incrementAmount, setIncrementAmount] = useState<number>(0)
	const amount = Number(incrementAmount) || 0

	const resetAll = () => {
		setIncrementAmount(0)
		dispatch(reset())
	}

	return (
		<>
			<h2>{count}</h2>

			<div>
				<button onClick={() => dispatch(increment())}>+</button>
				<button onClick={() => dispatch(decrement())}>-</button>
			</div>

			<div>
				<input
					type="number"
					onChange={(e) => setIncrementAmount(Number(e.target.value) || 0)}
					value={incrementAmount}
				/>

				<button onClick={() => dispatch(incrementByAmount(amount))}>
					Increment counter by {amount}
				</button>
			</div>

			<button onClick={resetAll}>Reset</button>
		</>
	)
}

export default Counter
