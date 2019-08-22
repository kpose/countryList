import React from "react"
import { Query } from "react-apollo"
import { gql } from "apollo-boost"

const Get_Countries = gql`
	{
		countries {
			name
			code
            emoji
            
		}
	}
`

const Countries = () => (
	<Query query={Get_Countries}>
		{({ loading, error, data }) => {
			if (loading) return <h1>Loading...</h1>
			if (error) return <h2>Error Loading Data</h2>

			return data.countries.map(({ name, code }) => (
				<div key={code}>
					<p>Name: {name}</p>
					
                   
					<hr />
				</div>
			))
		}}
	</Query>
)

export default Countries