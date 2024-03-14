import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
	const { workouts, dispatch } = useWorkoutsContext();

	useEffect(() => {
		const fetchWorkouts = async () => {
			const response = await fetch("/api/workouts"); // backend server ook "proxy" toegevoegd in package.json anders kan je geen cross origin requests (ALLEEN TIJDENS DEVELOPMENT)
			const json = await response.json();

			if (response.ok) {
				dispatch({ type: "SET_WORKOUTS", payload: json }); // ALS RESPONSE OK IS? START DIT DE WORKOUTSREDUCER FUNCTIE MET DE INGEGEVEN ACTION / DIT GEBRUIKT GLOBALE CONTEXT IPV LOCAL STATES
			}
		};

		fetchWorkouts();
	}, [dispatch]);

	return (
		<div className="home">
			<div className="workouts">
				{workouts &&
					workouts.map((workout) => (
						<WorkoutDetails key={workout._id} workout={workout} />
					))}
			</div>
			<WorkoutForm />
		</div>
	);
};

export default Home;
