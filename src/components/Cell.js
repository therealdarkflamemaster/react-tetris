import React from 'react';
import { StyledCell } from "./styles/StyledCell";
import { TETROMIONS } from "../tetromions";

const Cell = ({ type }) => (
    <StyledCell type={type} color={TETROMIONS[type].color} />
)


export default React.memo(Cell)