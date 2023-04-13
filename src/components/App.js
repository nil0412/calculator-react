import React, { useState } from "react";

function App() {
	const [result, setResult] = useState("");

	const handleClick = (e) => {
		setResult(result.concat(e.target.name));
	};

	const clear = () => {
		setResult("");
	};

	const backspace = () => {
		setResult(result.slice(0, -1));
	};

	const calculate = () => {
		try {
			setResult(eval(result).toString());
		} catch (error) {
			setResult("Error");
		}
	};

	return (
		<div className="App">
			<div className="calculator-container">
				<form className="display">
					<input type="text" value={result} />
				</form>
				<div className="calculator-btns">
					<div className="button-row">
						<button className="operator" onClick={clear} style={{width: "50%"}}>
							AC
						</button>
						<button className="operator" onClick={backspace}>
							C
						</button>
						<button className="operator" name="/" onClick={handleClick}>
							&divide;
						</button>
					</div>
					<div className="button-row">
						<button name="7" onClick={handleClick}>
							7
						</button>
						<button name="8" onClick={handleClick}>
							8
						</button>
						<button name="9" onClick={handleClick}>
							9
						</button>
						<button className="operator" name="*" onClick={handleClick}>
							&times;
						</button>
					</div>
					<div className="button-row">
						<button name="4" onClick={handleClick}>
							4
						</button>
						<button name="5" onClick={handleClick}>
							5
						</button>
						<button name="6" onClick={handleClick}>
							6
						</button>
						<button className="operator" name="-" onClick={handleClick}>
							&ndash;
						</button>
					</div>
					<div className="button-row">
						<button name="1" onClick={handleClick}>
							1
						</button>
						<button name="2" onClick={handleClick}>
							2
						</button>
						<button name="3" onClick={handleClick}>
							3
						</button>
						<button className="operator" name="+" onClick={handleClick}>
							+
						</button>
					</div>
					<div className="button-row">
						<button name="0" onClick={handleClick} style={{width: "50%"}}>
							0
						</button>
						<button name="." onClick={handleClick}>
							.
						</button>
						<button className="operator" onClick={calculate}>
							=
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
