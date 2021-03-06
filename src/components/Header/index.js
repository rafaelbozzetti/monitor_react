import React, {Component} from 'react';
import styled from 'styled-components'
import './styles.css';

const Select = styled.select`
		background: ${props => props.primary ? "white" : "white"};
		color: ${props => props.primary ? "#696969" : "#696969"};
		font-size: 1em;
		margin: 0.5em;
		padding: 0.25em 1em;
		border: 1px solid #696969;
		border-radius: 3px;
`;

const SelectMonitType = (props) => {
	return (
		<Select onChange={() => props.changeMonitType()}>
			<option value="1"> Ramais </option>
			<option value="2"> Agentes </option>
			<option value="3"> Chamadas </option>
			<option value="4"> Troncos </option>
			<option value="5"> Filas </option>
			<option value="6"> Estacionamentos </option>
			<option value="7"> Gravações </option>
			<option value="8"> Controle de Acesso </option>
		</Select>
	)
}

const SelectStatus = (props) => {
	return (props.type === '1' || props.type === '2') &&
		<Select>
			<option>Alocado</option>
			<option>Não Alocado</option>
		</Select>

}

const SelectDisposition = (props) => {
	return (props.type === '1' || props.type === '2') &&
		<Select>
			<option>Conectado</option>
			<option>Indisponível</option>
		</Select>

}

const SelectCallDisposition = (props) => {
	return (props.type === '3') &&
		<Select>
			<option>Iniciada</option>
			<option>Originada</option>
			<option>Recebida</option>
			<option>Estabelecida</option>
		</Select>
}

const SelectAccessControl = (props) => {
	return (props.type === '8')  &&
			<div>
				<Select>
					<option>Site 01</option>
				</Select>
				<Select>
					<option>Portas</option>
				</Select>
				<Select>
					<option>Atendentes</option>
				</Select>
			</div>
}

class Header extends Component {

	constructor() {
		super()
		this.state = {
			type: '1'
		}
	}

	changeMonitType = index => {
		this.setState({
				type: event.target.value
		})
	}

	render() {
		
		return (
			<header id="main-header">
				<SelectMonitType changeMonitType={this.changeMonitType} type={this.state.type} />
				<SelectStatus type={this.state.type} />
				<SelectDisposition type={this.state.type} />
				<SelectCallDisposition type={this.state.type} />
				<SelectAccessControl type={this.state.type} />
			</header>
		)
	}
}

export default Header;