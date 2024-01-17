
const Alerta = ({value,type}) => {
  return (
		<div className={`
			fixed top-4 left-1/2 -translate-x-1/2 py-3 px-8 rounded-lg  font-primaria border-[2px] 
			${type === 'error' ? 
			'bg-[#fd697c] border-[#913844]' 
			: 
			'bg-[#34b991] border-[#2d755a]'
			}
		`}
		>
			<p 
				className={`font-[400] 
					${type === 'error' ? 
						'text-[#8b2e2e]' 
						: 
						'text-[#1c5842]'
					}`
				}
			>
					{value}
				</p>
		</div>
	);
}
 
export default Alerta;