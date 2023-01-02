import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import JSONPretty from "react-json-pretty";

export const Profile = () => {
	const { user } = useAuth0();
	return (
		<div>
			{/* <JSONPretty data={user} /> */}
			{JSON.stringify(user)}
		</div>
	);
};
