import styled from 'styled-components';

const inputFont = '2.4rem DinMC';
const inputHeight = 4;
const inputSpacing = 1;
const indicatorSize = (inputHeight * 2) + inputSpacing;

export const CharacterFieldsWrap = styled.div`
	width: 100%;
`;

export const CharacterInputWrap = styled.div`
	flex-wrap: wrap;
	width: 100%;
`;

export const RegionSelect = styled.select`
	height: ${inputHeight}rem;
	width: 10rem;
	margin-right: ${inputSpacing}rem;
	font: ${inputFont};
`;

export const RealmSelect = RegionSelect.extend`
	flex-grow: 1;
	margin-right: 0;
`;

export const NameInput = styled.input`
	width: 100%;
	height: ${inputHeight}rem;
	margin-top: ${inputSpacing}rem;
	padding: 0.8rem;
	border-radius: 0.4rem;
	font: ${inputFont};
	text-transform: capitalize;
`;

export const LoadingIndicator = styled.div`
	min-height: ${indicatorSize}rem;
	min-width: ${indicatorSize}rem;
	margin-left: 2rem;
	border-radius: 0.4rem;
	background-color: #444;
`;
