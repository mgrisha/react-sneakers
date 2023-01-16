import React from 'react';
import { PulseLoader } from "react-spinners";

export default function Loader () {
	return (
		<PulseLoader
			color="#9dd558"
			margin={5}
			size={10}
		/>
	);
}