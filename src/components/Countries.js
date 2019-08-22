import React from "react"
import { Query } from "react-apollo"
import { gql } from "apollo-boost"

const Get_Countries = gql`
	{
		countries {
			name
			code
            emoji
            currency
            native
            
            
		}
	}
`

const Countries = () => (
	<Query query={Get_Countries}>
		{({ loading, error, data }) => {
			if (loading) return <h1>Loading...</h1>
			if (error) return <h2>Error Loading Data</h2>

			return data.countries.map(({ name, code, emoji, currency, native }) => (
				<div key={code}>
					<p>Name: {name}</p>
					<p>Flag: {emoji}</p>
                    <p>Currency: {currency}</p>
                    <p>Native: {native}</p>
                    
                   
					<hr />
				</div>
			))
		}}
	</Query>
)

export default Countries