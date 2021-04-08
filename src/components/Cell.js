import React from 'react';
import { StyledCell } from "./styles/StyledCell";
import { TETROMIONS } from "../tetromions";

const Cell = ({ type }) => (
    <StyledCell type={type} color={TETROMIONS[type].color}>
        Cell
    </StyledCell>
)


export default Cell