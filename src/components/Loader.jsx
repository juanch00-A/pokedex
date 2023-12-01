import { cardio } from 'ldrs'
cardio.register()

export const Loader = () => {
	return (
        <div className="container-loader">
            <l-cardio size="50" stroke="4" speed="2" color="black" ></l-cardio>
        </div>
    )
};





